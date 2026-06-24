import type { Object } from '../../../../../java/lang/Object.d.ts'
import type { BorderStatus } from '../../../../../net/minecraft/world/level/border/BorderStatus.d.ts'
import type { WorldBorder } from '../../../../../net/minecraft/world/level/border/WorldBorder.d.ts'
import type { WorldBorder$BorderExtent } from '../../../../../net/minecraft/world/level/border/WorldBorder$BorderExtent.d.ts'
import type { VoxelShape } from '../../../../../net/minecraft/world/phys/shapes/VoxelShape.d.ts'
export class WorldBorder$StaticBorderExtent extends Object implements WorldBorder$BorderExtent {
    constructor(null_: WorldBorder, size: number)
    // private maxX: number;
    // private maxZ: number;
    // private minX: number;
    // private minZ: number;
    // private shape: VoxelShape;
    readonly size: number;
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
    // private updateBox(): void;
}