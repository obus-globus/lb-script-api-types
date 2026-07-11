import type { Class } from '../../../../../../java/lang/Class.d.ts'
import type { GenericArrayType } from '../../../../../../java/lang/reflect/GenericArrayType.d.ts'
import type { ParameterizedType } from '../../../../../../java/lang/reflect/ParameterizedType.d.ts'
import type { Type } from '../../../../../../java/lang/reflect/Type.d.ts'
import type { WildcardType } from '../../../../../../java/lang/reflect/WildcardType.d.ts'
import type { Object } from '../../../../../../java/lang/Object.d.ts'
export class GsonTypes extends Object {
    static arrayOf(paramarg0: Type): GenericArrayType;
    static canonicalize(paramarg0: Type): Type;
    static equals(paramarg0: Type, paramarg1: Type): boolean;
    static getArrayComponentType(paramarg0: Type): Type;
    static getCollectionElementType(paramarg0: Type, paramarg1: Class<Object>): Type;
    static getMapKeyAndValueTypes(paramarg0: Type, paramarg1: Class<Object>): (Object | null)[];
    static getRawType(paramarg0: Type): Class<Object>;
    static newParameterizedTypeWithOwner(paramarg0: Type, paramarg1: Class<Object>, ...paramarg2: (Object | null)[]): ParameterizedType;
    static requiresOwnerType(paramarg0: Type): boolean;
    static resolve(paramarg0: Type, paramarg1: Class<Object>, paramarg2: Type): Type;
    static subtypeOf(paramarg0: Type): WildcardType;
    static supertypeOf(paramarg0: Type): WildcardType;
    static typeToString(paramarg0: Type): string;
    private constructor()
}