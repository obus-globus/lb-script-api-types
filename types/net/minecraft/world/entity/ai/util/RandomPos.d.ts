import type { Predicate } from '../../../../../../java/util/function/Predicate.d.ts'
import type { Supplier } from '../../../../../../java/util/function/Supplier.d.ts'
import type { ToDoubleFunction } from '../../../../../../java/util/function/ToDoubleFunction.d.ts'
import type { Object } from '../../../../../../java/lang/Object.d.ts'
import type { BlockPos } from '../../../../../../net/minecraft/core/BlockPos.d.ts'
import type { RandomSource } from '../../../../../../net/minecraft/util/RandomSource.d.ts'
import type { PathfinderMob } from '../../../../../../net/minecraft/world/entity/PathfinderMob.d.ts'
import type { Vec3 } from '../../../../../../net/minecraft/world/phys/Vec3.d.ts'
export class RandomPos extends Object {
    static generateRandomDirection(paramrandom: RandomSource, paramhorizontalDist: number, paramverticalDist: number): BlockPos;
    static generateRandomDirectionWithinRadians(paramrandom: RandomSource, paramminHorizontalDist: number, parammaxHorizontalDist: number, paramverticalDist: number, paramflyingHeight: number, paramxDir: number, paramzDir: number, parammaxXzRadiansFromDir: number): BlockPos;
    static generateRandomPos(paramposSupplier: () => BlockPos, parampositionWeightFunction: (param0: BlockPos) => kotlin.Double): Vec3;
    static generateRandomPos(parammob: PathfinderMob, paramposSupplier: () => BlockPos): Vec3;
    static generateRandomPosTowardDirection(parammob: PathfinderMob, paramxzDist: number, paramrandom: RandomSource, paramdirection: BlockPos): BlockPos;
    static moveUpOutOfSolid(parampos: BlockPos, parammaxY: number, paramsolidityTester: (param0: BlockPos) => kotlin.Boolean): BlockPos;
    static moveUpToAboveSolid(parampos: BlockPos, paramaboveSolidAmount: number, parammaxY: number, paramsolidityTester: (param0: BlockPos) => kotlin.Boolean): BlockPos;
    constructor()
}