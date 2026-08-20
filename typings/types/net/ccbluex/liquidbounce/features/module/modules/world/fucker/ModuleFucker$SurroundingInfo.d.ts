import type { Object } from '../../../../../../../../java/lang/Object.d.ts'
import type { Comparable } from '../../../../../../../../java/lang/Comparable.d.ts'
import type { BlockPos } from '../../../../../../../../net/minecraft/core/BlockPos.d.ts'
import type { Vec3 } from '../../../../../../../../net/minecraft/world/phys/Vec3.d.ts'
/**
 * @param actualTargetPos the target block this surrounding path opens
 * @param targetPoint the outline point that should become visible from the player's eyes
 * @param resistance proportional to the time it will take until the actual target is reached
 * @param blockerCount number of blocks that need to be broken for the path
 *
 * Source: {@link https://github.com/CCBlueX/LiquidBounce/blob/a9cf2b145901ecd37d3f2a815c20cf0955e76853/src/main/kotlin/net/ccbluex/liquidbounce/features/module/modules/world/fucker/ModuleFucker.kt#L538 | src/main/kotlin/net/ccbluex/liquidbounce/features/module/modules/world/fucker/ModuleFucker.kt:538}
 */
export class ModuleFucker$SurroundingInfo extends Object implements Comparable<ModuleFucker$SurroundingInfo> {
    constructor(actualTargetPos: BlockPos, targetPoint: Vec3, resistance: number, blockerCount: number, firstBlockDistanceToTarget: number, firstBlockDistanceToEyes: number)
    readonly actualTargetPos: BlockPos;
    readonly blockerCount: number;
    readonly firstBlockDistanceToEyes: number;
    readonly firstBlockDistanceToTarget: number;
    readonly resistance: number;
    readonly targetPoint: Vec3;
    compareTo(other: ModuleFucker$SurroundingInfo): number;
    component1(): BlockPos;
    component2(): Vec3;
    component3(): number;
    component4(): number;
    component5(): number;
    component6(): number;
    copy(actualTargetPos: BlockPos, targetPoint: Vec3, resistance: number, blockerCount: number, firstBlockDistanceToTarget: number, firstBlockDistanceToEyes: number): ModuleFucker$SurroundingInfo;
    equals(other: Object | null): boolean;
    hashCode(): number;
    toString(): string;
}