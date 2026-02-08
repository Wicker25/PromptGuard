import { escapeHtml } from '../helpers/dom';
import { PII_STATUS_EXCLUDED } from '../constants';
import { PIIStatus } from '../types';

export interface PlaceholderChipOptions {
  placeholder: string;
  originalValue: string;
  piiType: string;
  isExcluded?: boolean;
  onToggleExclude?: (excluded: boolean) => void;
}

let isInitialized = false;
let isActionMenuOpen: HTMLElement | null = null;

export function initializePlaceholderChip(): void {
  if (isInitialized) {
    return;
  }

  isInitialized = true;

  document.addEventListener('click', handleActionMenuBlur);
}

const showActionMenu = (chipElement: HTMLElement, options: PlaceholderChipOptions): void => {
  closeActionMenu();

  const { placeholder, originalValue, onToggleExclude } = options;
  const isExcluded = chipElement.getAttribute('data-pg-excluded') === 'true';

  const rect = chipElement.getBoundingClientRect();
  const menuElement = document.createElement('div');
  menuElement.className = 'pg-action-menu';

  const actionIcon = isExcluded ? '🔒' : '🔓';
  const actionText = isExcluded ? 'Protect this value' : 'Stop protecting';

  menuElement.innerHTML = `
    <div class="pg-menu-header">${escapeHtml(placeholder)}</div>
    <div class="pg-menu-value">${escapeHtml(originalValue)}</div>
    <div class="pg-menu-divider"></div>
    <div class="pg-menu-item" data-action="toggle">
      <span class="pg-menu-item-icon">${actionIcon}</span>
      <span>${actionText}</span>
    </div>
  `;

  const toggleItemElement = menuElement.querySelector('[data-action="toggle"]');
  toggleItemElement?.addEventListener('click', () => {
    if (onToggleExclude) {
      onToggleExclude(!isExcluded);
    }
    closeActionMenu();
  });

  menuElement.style.left = `${rect.left}px`;
  menuElement.style.top = `${rect.bottom + 5}px`;

  document.body.appendChild(menuElement);
  isActionMenuOpen = menuElement;

  // Adjust position if menu goes off-screen
  const menuRect = menuElement.getBoundingClientRect();
  if (menuRect.right > window.innerWidth) {
    menuElement.style.left = `${window.innerWidth - menuRect.width - 10}px`;
  }

  if (menuRect.bottom > window.innerHeight) {
    menuElement.style.top = `${rect.top - menuRect.height - 5}px`;
  }
};

const closeActionMenu = (): void => {
  if (isActionMenuOpen) {
    isActionMenuOpen.remove();
    isActionMenuOpen = null;
  }
};

const handleActionMenuBlur = (e: MouseEvent): void => {
  if (isActionMenuOpen && !isActionMenuOpen.contains(e.target as Node)) {
    closeActionMenu();
  }
};

export function createPlaceholderChip(options: PlaceholderChipOptions): HTMLElement {
  const { placeholder, originalValue, piiType, isExcluded } = options;

  const wrapperElement = document.createElement('span');

  const chipElement = document.createElement('span');
  chipElement.className = 'pg-placeholder-chip';

  if (isExcluded) {
    chipElement.classList.add('pg-excluded');
  }

  chipElement.setAttribute('data-pg-placeholder', placeholder);
  chipElement.setAttribute('data-pg-original', originalValue);
  chipElement.setAttribute('data-pg-type', piiType);
  chipElement.setAttribute('data-pg-excluded', String(!!isExcluded));

  chipElement.innerHTML = `${escapeHtml(originalValue)}<span class="pg-pii-type">${piiType.replace('_', ' ')}</span>`;

  chipElement.addEventListener('click', (e) => {
    e.preventDefault();
    e.stopPropagation();

    showActionMenu(chipElement, options);
  });

  wrapperElement.appendChild(chipElement);

  return wrapperElement;
}

export function updatePlaceholderChipStatus(placeholder: string, status: PIIStatus): void {
  const allChips = document.querySelectorAll<HTMLElement>(
    `.pg-placeholder-chip[data-pg-placeholder="${placeholder}"]`
  );

  allChips.forEach((chip) => {
    if (status === PII_STATUS_EXCLUDED) {
      chip.classList.add('pg-excluded');
      chip.setAttribute('data-pg-excluded', 'true');
    } else {
      chip.classList.remove('pg-excluded');
      chip.setAttribute('data-pg-excluded', 'false');
    }
  });
}

export { closeActionMenu };
