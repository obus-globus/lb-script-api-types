import type { BlobCacheProvider } from '../../../../../../net/raphimc/viabedrock/protocol/provider/BlobCacheProvider.d.ts'
export class NoOpBlobCacheProvider extends BlobCacheProvider {
    constructor()
    addBlob(arg0: number, arg1: number[]): void;
    getBlob(arg0: number): number[];
    hasBlob(arg0: number): boolean;
}