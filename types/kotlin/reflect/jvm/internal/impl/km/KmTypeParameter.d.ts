import type { Object } from '../../../../../../java/lang/Object.d.ts'
import type { KmType } from '../../../../../../kotlin/reflect/jvm/internal/impl/km/KmType.d.ts'
import type { KmVariance } from '../../../../../../kotlin/reflect/jvm/internal/impl/km/KmVariance.d.ts'
import type { KmTypeParameterExtension } from '../../../../../../kotlin/reflect/jvm/internal/impl/km/internal/extensions/KmTypeParameterExtension.d.ts'
export class KmTypeParameter extends Object {
    constructor(arg0: number, arg1: string, arg2: number, arg3: KmVariance)
    constructor(arg0: string, arg1: number, arg2: KmVariance)
    // private extensions: KmTypeParameterExtension[];
    // private flags: number;
    readonly id: number;
    readonly name: string;
    readonly upperBounds: KmType[];
    readonly variance: KmVariance;
    getExtensions$kotlin_metadata(): KmTypeParameterExtension[];
    getFlags$kotlin_metadata(): number;
    getId(): number;
    getName(): string;
    getUpperBounds(): KmType[];
    getVariance(): KmVariance;
    setFlags$kotlin_metadata(arg0: number): void;
}