import type { Object } from '../../../../../../../java/lang/Object.d.ts'
import type { Level } from '../../../../../../../net/minecraft/world/level/Level.d.ts'
export interface MaybeInLevelObject extends Object{
    lithium$handleAddedToLevel(arg0: Level): void;
    lithium$handleRemovedFromLevel(arg0: Level): void;
    lithium$isInLevel(): boolean;
}