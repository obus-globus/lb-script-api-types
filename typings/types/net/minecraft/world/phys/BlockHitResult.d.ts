import type { BlockPos } from '../../../../net/minecraft/core/BlockPos.d.ts'
import type { Direction } from '../../../../net/minecraft/core/Direction.d.ts'
import type { HitResult } from '../../../../net/minecraft/world/phys/HitResult.d.ts'
import type { HitResult$Type } from '../../../../net/minecraft/world/phys/HitResult$Type.d.ts'
import type { Vec3 } from '../../../../net/minecraft/world/phys/Vec3.d.ts'
export class BlockHitResult extends HitResult {
    static miss(paramlocation: Vec3, paramdirection: Direction, parampos: BlockPos): BlockHitResult;
    constructor(location: Vec3, direction: Direction, pos: BlockPos, inside: boolean)
    constructor(location: Vec3, direction: Direction, pos: BlockPos, inside: boolean, worldBorderHit: boolean)
    readonly blockPos: BlockPos;
    readonly direction: Direction;
    readonly inside: boolean;
    // private miss: boolean;
    readonly worldBorderHit: boolean;
    getBlockPos(): BlockPos;
    getDirection(): Direction;
    getType(): HitResult$Type;
    hitBorder(): BlockHitResult;
    isInside(): boolean;
    isWorldBorderHit(): boolean;
    withDirection(direction: Direction): BlockHitResult;
    withPosition(blockPos: BlockPos): BlockHitResult;
}