import type { Object } from '../../../../../../java/lang/Object.d.ts'
import type { DeltaTracker } from '../../../../../../net/minecraft/client/DeltaTracker.d.ts'
export interface LevelRendererExtensions extends Object{
    fabric_prepareLevelExtractionContext(arg0: DeltaTracker): void;
}