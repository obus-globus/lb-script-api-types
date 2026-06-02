import type { Object } from '../../../../../../java/lang/Object.d.ts'
import type { KmEffectExpression } from '../../../../../../kotlin/reflect/jvm/internal/impl/km/KmEffectExpression.d.ts'
import type { KmEffectInvocationKind } from '../../../../../../kotlin/reflect/jvm/internal/impl/km/KmEffectInvocationKind.d.ts'
import type { KmEffectType } from '../../../../../../kotlin/reflect/jvm/internal/impl/km/KmEffectType.d.ts'
export class KmEffect extends Object {
    constructor(arg0: KmEffectType, arg1: KmEffectInvocationKind)
    readonly conclusion: KmEffectExpression;
    readonly constructorArguments: KmEffectExpression[];
    // private invocationKind: KmEffectInvocationKind;
    // private type: KmEffectType;
    getConstructorArguments(): KmEffectExpression[];
    setConclusion(arg0: KmEffectExpression): void;
}