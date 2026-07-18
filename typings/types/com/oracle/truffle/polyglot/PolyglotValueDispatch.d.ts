import type { PolyglotImpl } from '../../../../com/oracle/truffle/polyglot/PolyglotImpl.d.ts'
import type { PolyglotLanguageContext } from '../../../../com/oracle/truffle/polyglot/PolyglotLanguageContext.d.ts'
import type { PolyglotLanguageInstance } from '../../../../com/oracle/truffle/polyglot/PolyglotLanguageInstance.d.ts'
import type { RuntimeException } from '../../../../java/lang/RuntimeException.d.ts'
import type { BigInteger } from '../../../../java/math/BigInteger.d.ts'
import type { ByteOrder } from '../../../../java/nio/ByteOrder.d.ts'
import type { Duration } from '../../../../java/time/Duration.d.ts'
import type { Instant } from '../../../../java/time/Instant.d.ts'
import type { LocalDate } from '../../../../java/time/LocalDate.d.ts'
import type { LocalTime } from '../../../../java/time/LocalTime.d.ts'
import type { ZoneId } from '../../../../java/time/ZoneId.d.ts'
import type { Object } from '../../../../java/lang/Object.d.ts'
import type { AbstractPolyglotImpl$AbstractValueDispatch } from '../../../../org/graalvm/polyglot/impl/AbstractPolyglotImpl$AbstractValueDispatch.d.ts'
export abstract class PolyglotValueDispatch extends AbstractPolyglotImpl$AbstractValueDispatch {
    constructor(impl: PolyglotImpl, languageInstance: PolyglotLanguageInstance)
    // private impl: PolyglotImpl;
    // private languageInstance: PolyglotLanguageInstance;
    asBigInteger(languageContext: Object, receiver: Object): BigInteger;
    asBoolean(languageContext: Object, receiver: Object): boolean;
    asByte(languageContext: Object, receiver: Object): number;
    asDate(languageContext: Object, receiver: Object): LocalDate;
    asDouble(languageContext: Object, receiver: Object): number;
    asDuration(languageContext: Object, receiver: Object): Duration;
    asFloat(languageContext: Object, receiver: Object): number;
    asHostObject(languageContext: Object, receiver: Object): Object;
    asInstant(languageContext: Object, receiver: Object): Instant;
    asInt(languageContext: Object, receiver: Object): number;
    asLong(languageContext: Object, receiver: Object): number;
    asNativePointer(languageContext: Object, receiver: Object): number;
    asProxyObject(languageContext: Object, receiver: Object): Object;
    asShort(languageContext: Object, receiver: Object): number;
    asString(languageContext: Object, receiver: Object): string;
    asStringBytes(languageContext: Object, receiver: Object, encoding: number): number[];
    asTime(languageContext: Object, receiver: Object): LocalTime;
    asTimeZone(languageContext: Object, receiver: Object): ZoneId;
    equalsImpl(languageContext: Object, receiver: Object, obj: Object): boolean;
    execute(languageContext: Object, receiver: Object): Object;
    execute(languageContext: Object, receiver: Object, arguments: Object[]): Object;
    executeVoid(languageContext: Object, receiver: Object): void;
    executeVoid(languageContext: Object, receiver: Object, arguments: Object[]): void;
    getArrayElement(languageContext: Object, receiver: Object, index: number): Object;
    getArraySize(languageContext: Object, receiver: Object): number;
    getBufferSize(languageContext: Object, receiver: Object): number;
    getHashEntriesIterator(languageContext: Object, receiver: Object): Object;
    getHashKeysIterator(languageContext: Object, receiver: Object): Object;
    getHashSize(languageContext: Object, receiver: Object): number;
    getHashValue(languageContext: Object, receiver: Object, key: Object): Object;
    getHashValueOrDefault(languageContext: Object, receiver: Object, key: Object, defaultValue: Object): Object;
    getHashValuesIterator(languageContext: Object, receiver: Object): Object;
    getIterator(languageContext: Object, receiver: Object): Object;
    getIteratorNextElement(languageContext: Object, receiver: Object): Object;
    getMember(languageContext: Object, receiver: Object, key: string): Object;
    getMetaObject(languageContext: Object, receiver: Object): Object;
    getMetaObjectImpl(context: PolyglotLanguageContext, receiver: Object): Object;
    getMetaParents(languageContext: Object, receiver: Object): Object;
    getMetaQualifiedName(languageContext: Object, receiver: Object): string;
    getMetaSimpleName(languageContext: Object, receiver: Object): string;
    getSourceLocation(languageContext: Object, receiver: Object): Object;
    hasIteratorNextElement(languageContext: Object, receiver: Object): boolean;
    hasMetaParents(languageContext: Object, receiver: Object): boolean;
    hashCodeImpl(languageContext: Object, receiver: Object): number;
    invoke(languageContext: Object, receiver: Object, identifier: string): Object;
    invoke(languageContext: Object, receiver: Object, identifier: string, arguments: Object[]): Object;
    isBufferWritable(languageContext: Object, receiver: Object): boolean;
    isMetaInstance(languageContext: Object, receiver: Object, instance: Object): boolean;
    isMetaObject(languageContext: Object, receiver: Object): boolean;
    newInstance(languageContext: Object, receiver: Object, arguments: Object[]): Object;
    pin(languageContext: Object, receiver: Object): void;
    putHashEntry(languageContext: Object, receiver: Object, key: Object, value: Object): void;
    putMember(languageContext: Object, receiver: Object, key: string, member: Object): void;
    readBuffer(languageContext: Object, receiver: Object, byteOffset: number, destination: number[], destinationOffset: number, length: number): void;
    readBufferByte(languageContext: Object, receiver: Object, byteOffset: number): number;
    readBufferDouble(languageContext: Object, receiver: Object, order: ByteOrder, byteOffset: number): number;
    readBufferFloat(languageContext: Object, receiver: Object, order: ByteOrder, byteOffset: number): number;
    readBufferInt(languageContext: Object, receiver: Object, order: ByteOrder, byteOffset: number): number;
    readBufferLong(languageContext: Object, receiver: Object, order: ByteOrder, byteOffset: number): number;
    readBufferShort(languageContext: Object, receiver: Object, order: ByteOrder, byteOffset: number): number;
    removeArrayElement(languageContext: Object, receiver: Object, index: number): boolean;
    removeHashEntry(languageContext: Object, receiver: Object, key: Object): boolean;
    removeMember(languageContext: Object, receiver: Object, key: string): boolean;
    setArrayElement(languageContext: Object, receiver: Object, index: number, value: Object): void;
    throwException(languageContext: Object, receiver: Object): RuntimeException;
    toString(): string;
    toString(languageContext: Object, receiver: Object): string;
    toStringImpl(context: PolyglotLanguageContext, receiver: Object): string;
    writeBufferByte(languageContext: Object, receiver: Object, byteOffset: number, value: number): void;
    writeBufferDouble(languageContext: Object, receiver: Object, order: ByteOrder, byteOffset: number, value: number): void;
    writeBufferFloat(languageContext: Object, receiver: Object, order: ByteOrder, byteOffset: number, value: number): void;
    writeBufferInt(languageContext: Object, receiver: Object, order: ByteOrder, byteOffset: number, value: number): void;
    writeBufferLong(languageContext: Object, receiver: Object, order: ByteOrder, byteOffset: number, value: number): void;
    writeBufferShort(languageContext: Object, receiver: Object, order: ByteOrder, byteOffset: number, value: number): void;
}