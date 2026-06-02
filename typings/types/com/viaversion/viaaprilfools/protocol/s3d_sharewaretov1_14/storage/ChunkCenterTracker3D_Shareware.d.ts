import type { StorableObject } from '../../../../../../com/viaversion/viaversion/api/connection/StorableObject.d.ts'
import type { Object } from '../../../../../../java/lang/Object.d.ts'
export class ChunkCenterTracker3D_Shareware extends Object implements StorableObject {
    constructor()
    readonly chunkCenterX: number;
    readonly chunkCenterZ: number;
    readonly forceSendCenterChunk: boolean;
    getChunkCenterX(): number;
    getChunkCenterZ(): number;
    isForceSendCenterChunk(): boolean;
    onRemove(): void;
    setChunkCenterX(arg0: number): void;
    setChunkCenterZ(arg0: number): void;
    setForceSendCenterChunk(arg0: boolean): void;
}