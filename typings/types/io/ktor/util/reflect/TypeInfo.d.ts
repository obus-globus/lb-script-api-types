import type { Type } from '../../../../java/lang/reflect/Type.d.ts'
import type { Object } from '../../../../java/lang/Object.d.ts'
import type { KClass } from '../../../../kotlin/reflect/KClass.d.ts'
import type { KType } from '../../../../kotlin/reflect/KType.d.ts'
export class TypeInfo extends Object {
    constructor(type: KClass<Object>, reifiedType: Type, kotlinType: KType | null)
    constructor(type: KClass<Object>, kotlinType: KType | null)
    readonly kotlinType: KType | null;
    readonly type: KClass<Object>;
    equals(other: Object | null): boolean;
    hashCode(): number;
    toString(): string;
}