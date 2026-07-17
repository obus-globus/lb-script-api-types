import type { JavaMap } from '../../../../../../JavaMap.d.ts'
import type { BlobCacheProvider } from '../../../../../../net/raphimc/viabedrock/protocol/provider/BlobCacheProvider.d.ts'
export class InMemoryBlobCacheProvider extends BlobCacheProvider {
    constructor()
    // private blobs: JavaMap<number, number[]>;
    addBlob(arg0: number, arg1: number[]): void;
    getBlob(arg0: number): number[];
    hasBlob(arg0: number): boolean;
}