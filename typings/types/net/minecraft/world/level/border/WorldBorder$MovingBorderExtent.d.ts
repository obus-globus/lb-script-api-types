import type { Object } from '../../../../../java/lang/Object.d.ts'
import type { BorderStatus } from '../../../../../net/minecraft/world/level/border/BorderStatus.d.ts'
import type { WorldBorder } from '../../../../../net/minecraft/world/level/border/WorldBorder.d.ts'
import type { WorldBorder$BorderExtent } from '../../../../../net/minecraft/world/level/border/WorldBorder$BorderExtent.d.ts'
import type { VoxelShape } from '../../../../../net/minecraft/world/phys/shapes/VoxelShape.d.ts'
export class WorldBorder$MovingBorderExtent extends Object implements WorldBorder$BorderExtent {
    private constructor(null_: WorldBorder, from: number, to: number, duration: number, gameTime: number)
    // private from: number;
    // private lerpBegin: number;
    // private lerpDuration: number;
    // private lerpEnd: number;
    // private lerpProgress: number;
    readonly previousSize: number;
    readonly size: number;
    // private to: number;
    // private calculateSize(): number;
    getCollisionShape(): VoxelShape;
    getLerpSpeed(): number;
    getLerpTarget(): number;
    getLerpTime(): number;
    getMaxX(deltaPartialTick: number): number;
    getMaxZ(deltaPartialTick: number): number;
    getMinX(deltaPartialTick: number): number;
    getMinZ(deltaPartialTick: number): number;
    getPreviousSize(): number;
    getSize(): number;
    getStatus(): BorderStatus;
    onAbsoluteMaxSizeChange(): void;
    onCenterChange(): void;
    update(): WorldBorder$BorderExtent;
}