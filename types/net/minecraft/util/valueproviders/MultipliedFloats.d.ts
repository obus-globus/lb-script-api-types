import type { Object } from '../../../../java/lang/Object.d.ts'
import type { RandomSource } from '../../../../net/minecraft/util/RandomSource.d.ts'
import type { SampledFloat } from '../../../../net/minecraft/util/valueproviders/SampledFloat.d.ts'
export class MultipliedFloats extends Object implements SampledFloat {
    constructor(values: SampledFloat[])
    // private values: SampledFloat[];
    sample(random: RandomSource): number;
    toString(): string;
}