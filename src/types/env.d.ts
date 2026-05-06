declare global {
  interface Window {
    __ENV?: {
      NEXT_PUBLIC_API_BASE_URL: string;
      NEXT_PUBLIC_DRAWIO_BASE_URL?: string;
    };
  }
}

export {};
