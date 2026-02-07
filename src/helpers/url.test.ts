import { parseChatIdFromUrl } from './url';

describe('parseChatIdFromUrl', () => {
  it('should extract chat ID from a ChatGPT URL', () => {
    expect(parseChatIdFromUrl('https://chatgpt.com/c/a1b2c3d4-e5f6-7890-abcd-ef1234567890')).toBe(
      'a1b2c3d4-e5f6-7890-abcd-ef1234567890'
    );
  });

  it('should extract chat ID from a URL with trailing path', () => {
    expect(
      parseChatIdFromUrl('https://chatgpt.com/c/abcdef01-2345-6789-abcd-ef0123456789/extra')
    ).toBe('abcdef01-2345-6789-abcd-ef0123456789');
  });

  it('should return "pending" for URLs without a chat ID', () => {
    expect(parseChatIdFromUrl('https://chatgpt.com/')).toBe('pending');
  });

  it('should return "pending" for empty strings', () => {
    expect(parseChatIdFromUrl('')).toBe('pending');
  });
});
