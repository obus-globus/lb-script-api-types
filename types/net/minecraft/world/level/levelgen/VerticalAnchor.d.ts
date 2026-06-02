import type { Object } from '../../../../../java/lang/Object.d.ts'
import type { WorldGenerationContext } from '../../../../../net/minecraft/world/level/levelgen/WorldGenerationContext.d.ts'
export interface VerticalAnchor extends Object{
    resolveY(heightAccessor: WorldGenerationContext): number;
}