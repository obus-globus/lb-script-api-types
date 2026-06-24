import type { Object } from '../../../../../../java/lang/Object.d.ts'
export class ChunkLoadingRenderState extends Object {
    constructor()
    addedEmptySections: (Object | null)[];
    addedLoadedChunks: (Object | null)[];
    loadedExpectedChunks: (Object | null)[];
    removedEmptySections: (Object | null)[];
    removedLoadedChunks: (Object | null)[];
    reset(): void;
}