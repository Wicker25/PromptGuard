export const createNotification = (message: string): HTMLElement => {
  const element = document.createElement('div');
  element.className = 'pg-notification';
  element.textContent = message;

  return element;
};

export const showNotification = (message: string): void => {
  hideNotification();

  const element = createNotification(message);
  document.body.appendChild(element);

  setTimeout(() => {
    element.style.animation = 'pg-fade-out 0.3s ease forwards';
    setTimeout(() => element.remove(), 300);
  }, 2500);
};

export const hideNotification = (): void => {
  document.querySelector('.pg-notification')?.remove();
};
