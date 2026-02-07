import { setExtensionStatus, getExtensionStatus, getChatRedactions, getChatId } from '../messages';
import { EXTENSION_STATUS_ENABLED, EXTENSION_STATUS_DISABLED } from '../constants';

document.addEventListener('DOMContentLoaded', async () => {
  const statusToggle = document.getElementById('statusToggle') as HTMLInputElement;
  const chatIdElement = document.getElementById('chatId')!;
  const redactionCount = document.getElementById('redactionCount')!;

  const loadExtensionStatus = async (): Promise<void> => {
    const status = await getExtensionStatus();
    statusToggle.checked = status === EXTENSION_STATUS_ENABLED;
  };

  const loadChatId = async (): Promise<void> => {
    chatIdElement.textContent = await getChatId();
  };

  const loadRedactionCount = async (): Promise<void> => {
    const redactionMap = await getChatRedactions();
    redactionCount.textContent = String(Object.keys(redactionMap).length);
  };

  statusToggle.addEventListener('change', async () => {
    setExtensionStatus(statusToggle.checked ? EXTENSION_STATUS_ENABLED : EXTENSION_STATUS_DISABLED);
  });

  await loadExtensionStatus();
  await loadChatId();
  await loadRedactionCount();
});
