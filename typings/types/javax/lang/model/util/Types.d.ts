import type { Element } from '../../../../javax/lang/model/element/Element.d.ts'
import type { TypeElement } from '../../../../javax/lang/model/element/TypeElement.d.ts'
import type { ArrayType } from '../../../../javax/lang/model/type/ArrayType.d.ts'
import type { DeclaredType } from '../../../../javax/lang/model/type/DeclaredType.d.ts'
import type { ExecutableType } from '../../../../javax/lang/model/type/ExecutableType.d.ts'
import type { NoType } from '../../../../javax/lang/model/type/NoType.d.ts'
import type { NullType } from '../../../../javax/lang/model/type/NullType.d.ts'
import type { PrimitiveType } from '../../../../javax/lang/model/type/PrimitiveType.d.ts'
import type { TypeKind } from '../../../../javax/lang/model/type/TypeKind.d.ts'
import type { TypeMirror } from '../../../../javax/lang/model/type/TypeMirror.d.ts'
import type { WildcardType } from '../../../../javax/lang/model/type/WildcardType.d.ts'
import type { Object } from '../../../../java/lang/Object.d.ts'
export interface Types extends Object{
    asElement(arg0: TypeMirror): Element;
    asMemberOf(arg0: DeclaredType, arg1: Element): TypeMirror;
    boxedClass(arg0: PrimitiveType): TypeElement;
    capture(arg0: TypeMirror): TypeMirror;
    contains(arg0: TypeMirror, arg1: TypeMirror): boolean;
    directSupertypes(arg0: TypeMirror): TypeMirror[];
    erasure(arg0: TypeMirror): TypeMirror;
    getArrayType(arg0: TypeMirror): ArrayType;
    getDeclaredType(arg0: TypeElement, arg1: TypeMirror[]): DeclaredType;
    getDeclaredType(arg0: DeclaredType, arg1: TypeElement, arg2: TypeMirror[]): DeclaredType;
    getNoType(arg0: TypeKind): NoType;
    getNullType(): NullType;
    getPrimitiveType(arg0: TypeKind): PrimitiveType;
    getWildcardType(arg0: TypeMirror, arg1: TypeMirror): WildcardType;
    isAssignable(arg0: TypeMirror, arg1: TypeMirror): boolean;
    isSameType(arg0: TypeMirror, arg1: TypeMirror): boolean;
    isSubsignature(arg0: ExecutableType, arg1: ExecutableType): boolean;
    isSubtype(arg0: TypeMirror, arg1: TypeMirror): boolean;
    stripAnnotations<T extends TypeMirror>(arg0: T): T;
    unboxedType(arg0: TypeMirror): PrimitiveType;
}