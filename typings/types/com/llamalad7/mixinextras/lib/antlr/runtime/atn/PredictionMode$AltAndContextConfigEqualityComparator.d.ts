import type { ATNConfig } from '../../../../../../../com/llamalad7/mixinextras/lib/antlr/runtime/atn/ATNConfig.d.ts'
import type { AbstractEqualityComparator } from '../../../../../../../com/llamalad7/mixinextras/lib/antlr/runtime/misc/AbstractEqualityComparator.d.ts'
import type { Object } from '../../../../../../../java/lang/Object.d.ts'
export class PredictionMode$AltAndContextConfigEqualityComparator extends AbstractEqualityComparator<ATNConfig> {
    static INSTANCE: PredictionMode$AltAndContextConfigEqualityComparator;
    private constructor()
    equals(arg0: ATNConfig, arg1: ATNConfig): boolean;
    equals(other: Object | null): boolean;
    hashCode(): number;
    hashCode(arg0: ATNConfig): number;
}