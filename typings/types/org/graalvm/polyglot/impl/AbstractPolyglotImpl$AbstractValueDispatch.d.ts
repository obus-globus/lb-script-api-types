import type { Class } from '../../../../java/lang/Class.d.ts'
import type { RuntimeException } from '../../../../java/lang/RuntimeException.d.ts'
import type { Type } from '../../../../java/lang/reflect/Type.d.ts'
import type { BigInteger } from '../../../../java/math/BigInteger.d.ts'
import type { ByteOrder } from '../../../../java/nio/ByteOrder.d.ts'
import type { Duration } from '../../../../java/time/Duration.d.ts'
import type { Instant } from '../../../../java/time/Instant.d.ts'
import type { LocalDate } from '../../../../java/time/LocalDate.d.ts'
import type { LocalTime } from '../../../../java/time/LocalTime.d.ts'
import type { ZoneId } from '../../../../java/time/ZoneId.d.ts'
import type { Object } from '../../../../java/lang/Object.d.ts'
import type { AbstractPolyglotImpl } from '../../../../org/graalvm/polyglot/impl/AbstractPolyglotImpl.d.ts'
import type { AbstractPolyglotImpl$AbstractDispatchClass } from '../../../../org/graalvm/polyglot/impl/AbstractPolyglotImpl$AbstractDispatchClass.d.ts'
export abstract class AbstractPolyglotImpl$AbstractValueDispatch extends AbstractPolyglotImpl$AbstractDispatchClass {
    constructor()
    constructor(engineImpl: AbstractPolyglotImpl)
    asBigInteger(context: Object, receiver: Object): BigInteger;
    asBoolean(context: Object, receiver: Object): boolean;
    asByte(context: Object, receiver: Object): number;
    asClass<T extends unknown>(context: Object, receiver: Object, targetType: Class<T>): T;
    asDate(context: Object, receiver: Object): LocalDate;
    asDouble(context: Object, receiver: Object): number;
    asDuration(context: Object, receiver: Object): Duration;
    asFloat(context: Object, receiver: Object): number;
    asHostObject(context: Object, receiver: Object): Object;
    asInstant(context: Object, receiver: Object): Instant;
    asInt(context: Object, receiver: Object): number;
    asLong(context: Object, receiver: Object): number;
    asNativePointer(context: Object, receiver: Object): number;
    asProxyObject(context: Object, receiver: Object): Object;
    asShort(context: Object, receiver: Object): number;
    asString(context: Object, receiver: Object): string;
    asStringBytes(context: Object, receiver: Object, encoding: number): number[];
    asTime(context: Object, receiver: Object): LocalTime;
    asTimeZone(context: Object, receiver: Object): ZoneId;
    asTypeLiteral<T extends unknown>(context: Object, receiver: Object, rawType: Class<T>, genericType: Type): T;
    canExecute(context: Object, receiver: Object): boolean;
    canInstantiate(context: Object, receiver: Object): boolean;
    canInvoke(context: Object, identifier: string, receiver: Object): boolean;
    equalsImpl(context: Object, receiver: Object, obj: Object): boolean;
    execute(context: Object, receiver: Object): Object;
    execute(context: Object, receiver: Object, arguments: Object[]): Object;
    executeVoid(context: Object, receiver: Object): void;
    executeVoid(context: Object, receiver: Object, arguments: Object[]): void;
    fitsInBigInteger(context: Object, receiver: Object): boolean;
    fitsInByte(context: Object, receiver: Object): boolean;
    fitsInDouble(context: Object, receiver: Object): boolean;
    fitsInFloat(context: Object, receiver: Object): boolean;
    fitsInInt(context: Object, receiver: Object): boolean;
    fitsInLong(context: Object, receiver: Object): boolean;
    fitsInShort(context: Object, receiver: Object): boolean;
    getArrayElement(context: Object, receiver: Object, index: number): Object;
    getArraySize(context: Object, receiver: Object): number;
    getBufferSize(context: Object, receiver: Object): number;
    getHashEntriesIterator(context: Object, receiver: Object): Object;
    getHashKeysIterator(context: Object, receiver: Object): Object;
    getHashSize(context: Object, receiver: Object): number;
    getHashValue(context: Object, receiver: Object, key: Object): Object;
    getHashValueOrDefault(context: Object, receiver: Object, key: Object, defaultValue: Object): Object;
    getHashValuesIterator(context: Object, receiver: Object): Object;
    getIterator(context: Object, receiver: Object): Object;
    getIteratorNextElement(context: Object, receiver: Object): Object;
    getMember(context: Object, receiver: Object, key: string): Object;
    getMemberKeys(context: Object, receiver: Object): string[];
    getMetaObject(context: Object, receiver: Object): Object;
    getMetaParents(context: Object, receiver: Object): Object;
    getMetaQualifiedName(context: Object, receiver: Object): string;
    getMetaSimpleName(context: Object, receiver: Object): string;
    getSourceLocation(context: Object, receiver: Object): Object;
    hasArrayElements(context: Object, receiver: Object): boolean;
    hasBufferElements(context: Object, receiver: Object): boolean;
    hasHashEntries(context: Object, receiver: Object): boolean;
    hasHashEntry(context: Object, receiver: Object, key: Object): boolean;
    hasIterator(context: Object, receiver: Object): boolean;
    hasIteratorNextElement(context: Object, receiver: Object): boolean;
    hasMember(context: Object, receiver: Object, key: string): boolean;
    hasMembers(context: Object, receiver: Object): boolean;
    hasMetaParents(context: Object, receiver: Object): boolean;
    hashCodeImpl(context: Object, receiver: Object): number;
    invoke(context: Object, receiver: Object, identifier: string): Object;
    invoke(context: Object, receiver: Object, identifier: string, arguments: Object[]): Object;
    isBoolean(context: Object, receiver: Object): boolean;
    isBufferWritable(context: Object, receiver: Object): boolean;
    isDate(context: Object, receiver: Object): boolean;
    isDuration(context: Object, receiver: Object): boolean;
    isException(context: Object, receiver: Object): boolean;
    isHostObject(context: Object, receiver: Object): boolean;
    isIterator(context: Object, receiver: Object): boolean;
    isMetaInstance(context: Object, receiver: Object, instance: Object): boolean;
    isMetaObject(context: Object, receiver: Object): boolean;
    isNativePointer(context: Object, receiver: Object): boolean;
    isNull(context: Object, receiver: Object): boolean;
    isNumber(context: Object, receiver: Object): boolean;
    isProxyObject(context: Object, receiver: Object): boolean;
    isString(context: Object, receiver: Object): boolean;
    isTime(context: Object, receiver: Object): boolean;
    isTimeZone(context: Object, receiver: Object): boolean;
    newInstance(context: Object, receiver: Object, arguments: Object[]): Object;
    pin(languageContext: Object, receiver: Object): void;
    putHashEntry(context: Object, receiver: Object, key: Object, value: Object): void;
    putMember(context: Object, receiver: Object, key: string, member: Object): void;
    readBuffer(context: Object, receiver: Object, byteOffset: number, destination: number[], destinationOffset: number, length: number): void;
    readBufferByte(context: Object, receiver: Object, byteOffset: number): number;
    readBufferDouble(context: Object, receiver: Object, order: ByteOrder, byteOffset: number): number;
    readBufferFloat(context: Object, receiver: Object, order: ByteOrder, byteOffset: number): number;
    readBufferInt(context: Object, receiver: Object, order: ByteOrder, byteOffset: number): number;
    readBufferLong(context: Object, receiver: Object, order: ByteOrder, byteOffset: number): number;
    readBufferShort(context: Object, receiver: Object, order: ByteOrder, byteOffset: number): number;
    removeArrayElement(context: Object, receiver: Object, index: number): boolean;
    removeHashEntry(context: Object, receiver: Object, key: Object): boolean;
    removeMember(context: Object, receiver: Object, key: string): boolean;
    setArrayElement(context: Object, receiver: Object, index: number, value: Object): void;
    throwException(context: Object, receiver: Object): RuntimeException;
    toString(): string;
    toString(context: Object, receiver: Object): string;
    writeBufferByte(context: Object, receiver: Object, byteOffset: number, value: number): void;
    writeBufferDouble(context: Object, receiver: Object, order: ByteOrder, byteOffset: number, value: number): void;
    writeBufferFloat(context: Object, receiver: Object, order: ByteOrder, byteOffset: number, value: number): void;
    writeBufferInt(context: Object, receiver: Object, order: ByteOrder, byteOffset: number, value: number): void;
    writeBufferLong(context: Object, receiver: Object, order: ByteOrder, byteOffset: number, value: number): void;
    writeBufferShort(context: Object, receiver: Object, order: ByteOrder, byteOffset: number, value: number): void;
}