export const escapeHtml = (text: string): string => {
  const divElement = document.createElement('div');
  divElement.textContent = text;

  return divElement.innerHTML;
};

export const findTextNodes = (element: HTMLElement, filter?: (node: Node) => boolean): Text[] => {
  const textNodes: Text[] = [];

  const treeWalker = document.createTreeWalker(element, NodeFilter.SHOW_TEXT, {
    acceptNode: (node) => {
      if (filter && filter(node)) {
        return NodeFilter.FILTER_REJECT;
      }

      return NodeFilter.FILTER_ACCEPT;
    },
  });

  while (treeWalker.nextNode()) {
    textNodes.push(treeWalker.currentNode as Text);
  }

  return textNodes;
};

export const waitForElement = <T extends Element>(
  elementSelector: string | (() => T | null)
): Promise<T> => {
  return new Promise((resolve) => {
    const getElement = (): T | null => {
      if (typeof elementSelector === 'string') {
        return document.querySelector<T>(elementSelector);
      }

      return elementSelector();
    };

    const element = getElement();

    if (element) {
      resolve(element);
      return;
    }

    const mutationObserver = new MutationObserver(() => {
      const element = getElement();

      if (element) {
        mutationObserver.disconnect();
        resolve(element);
      }
    });

    mutationObserver.observe(document.body, {
      childList: true,
      subtree: true,
    });
  });
};
