import browser from 'webextension-polyfill';
import type {
  ExtensionStatus,
  Redactions,
  MessageSetExtensionStatusRequest,
  MessageGetExtensionStatusRequest,
  MessageGetExtensionStatusResponse,
  MessageSetChatRedactionsRequest,
  MessageGetChatRedactionsRequest,
  MessageGetChatRedactionsResponse,
  MessageSetChatExcludedPIIRequest,
  MessageGetChatExcludedPIIRequest,
  MessageGetChatExcludedPIIResponse,
  MessageGetChatIdRequest,
  MessageGetChatIdResponse,
} from './types';
import {
  MESSAGE_SET_EXTENSION_STATUS,
  MESSAGE_GET_EXTENSION_STATUS,
  MESSAGE_SET_CHAT_REDACTIONS,
  MESSAGE_GET_CHAT_REDACTIONS,
  MESSAGE_SET_CHAT_EXCLUDED_PII,
  MESSAGE_GET_CHAT_EXCLUDED_PII,
  MESSAGE_GET_CHAT_ID,
} from './constants';

export const setExtensionStatus = async (status: ExtensionStatus): Promise<void> => {
  await browser.runtime.sendMessage({
    type: MESSAGE_SET_EXTENSION_STATUS,
    status,
  } as MessageSetExtensionStatusRequest);
};

export const getExtensionStatus = async (): Promise<ExtensionStatus> => {
  const response = (await browser.runtime.sendMessage({
    type: MESSAGE_GET_EXTENSION_STATUS,
  } as MessageGetExtensionStatusRequest)) as MessageGetExtensionStatusResponse;

  return response.status;
};

export const getChatId = async (): Promise<string> => {
  const response = (await browser.runtime.sendMessage({
    type: MESSAGE_GET_CHAT_ID,
  } as MessageGetChatIdRequest)) as MessageGetChatIdResponse;

  return response.chatId;
};

export const setChatRedactions = async (redactions: Redactions): Promise<void> => {
  await browser.runtime.sendMessage({
    type: MESSAGE_SET_CHAT_REDACTIONS,
    redactions: redactions,
  } as MessageSetChatRedactionsRequest);
};

export const getChatRedactions = async (): Promise<Redactions> => {
  const response = (await browser.runtime.sendMessage({
    type: MESSAGE_GET_CHAT_REDACTIONS,
  } as MessageGetChatRedactionsRequest)) as MessageGetChatRedactionsResponse;

  return response.redactions || {};
};

export const setChatExcludedPII = async (excludedPII: string[]): Promise<void> => {
  await browser.runtime.sendMessage({
    type: MESSAGE_SET_CHAT_EXCLUDED_PII,
    excludedPII,
  } as MessageSetChatExcludedPIIRequest);
};

export const getChatExcludedPII = async (): Promise<string[]> => {
  const response = (await browser.runtime.sendMessage({
    type: MESSAGE_GET_CHAT_EXCLUDED_PII,
  } as MessageGetChatExcludedPIIRequest)) as MessageGetChatExcludedPIIResponse;

  return response.excludedPII || [];
};
