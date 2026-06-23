import type { Class } from '../../../java/lang/Class.d.ts'
import type { RuntimeException } from '../../../java/lang/RuntimeException.d.ts'
import type { BigInteger } from '../../../java/math/BigInteger.d.ts'
import type { ByteOrder } from '../../../java/nio/ByteOrder.d.ts'
import type { Duration } from '../../../java/time/Duration.d.ts'
import type { Instant } from '../../../java/time/Instant.d.ts'
import type { LocalDate } from '../../../java/time/LocalDate.d.ts'
import type { LocalTime } from '../../../java/time/LocalTime.d.ts'
import type { ZoneId } from '../../../java/time/ZoneId.d.ts'
import type { Object } from '../../../java/lang/Object.d.ts'
import type { AbstractValue } from '../../../org/graalvm/polyglot/AbstractValue.d.ts'
import type { Context } from '../../../org/graalvm/polyglot/Context.d.ts'
import type { SourceSection } from '../../../org/graalvm/polyglot/SourceSection.d.ts'
import type { TypeLiteral } from '../../../org/graalvm/polyglot/TypeLiteral.d.ts'
import type { Value$StringEncoding } from '../../../org/graalvm/polyglot/Value$StringEncoding.d.ts'
import type { AbstractPolyglotImpl$AbstractValueDispatch } from '../../../org/graalvm/polyglot/impl/AbstractPolyglotImpl$AbstractValueDispatch.d.ts'
import type { Proxy } from '../../../org/graalvm/polyglot/proxy/Proxy.d.ts'
export class Value extends AbstractValue {
    static asValue(paramo: Object): Value;
    static fromByteBasedString(parambytes: number[], paramoffset: number, paramlength: number, paramencoding: Value$StringEncoding, paramcopy: boolean): Value;
    static fromByteBasedString(parambytes: number[], paramencoding: Value$StringEncoding): Value;
    static fromNativeString(parambasePointer: number, parambyteOffset: number, parambyteLength: number, paramencoding: Value$StringEncoding, paramcopy: boolean): Value;
    static fromNativeString(parambasePointer: number, parambyteLength: number, paramencoding: Value$StringEncoding): Value;
    constructor(dispatch: AbstractPolyglotImpl$AbstractValueDispatch, context: Object, receiver: Object, creatorContext: Context)
    as<T extends unknown>(targetType: Class<T>): T;
    as<T extends unknown>(targetType: TypeLiteral<T>): T;
    asBigInteger(): BigInteger;
    asBoolean(): boolean;
    asByte(): number;
    asDate(): LocalDate;
    asDouble(): number;
    asDuration(): Duration;
    asFloat(): number;
    asHostObject<T extends unknown>(): T;
    asInstant(): Instant;
    asInt(): number;
    asLong(): number;
    asNativePointer(): number;
    asProxyObject<T extends Proxy>(): T;
    asShort(): number;
    asString(): string;
    asStringBytes(encoding: Value$StringEncoding): number[];
    asTime(): LocalTime;
    asTimeZone(): ZoneId;
    canExecute(): boolean;
    canInstantiate(): boolean;
    canInvokeMember(identifier: string): boolean;
    equals(obj: Object | null): boolean;
    execute(arguments: Object[]): Value;
    executeVoid(arguments: Object[]): void;
    fitsInBigInteger(): boolean;
    fitsInByte(): boolean;
    fitsInDouble(): boolean;
    fitsInFloat(): boolean;
    fitsInInt(): boolean;
    fitsInLong(): boolean;
    fitsInShort(): boolean;
    getArrayElement(index: number): Value;
    getArraySize(): number;
    getBufferSize(): number;
    getContext(): Context;
    getHashEntriesIterator(): Value;
    getHashKeysIterator(): Value;
    getHashSize(): number;
    getHashValue(key: Object): Value;
    getHashValueOrDefault(key: Object, defaultValue: Object): Value;
    getHashValuesIterator(): Value;
    getIterator(): Value;
    getIteratorNextElement(): Value;
    getMember(identifier: string): Value;
    getMemberKeys(): string[];
    getMetaObject(): Value;
    getMetaParents(): Value;
    getMetaQualifiedName(): string;
    getMetaSimpleName(): string;
    getSourceLocation(): SourceSection;
    hasArrayElements(): boolean;
    hasBufferElements(): boolean;
    hasHashEntries(): boolean;
    hasHashEntry(key: Object): boolean;
    hasIterator(): boolean;
    hasIteratorNextElement(): boolean;
    hasMember(identifier: string): boolean;
    hasMembers(): boolean;
    hasMetaParents(): boolean;
    hashCode(): number;
    invokeMember(identifier: string, arguments: Object[]): Value;
    isBoolean(): boolean;
    isBufferWritable(): boolean;
    isDate(): boolean;
    isDuration(): boolean;
    isException(): boolean;
    isHostObject(): boolean;
    isInstant(): boolean;
    isIterator(): boolean;
    isMetaInstance(instance: Object): boolean;
    isMetaObject(): boolean;
    isNativePointer(): boolean;
    isNull(): boolean;
    isNumber(): boolean;
    isProxyObject(): boolean;
    isString(): boolean;
    isTime(): boolean;
    isTimeZone(): boolean;
    newInstance(arguments: Object[]): Value;
    pin(): void;
    putHashEntry(key: Object, value: Object): void;
    putMember(identifier: string, value: Object): void;
    readBuffer(byteOffset: number, destination: number[], destinationOffset: number, length: number): void;
    readBufferByte(byteOffset: number): number;
    readBufferDouble(order: ByteOrder, byteOffset: number): number;
    readBufferFloat(order: ByteOrder, byteOffset: number): number;
    readBufferInt(order: ByteOrder, byteOffset: number): number;
    readBufferLong(order: ByteOrder, byteOffset: number): number;
    readBufferShort(order: ByteOrder, byteOffset: number): number;
    removeArrayElement(index: number): boolean;
    removeHashEntry(key: Object): boolean;
    removeMember(identifier: string): boolean;
    setArrayElement(index: number, value: Object): void;
    throwException(): RuntimeException;
    toString(): string;
    writeBufferByte(byteOffset: number, value: number): void;
    writeBufferDouble(order: ByteOrder, byteOffset: number, value: number): void;
    writeBufferFloat(order: ByteOrder, byteOffset: number, value: number): void;
    writeBufferInt(order: ByteOrder, byteOffset: number, value: number): void;
    writeBufferLong(order: ByteOrder, byteOffset: number, value: number): void;
    writeBufferShort(order: ByteOrder, byteOffset: number, value: number): void;
}