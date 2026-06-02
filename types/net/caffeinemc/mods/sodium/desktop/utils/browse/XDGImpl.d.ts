import type { Object } from '../../../../../../../java/lang/Object.d.ts'
import type { BrowseUrlHandler } from '../../../../../../../net/caffeinemc/mods/sodium/desktop/utils/browse/BrowseUrlHandler.d.ts'
export class XDGImpl extends Object implements BrowseUrlHandler {
    static createImplementation(): BrowseUrlHandler;
    static isSupported(): boolean;
    constructor()
    browseTo(arg0: string): void;
}