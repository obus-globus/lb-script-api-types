import type { Object } from '../../../../../../../../java/lang/Object.d.ts'
export interface ClientChunkEventListener extends Object{
    onChunkStatusAdded(arg0: number, arg1: number, arg2: number): void;
    onChunkStatusRemoved(arg0: number, arg1: number, arg2: number): void;
    updateLoadDistance(arg0: number): void;
    updateMapCenter(arg0: number, arg1: number): void;
}