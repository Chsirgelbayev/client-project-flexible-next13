export type ProviderType = {
  id: string;
  name: string;
  type: string;
  signinUrl: string;
  callbackUrl: string;
  signinUrlParams: Record<string, string> | undefined;
};

export type ProvidersType = Record<string, ProviderType>;
