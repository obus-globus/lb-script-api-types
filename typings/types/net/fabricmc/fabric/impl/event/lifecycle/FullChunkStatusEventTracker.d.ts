import type { Object } from '../../../../../../java/lang/Object.d.ts'
import type { FullChunkStatus } from '../../../../../../net/minecraft/server/level/FullChunkStatus.d.ts'
export interface FullChunkStatusEventTracker extends Object{
    fabric_getCurrentEventFullChunkStatus(): FullChunkStatus;
    fabric_setCurrentEventFullChunkStatus(arg0: FullChunkStatus): void;
}