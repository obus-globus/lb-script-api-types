import type { Provider } from '../../../../../com/viaversion/viaversion/api/platform/providers/Provider.d.ts'
import type { Object } from '../../../../../java/lang/Object.d.ts'
export abstract class BlobCacheProvider extends Object implements Provider {
    constructor()
    addBlob(arg0: number, arg1: number[]): void;
    getBlob(arg0: number): number[];
    hasBlob(arg0: number): boolean;
}