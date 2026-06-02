import type { Class } from '../../../../java/lang/Class.d.ts'
import type { RuntimeException } from '../../../../java/lang/RuntimeException.d.ts'
import type { Type } from '../../../../java/lang/reflect/Type.d.ts'
import type { Function } from '../../../../java/util/function/Function.d.ts'
import type { Object } from '../../../../java/lang/Object.d.ts'
import type { Throwable } from '../../../../java/lang/Throwable.d.ts'
import type { Iterator } from '../../../../java/util/Iterator.d.ts'
import type { Map$Entry } from '../../../../java/util/Map$Entry.d.ts'
import type { AbstractPolyglotImpl } from '../../../../org/graalvm/polyglot/impl/AbstractPolyglotImpl.d.ts'
import type { AbstractPolyglotImpl$AbstractHostAccess } from '../../../../org/graalvm/polyglot/impl/AbstractPolyglotImpl$AbstractHostAccess.d.ts'
export class PolyglotHostAccess extends AbstractPolyglotImpl$AbstractHostAccess {
    constructor(polyglot: AbstractPolyglotImpl)
    // private polyglot: AbstractPolyglotImpl;
    getPoylglotExceptionClass(): Class<Object>;
    getValueClass(): Class<Object>;
    getValueInfo(internalContext: Object, value: Object): string;
    isEngineException(e: RuntimeException): boolean;
    isPolyglotException(e: RuntimeException): boolean;
    rethrowPolyglotException(internalContext: Object, polyglotException: RuntimeException): void;
    toByteSequence(internalContext: Object, guestValue: Object): Object;
    toEngineException(e: RuntimeException): RuntimeException;
    toFunction(internalContext: Object, function_: Object, returnClass: Class<Object>, returnType: Type, paramClass: Class<Object>, paramType: Type): (param0: Object | null) => Object | null;
    toFunctionProxy<T extends Object | number | string | boolean>(internalContext: Object, functionalType: Class<T>, genericType: Type, function_: Object): T;
    toGuestValue(polyglotContext: Object, hostValue: Object): Object;
    toIterable(internalContext: Object, iterable: Object, implementFunction: boolean, elementClass: Class<T>, elementType: Type): T[];
    toIterator(internalContext: Object, iterable: Object, implementFunction: boolean, elementClass: Class<T>, elementType: Type): Iterator<T>;
    toList(internalContext: Object, guestValue: Object, implementFunction: boolean, elementClass: Class<T>, elementType: Type): T[];
    toMap(internalContext: Object, foreignObject: Object, implementsFunction: boolean, keyClass: Class<K>, keyType: Type, valueClass: Class<V>, valueType: Type): Map<K, V>;
    toMapEntry(internalContext: Object, foreignObject: Object, implementsFunction: boolean, keyClass: Class<K>, keyType: Type, valueClass: Class<V>, valueType: Type): Map$Entry<K, V>;
    toObjectProxy(internalContext: Object, clazz: Class<Object>, genericType: Type, obj: Object): Object;
    toPolyglotException(internalContext: Object, e: Throwable): RuntimeException;
    toValue(internalContext: Object, receiver: Object): Object;
    toValues(internalContext: Object, values: Object[]): Object[];
    toValues(internalContext: Object, values: Object[], startIndex: number): Object[];
    unboxEngineException(e: RuntimeException): RuntimeException;
}