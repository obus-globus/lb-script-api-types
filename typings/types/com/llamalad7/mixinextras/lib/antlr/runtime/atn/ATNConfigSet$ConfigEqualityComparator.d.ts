import type { ATNConfig } from '../../../../../../../com/llamalad7/mixinextras/lib/antlr/runtime/atn/ATNConfig.d.ts'
import type { AbstractEqualityComparator } from '../../../../../../../com/llamalad7/mixinextras/lib/antlr/runtime/misc/AbstractEqualityComparator.d.ts'
export class ATNConfigSet$ConfigEqualityComparator extends AbstractEqualityComparator<ATNConfig> {
    static INSTANCE: ATNConfigSet$ConfigEqualityComparator;
    private constructor()
    equals(arg0: ATNConfig, arg1: ATNConfig): boolean;
    hashCode(arg0: ATNConfig): number;
}