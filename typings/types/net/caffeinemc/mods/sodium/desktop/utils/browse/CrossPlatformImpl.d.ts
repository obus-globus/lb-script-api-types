import type { Object } from '../../../../../../../java/lang/Object.d.ts'
import type { BrowseUrlHandler } from '../../../../../../../net/caffeinemc/mods/sodium/desktop/utils/browse/BrowseUrlHandler.d.ts'
export class CrossPlatformImpl extends Object implements BrowseUrlHandler {
    static isSupported(): boolean;
    constructor()
    browseTo(arg0: string): void;
}