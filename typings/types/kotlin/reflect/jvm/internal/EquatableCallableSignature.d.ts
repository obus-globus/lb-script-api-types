import type { Class } from '../../../../java/lang/Class.d.ts'
import type { Type } from '../../../../java/lang/reflect/Type.d.ts'
import type { Object } from '../../../../java/lang/Object.d.ts'
import type { KType } from '../../../../kotlin/reflect/KType.d.ts'
import type { KTypeParameter } from '../../../../kotlin/reflect/KTypeParameter.d.ts'
import type { EqualityMode } from '../../../../kotlin/reflect/jvm/internal/EqualityMode.d.ts'
import type { SignatureKind } from '../../../../kotlin/reflect/jvm/internal/SignatureKind.d.ts'
export class EquatableCallableSignature<T extends EqualityMode> extends Object {
    constructor(kind: SignatureKind, name: string, jvmNameIfFunction: string | null, typeParameters: KTypeParameter[], kotlinParameterTypes: KType[], javaParameterTypesIfFunction: Class<Object>[], javaGenericParameterTypesIfFunction: Type[], isStatic: boolean, equalityMode: T)
    // private equalityMode: T;
    // private isStatic: boolean;
    // private javaGenericParameterTypesIfFunction: Type[];
    // private javaParameterTypesIfFunction: Class<Object>[];
    // private jvmNameIfFunction: string | null;
    // private kind: SignatureKind;
    // private kotlinParameterTypes: KType[];
    // private name: string;
    // private typeParameters: KTypeParameter[];
    component1(): SignatureKind;
    component2(): string;
    component3(): string | null;
    component4(): KTypeParameter[];
    component5(): KType[];
    component6(): Class<Object>[];
    component7(): Type[];
    component8(): boolean;
    component9(): T;
    copy(kind: SignatureKind, name: string, jvmNameIfFunction: string | null, typeParameters: KTypeParameter[], kotlinParameterTypes: KType[], javaParameterTypesIfFunction: Class<Object>[], javaGenericParameterTypesIfFunction: Type[], isStatic: boolean, equalityMode: T): EquatableCallableSignature<T>;
    equals(other: Object | null): boolean;
    hashCode(): number;
    toString(): string;
    withEqualityMode(equalityMode: T): EquatableCallableSignature<T>;
}