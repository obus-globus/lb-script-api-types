import type { Object } from '../../../../../../java/lang/Object.d.ts'
import type { RandomSource } from '../../../../../../net/minecraft/util/RandomSource.d.ts'
import type { UniformInt } from '../../../../../../net/minecraft/util/valueproviders/UniformInt.d.ts'
export class SetEntityLookTargetSometimes$Ticker extends Object {
    constructor(interval: UniformInt)
    // private interval: UniformInt;
    // private ticksUntilNextStart: number;
    tickDownAndCheck(random: RandomSource): boolean;
}