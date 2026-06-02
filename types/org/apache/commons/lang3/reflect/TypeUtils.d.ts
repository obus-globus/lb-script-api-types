import type { Class } from '../../../../../java/lang/Class.d.ts'
import type { GenericArrayType } from '../../../../../java/lang/reflect/GenericArrayType.d.ts'
import type { ParameterizedType } from '../../../../../java/lang/reflect/ParameterizedType.d.ts'
import type { Type } from '../../../../../java/lang/reflect/Type.d.ts'
import type { TypeVariable } from '../../../../../java/lang/reflect/TypeVariable.d.ts'
import type { WildcardType } from '../../../../../java/lang/reflect/WildcardType.d.ts'
import type { Object } from '../../../../../java/lang/Object.d.ts'
import type { TypeUtils$WildcardTypeBuilder } from '../../../../../org/apache/commons/lang3/reflect/TypeUtils$WildcardTypeBuilder.d.ts'
import type { Typed } from '../../../../../org/apache/commons/lang3/reflect/Typed.d.ts'
export class TypeUtils extends Object {
    static WILDCARD_ALL: WildcardType;
    static containsTypeVariables(paramarg0: Type): boolean;
    static determineTypeArguments(paramarg0: Class<Object>, paramarg1: ParameterizedType): Map<Object | null, Type>;
    static equals(paramarg0: Type, paramarg1: Type): boolean;
    static genericArrayType(paramarg0: Type): GenericArrayType;
    static getArrayComponentType(paramarg0: Type): Type;
    static getImplicitBounds(paramarg0: TypeVariable<Object>): (Object | null)[];
    static getImplicitLowerBounds(paramarg0: WildcardType): (Object | null)[];
    static getImplicitUpperBounds(paramarg0: WildcardType): (Object | null)[];
    static getRawType(paramarg0: Type, paramarg1: Type): Class<Object>;
    static getTypeArguments(paramarg0: ParameterizedType): Map<Object | null, Type>;
    static getTypeArguments(paramarg0: Type, paramarg1: Class<Object>): Map<Object | null, Type>;
    static isArrayType(paramarg0: Type): boolean;
    static isAssignable(paramarg0: Type, paramarg1: Type): boolean;
    static isInstance(paramarg0: Object, paramarg1: Type): boolean;
    static normalizeUpperBounds(paramarg0: (Object | null)[]): (Object | null)[];
    static parameterize(paramarg0: Class<Object>, paramarg1: (Object | null)[]): ParameterizedType;
    static parameterize(paramarg0: Class<Object>, paramarg1: Map<Object | null, Type>): ParameterizedType;
    static parameterizeWithOwner(paramarg0: Type, paramarg1: Class<Object>, paramarg2: (Object | null)[]): ParameterizedType;
    static parameterizeWithOwner(paramarg0: Type, paramarg1: Class<Object>, paramarg2: Map<Object | null, Type>): ParameterizedType;
    static toLongString(paramarg0: TypeVariable<Object>): string;
    static toString(paramarg0: Type): string;
    static typesSatisfyVariables(paramarg0: Map<Object | null, Type>): boolean;
    static unrollVariables(paramarg0: Map<Object | null, Type>, paramarg1: Type): Type;
    static wildcardType(): TypeUtils$WildcardTypeBuilder;
    static wrap(paramarg0: Class<Object>): () => Object | null;
    static wrap(paramarg0: Type): () => Object | null;
    constructor()
}