import React from 'react';
import { useState, useEffect } from 'react';
import { getProviders, signIn } from 'next-auth/react';
import { ProviderType, ProvidersType } from '@/types/providers.type';

const AuthProviders = () => {
  const [providers, setProviders] = useState<ProvidersType | null>(null);

  const isProviers = providers && Object.values(providers).length > 0;

  useEffect(() => {
    const fetchProviders = async () => {
      const providers = await getProviders();
      console.log(providers);
      setProviders(providers);
    };

    fetchProviders();
  });

  return (
    isProviers && (
      <div>
        {Object.values(providers).map(
          (provider: ProviderType, index: number) => (
            <button key={index} onClick={() => signIn(provider.id)}>
              {provider.id}
            </button>
          )
        )}
      </div>
    )
  );
};

export default AuthProviders;
