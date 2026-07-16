import type { Function } from '../../../../../java/util/function/Function.d.ts'
import type { Object } from '../../../../../java/lang/Object.d.ts'
import type { Holder } from '../../../../../net/minecraft/core/Holder.d.ts'
import type { FeatureSorter$StepFeatureData } from '../../../../../net/minecraft/world/level/biome/FeatureSorter$StepFeatureData.d.ts'
import type { PlacedFeature } from '../../../../../net/minecraft/world/level/levelgen/placement/PlacedFeature.d.ts'
export class FeatureSorter extends Object {
    static buildFeaturesPerStep<T extends unknown>(paramfeatureSources: T[], paramfeatureGetter: (param0: T) => Holder<PlacedFeature>[][], paramtryReducingError: boolean): FeatureSorter$StepFeatureData[];
    constructor()
}