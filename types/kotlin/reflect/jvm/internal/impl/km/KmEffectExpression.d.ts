import type { Object } from '../../../../../../java/lang/Object.d.ts'
import type { KmConstantValue } from '../../../../../../kotlin/reflect/jvm/internal/impl/km/KmConstantValue.d.ts'
import type { KmType } from '../../../../../../kotlin/reflect/jvm/internal/impl/km/KmType.d.ts'
export class KmEffectExpression extends Object {
    constructor()
    readonly andArguments: KmEffectExpression[];
    readonly constantValue: KmConstantValue;
    // private flags: number;
    // private isInstanceType: KmType;
    readonly orArguments: KmEffectExpression[];
    readonly parameterIndex: number;
    getAndArguments(): KmEffectExpression[];
    getFlags$kotlin_metadata(): number;
    getOrArguments(): KmEffectExpression[];
    setConstantValue(arg0: KmConstantValue): void;
    setFlags$kotlin_metadata(arg0: number): void;
    setInstanceType(arg0: KmType): void;
    setParameterIndex(arg0: number): void;
}