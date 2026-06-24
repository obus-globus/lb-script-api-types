import type { Object } from '../../../../java/lang/Object.d.ts'
import type { KTypeParameter } from '../../../../kotlin/reflect/KTypeParameter.d.ts'
import type { KCallableOverriddenStorage$Companion } from '../../../../kotlin/reflect/jvm/internal/KCallableOverriddenStorage$Companion.d.ts'
import type { KDeclarationContainerImpl } from '../../../../kotlin/reflect/jvm/internal/KDeclarationContainerImpl.d.ts'
import type { Modality } from '../../../../kotlin/reflect/jvm/internal/impl/km/Modality.d.ts'
import type { KTypeSubstitutor } from '../../../../kotlin/reflect/jvm/internal/types/KTypeSubstitutor.d.ts'
export class KCallableOverriddenStorage extends Object {
    static Companion: KCallableOverriddenStorage$Companion;
    static EMPTY: KCallableOverriddenStorage;
    constructor(classTypeParametersSubstitutor: KTypeSubstitutor | null, modality: Modality | null, isStatic: boolean | null, originalContainerIfFakeOverride: KDeclarationContainerImpl | null, originalCallableTypeParameters: KTypeParameter[], forceIsExternal: boolean, forceIsOperator: boolean, forceIsInfix: boolean, forceIsInline: boolean)
    // private component1(): KTypeSubstitutor | null;
    component2(): Modality | null;
    component3(): boolean | null;
    component4(): KDeclarationContainerImpl | null;
    // private component5(): KTypeParameter[];
    component6(): boolean;
    component7(): boolean;
    component8(): boolean;
    component9(): boolean;
    copy(classTypeParametersSubstitutor: KTypeSubstitutor | null, modality: Modality | null, isStatic: boolean | null, originalContainerIfFakeOverride: KDeclarationContainerImpl | null, originalCallableTypeParameters: KTypeParameter[], forceIsExternal: boolean, forceIsOperator: boolean, forceIsInfix: boolean, forceIsInline: boolean): KCallableOverriddenStorage;
    equals(other: Object | null): boolean;
    getTypeSubstitutor(callableTypeParameters: KTypeParameter[], memberNameForDebug: string): KTypeSubstitutor;
    hashCode(): number;
    toString(): string;
    withChainedClassTypeParametersSubstitutor(substitutor: KTypeSubstitutor): KCallableOverriddenStorage;
}