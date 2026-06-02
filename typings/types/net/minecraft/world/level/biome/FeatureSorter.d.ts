import type { Function } from '../../../../../java/util/function/Function.d.ts'
import type { Object } from '../../../../../java/lang/Object.d.ts'
import type { FeatureSorter$StepFeatureData } from '../../../../../net/minecraft/world/level/biome/FeatureSorter$StepFeatureData.d.ts'
export class FeatureSorter extends Object {
    static buildFeaturesPerStep(paramfeatureSources: (Object | null)[], paramfeatureGetter: (param0: Object | null) => Object | null, paramtryReducingError: boolean): FeatureSorter$StepFeatureData[];
    constructor()
}