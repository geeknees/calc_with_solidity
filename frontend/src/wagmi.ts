import { http, createConfig } from 'wagmi'
import { optimism, optimismSepolia } from 'wagmi/chains'
import { injected } from 'wagmi/connectors'

export const config = createConfig({
  chains: [optimism, optimismSepolia],
  connectors: [injected()],
  ssr: true,
  transports: {
    [optimism.id]: http(),
    [optimismSepolia.id]: http()
  }
})

declare module 'wagmi' {
  interface Register {
    config: typeof config
  }
}
