import type { ParameterizedType } from '../../../../java/lang/reflect/ParameterizedType.d.ts'
import type { Type } from '../../../../java/lang/reflect/Type.d.ts'
import type { TypeVariable } from '../../../../java/lang/reflect/TypeVariable.d.ts'
import type { WildcardType } from '../../../../java/lang/reflect/WildcardType.d.ts'
import type { Object } from '../../../../java/lang/Object.d.ts'
import type { FieldTypeSignature } from '../../../../sun/reflect/generics/tree/FieldTypeSignature.d.ts'
export interface GenericsFactory extends Object{
    findTypeVariable(arg0: string): TypeVariable<any>;
    makeArrayType(arg0: Type): Type;
    makeBool(): Type;
    makeByte(): Type;
    makeChar(): Type;
    makeDouble(): Type;
    makeFloat(): Type;
    makeInt(): Type;
    makeLong(): Type;
    makeNamedType(arg0: string): Type;
    makeParameterizedType(arg0: Type, arg1: Type[], arg2: Type): ParameterizedType;
    makeShort(): Type;
    makeTypeVariable(arg0: string, arg1: FieldTypeSignature[]): TypeVariable<any>;
    makeVoid(): Type;
    makeWildcard(arg0: FieldTypeSignature[], arg1: FieldTypeSignature[]): WildcardType;
}