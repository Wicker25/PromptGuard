export const parseChatIdFromUrl = (url: string): string => {
  const match = url.match(/\/c\/([a-f0-9-]+)/i);
  return match ? match[1] : 'pending';
};
