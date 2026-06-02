import type { Object } from '../../../../../java/lang/Object.d.ts'
import type { BorderStatus } from '../../../../../net/minecraft/world/level/border/BorderStatus.d.ts'
import type { VoxelShape } from '../../../../../net/minecraft/world/phys/shapes/VoxelShape.d.ts'
export interface WorldBorder$BorderExtent extends Object{
    getCollisionShape(): VoxelShape;
    getLerpSpeed(): number;
    getLerpTarget(): number;
    getLerpTime(): number;
    getMaxX(deltaPartialTick: number): number;
    getMaxZ(deltaPartialTick: number): number;
    getMinX(deltaPartialTick: number): number;
    getMinZ(deltaPartialTick: number): number;
    getSize(): number;
    getStatus(): BorderStatus;
    onAbsoluteMaxSizeChange(): void;
    onCenterChange(): void;
    update(): WorldBorder$BorderExtent;
}