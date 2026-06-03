import type { Object } from '../../../../../java/lang/Object.d.ts'
import type { ATNConfig } from '../../../../../org/antlr/v4/runtime/atn/ATNConfig.d.ts'
import type { AbstractEqualityComparator } from '../../../../../org/antlr/v4/runtime/misc/AbstractEqualityComparator.d.ts'
export class PredictionMode$AltAndContextConfigEqualityComparator extends AbstractEqualityComparator<ATNConfig> {
    static INSTANCE: PredictionMode$AltAndContextConfigEqualityComparator;
    private constructor()
    equals(other: Object | null): boolean;
    equals(arg0: ATNConfig, arg1: ATNConfig): boolean;
    hashCode(): number;
    hashCode(arg0: ATNConfig): number;
}