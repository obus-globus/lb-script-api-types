import type { Invokable } from '../../../../com/google/common/reflect/Invokable.d.ts'
import type { TypeCapture } from '../../../../com/google/common/reflect/TypeCapture.d.ts'
import type { TypeParameter } from '../../../../com/google/common/reflect/TypeParameter.d.ts'
import type { TypeResolver } from '../../../../com/google/common/reflect/TypeResolver.d.ts'
import type { Serializable } from '../../../../java/io/Serializable.d.ts'
import type { Class } from '../../../../java/lang/Class.d.ts'
import type { Constructor } from '../../../../java/lang/reflect/Constructor.d.ts'
import type { GenericArrayType } from '../../../../java/lang/reflect/GenericArrayType.d.ts'
import type { Method } from '../../../../java/lang/reflect/Method.d.ts'
import type { ParameterizedType } from '../../../../java/lang/reflect/ParameterizedType.d.ts'
import type { Type } from '../../../../java/lang/reflect/Type.d.ts'
import type { TypeVariable } from '../../../../java/lang/reflect/TypeVariable.d.ts'
import type { Object } from '../../../../java/lang/Object.d.ts'
export abstract class TypeToken<T extends Object | number | string | boolean> extends TypeCapture<T> implements Serializable {
    static of(paramtype: Class<Object>): TypeToken<Object>;
    static of(paramtype: Type): TypeToken<Object>;
    constructor()
    constructor(declaringClass: Class<Object>)
    private constructor(type: Type)
    // private covariantTypeResolver: TypeResolver;
    // private invariantTypeResolver: TypeResolver;
    // private runtimeType: Type;
    // private boundAsSuperclass(bound: Type): TypeToken<T>;
    // private boundsAsInterfaces(bounds: Type[]): TypeToken<T>[];
    constructor(constructor: Constructor<Object>): Invokable<T, T>;
    equals(o: Object | null): boolean;
    // private getArraySubtype(subclass: Class<Object>): TypeToken<T>;
    // private getArraySupertype(supertype: Class<T>): TypeToken<T>;
    getComponentType(): TypeToken<Object>;
    // private getCovariantTypeResolver(): TypeResolver;
    getGenericInterfaces(): TypeToken<T>[];
    getGenericSuperclass(): TypeToken<T>;
    // private getInvariantTypeResolver(): TypeResolver;
    // private getOwnerTypeIfPresent(): Type;
    getRawType(): Class<T>;
    // private getRawTypes(): Class<T>[];
    getSubtype(subclass: Class<Object>): TypeToken<T>;
    // private getSubtypeFromLowerBounds(subclass: Class<Object>, lowerBounds: Type[]): TypeToken<T>;
    getSupertype(superclass: Class<T>): TypeToken<T>;
    // private getSupertypeFromUpperBounds(supertype: Class<T>, upperBounds: Type[]): TypeToken<T>;
    getType(): Type;
    getTypes(): T[];
    hashCode(): number;
    // private is(formalType: Type, declaration: TypeVariable<any>): boolean;
    isArray(): boolean;
    // private isOwnedBySubtypeOf(supertype: Type): boolean;
    isPrimitive(): boolean;
    isSubtypeOf(type: TypeToken<Object>): boolean;
    isSubtypeOf(supertype: Type): boolean;
    // private isSubtypeOfArrayType(supertype: GenericArrayType): boolean;
    // private isSubtypeOfParameterizedType(supertype: ParameterizedType): boolean;
    isSupertypeOf(type: TypeToken<Object>): boolean;
    isSupertypeOf(type: Type): boolean;
    // private isSupertypeOfArray(subtype: GenericArrayType): boolean;
    // private isWrapper(): boolean;
    method(method: Method): Invokable<T, Object>;
    rejectTypeVariables(): TypeToken<T>;
    // private resolveSupertype(type: Type): TypeToken<Object>;
    resolveType(type: Type): TypeToken<Object>;
    // private resolveTypeArgsForSubclass(subclass: Class<Object>): Type;
    // private someRawTypeIsSubclassOf(superclass: Class<Object>): boolean;
    toString(): string;
    unwrap(): TypeToken<T>;
    where<X extends Object | number | string | boolean>(typeParam: TypeParameter<X>, typeArg: TypeToken<X>): TypeToken<T>;
    where<X extends Object | number | string | boolean>(typeParam: TypeParameter<X>, typeArg: Class<X>): TypeToken<T>;
    wrap(): TypeToken<T>;
    writeReplace(): Object;
}