import { createIdGenerator } from '../utils/id-generator';

type SessionMessage = {
  id: string;
  role: 'user' | 'agent';
  content: string;
  timestamp: number;
};

type StoredSession = {
  id: string;
  backendSessionId?: string;
  title: string;
  messages: SessionMessage[];
  drawIoXml: string | null;
  lastModified: number;
};

export const normalizeSessions = (sessions: StoredSession[]): StoredSession[] => {
  const nextId = createIdGenerator();

  return sessions.map((session) => {
    const usedIds = new Set<string>();
    const messages = session.messages.map((message) => {
      if (!message.id || usedIds.has(message.id)) {
        const normalizedId = nextId();
        usedIds.add(normalizedId);
        return { ...message, id: normalizedId };
      }

      usedIds.add(message.id);
      return message;
    });

    return { ...session, messages };
  });
};
