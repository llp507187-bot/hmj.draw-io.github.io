const DEFAULT_DRAWIO_BASE_URL = 'https://embed.diagrams.net';

export const resolveDrawIoBaseUrl = () => {
  const runtimeBaseUrl = typeof window !== 'undefined' ? window.__ENV?.NEXT_PUBLIC_DRAWIO_BASE_URL : undefined;
  return (runtimeBaseUrl || process.env.NEXT_PUBLIC_DRAWIO_BASE_URL || DEFAULT_DRAWIO_BASE_URL).replace(/\/+$/, '');
};

export const DRAWIO_CONFIG = {
  BASE_URL: resolveDrawIoBaseUrl(),
};
