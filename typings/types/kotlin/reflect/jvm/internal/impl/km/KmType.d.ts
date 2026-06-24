import type { Object } from '../../../../../../java/lang/Object.d.ts'
import type { KmClassifier } from '../../../../../../kotlin/reflect/jvm/internal/impl/km/KmClassifier.d.ts'
import type { KmFlexibleTypeUpperBound } from '../../../../../../kotlin/reflect/jvm/internal/impl/km/KmFlexibleTypeUpperBound.d.ts'
import type { KmTypeProjection } from '../../../../../../kotlin/reflect/jvm/internal/impl/km/KmTypeProjection.d.ts'
import type { KmTypeExtension } from '../../../../../../kotlin/reflect/jvm/internal/impl/km/internal/extensions/KmTypeExtension.d.ts'
export class KmType extends Object {
    constructor()
    constructor(arg0: number)
    readonly abbreviatedType: KmType;
    readonly arguments: KmTypeProjection[];
    classifier: KmClassifier;
    // private extensions: KmTypeExtension[];
    // private flags: number;
    readonly flexibleTypeUpperBound: KmFlexibleTypeUpperBound;
    readonly outerType: KmType;
    equals(arg0: Object | null): boolean;
    getAbbreviatedType(): KmType;
    getArguments(): KmTypeProjection[];
    getClassifier(): KmClassifier;
    getExtensions$org_jetbrains_kotlin_kotlin_metadata(): KmTypeExtension[];
    getFlags$org_jetbrains_kotlin_kotlin_metadata(): number;
    getFlexibleTypeUpperBound(): KmFlexibleTypeUpperBound;
    getOuterType(): KmType;
    hashCode(): number;
    setAbbreviatedType(arg0: KmType): void;
    setClassifier(arg0: KmClassifier): void;
    setFlags$org_jetbrains_kotlin_kotlin_metadata(arg0: number): void;
    setFlexibleTypeUpperBound(arg0: KmFlexibleTypeUpperBound): void;
    setOuterType(arg0: KmType): void;
}