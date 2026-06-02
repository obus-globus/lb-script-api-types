import type { SelectorProvider } from '../../../../java/nio/channels/spi/SelectorProvider.d.ts'
export abstract class SelectorProviderShim extends SelectorProvider {
    static provider(): SelectorProvider;
    constructor()
}