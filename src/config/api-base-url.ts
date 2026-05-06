const DEFAULT_API_BASE_URL = 'http://localhost:8091/api/v1';

const trimTrailingSlash = (value: string) => value.replace(/\/+$/, '');

export const resolveApiBaseUrl = () => {
  const runtimeBaseUrl = typeof window !== 'undefined' ? window.__ENV?.NEXT_PUBLIC_API_BASE_URL : undefined;
  const configuredBaseUrl = trimTrailingSlash(runtimeBaseUrl || process.env.NEXT_PUBLIC_API_BASE_URL || DEFAULT_API_BASE_URL);

  return configuredBaseUrl;
};
