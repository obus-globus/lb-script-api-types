import type { CallTarget } from '../../../../com/oracle/truffle/api/CallTarget.d.ts'
import type { PolyglotEngineImpl } from '../../../../com/oracle/truffle/polyglot/PolyglotEngineImpl.d.ts'
import type { PolyglotImpl } from '../../../../com/oracle/truffle/polyglot/PolyglotImpl.d.ts'
import type { PolyglotLanguageInstance } from '../../../../com/oracle/truffle/polyglot/PolyglotLanguageInstance.d.ts'
import type { PolyglotValueDispatch } from '../../../../com/oracle/truffle/polyglot/PolyglotValueDispatch.d.ts'
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
export class PolyglotValueDispatch$InteropValue extends PolyglotValueDispatch {
    constructor(polyglot: PolyglotImpl, languageInstance: PolyglotLanguageInstance, receiverObject: Object, receiverType: Class<Object>)
    // private asClassLiteral: CallTarget;
    // private asDate: CallTarget;
    // private asDuration: CallTarget;
    // private asInstant: CallTarget;
    // private asNativePointer: CallTarget;
    // private asTime: CallTarget;
    // private asTimeZone: CallTarget;
    // private asTypeLiteral: CallTarget;
    // private canExecute: CallTarget;
    // private canInstantiate: CallTarget;
    // private canInvoke: CallTarget;
    // private execute: CallTarget;
    // private executeNoArgs: CallTarget;
    // private executeVoid: CallTarget;
    // private executeVoidNoArgs: CallTarget;
    // private getArrayElement: CallTarget;
    // private getArraySize: CallTarget;
    // private getBufferSize: CallTarget;
    // private getHashEntriesIterator: CallTarget;
    // private getHashKeysIterator: CallTarget;
    // private getHashSize: CallTarget;
    // private getHashValue: CallTarget;
    // private getHashValueOrDefault: CallTarget;
    // private getHashValuesIterator: CallTarget;
    // private getIterator: CallTarget;
    // private getIteratorNextElement: CallTarget;
    // private getMember: CallTarget;
    // private getMemberKeys: CallTarget;
    // private getMetaParents: CallTarget;
    // private getMetaQualifiedName: CallTarget;
    // private getMetaSimpleName: CallTarget;
    // private hasArrayElements: CallTarget;
    // private hasBufferElements: CallTarget;
    // private hasHashEntries: CallTarget;
    // private hasHashEntry: CallTarget;
    // private hasIterator: CallTarget;
    // private hasIteratorNextElement: CallTarget;
    // private hasMember: CallTarget;
    // private hasMembers: CallTarget;
    // private hasMetaParents: CallTarget;
    // private invoke: CallTarget;
    // private invokeNoArgs: CallTarget;
    // private isBufferWritable: CallTarget;
    // private isDate: CallTarget;
    // private isDuration: CallTarget;
    // private isException: CallTarget;
    // private isIterator: CallTarget;
    // private isMetaInstance: CallTarget;
    // private isMetaObject: CallTarget;
    // private isNativePointer: CallTarget;
    // private isNull: CallTarget;
    // private isTime: CallTarget;
    // private isTimeZone: CallTarget;
    // private newInstance: CallTarget;
    // private putHashEntry: CallTarget;
    // private putMember: CallTarget;
    // private readBuffer: CallTarget;
    // private readBufferByte: CallTarget;
    // private readBufferDouble: CallTarget;
    // private readBufferFloat: CallTarget;
    // private readBufferInt: CallTarget;
    // private readBufferLong: CallTarget;
    // private readBufferShort: CallTarget;
    // private receiverType: Class<Object>;
    // private removeArrayElement: CallTarget;
    // private removeHashEntry: CallTarget;
    // private removeMember: CallTarget;
    // private setArrayElement: CallTarget;
    // private throwException: CallTarget;
    // private writeBufferByte: CallTarget;
    // private writeBufferDouble: CallTarget;
    // private writeBufferFloat: CallTarget;
    // private writeBufferInt: CallTarget;
    // private writeBufferLong: CallTarget;
    // private writeBufferShort: CallTarget;
    asBigInteger(languageContext: Object, receiver: Object): BigInteger;
    asBoolean(languageContext: Object, receiver: Object): boolean;
    asByte(languageContext: Object, receiver: Object): number;
    asClass<T extends Object | number | string | boolean>(languageContext: Object, receiver: Object, targetType: Class<T>): T;
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
    asTypeLiteral<T extends Object | number | string | boolean>(languageContext: Object, receiver: Object, rawType: Class<T>, type: Type): T;
    canExecute(languageContext: Object, receiver: Object): boolean;
    canInstantiate(languageContext: Object, receiver: Object): boolean;
    canInvoke(languageContext: Object, identifier: string, receiver: Object): boolean;
    execute(languageContext: Object, receiver: Object): Object;
    execute(languageContext: Object, receiver: Object, arguments: Object[]): Object;
    executeVoid(languageContext: Object, receiver: Object): void;
    executeVoid(languageContext: Object, receiver: Object, arguments: Object[]): void;
    fitsInBigInteger(languageContext: Object, receiver: Object): boolean;
    fitsInByte(languageContext: Object, receiver: Object): boolean;
    fitsInDouble(languageContext: Object, receiver: Object): boolean;
    fitsInFloat(languageContext: Object, receiver: Object): boolean;
    fitsInInt(languageContext: Object, receiver: Object): boolean;
    fitsInLong(languageContext: Object, receiver: Object): boolean;
    fitsInShort(languageContext: Object, receiver: Object): boolean;
    getArrayElement(languageContext: Object, receiver: Object, index: number): Object;
    getArraySize(languageContext: Object, receiver: Object): number;
    getBufferSize(languageContext: Object, receiver: Object): number;
    // private getEngine(): PolyglotEngineImpl;
    getHashEntriesIterator(languageContext: Object, receiver: Object): Object;
    getHashKeysIterator(languageContext: Object, receiver: Object): Object;
    getHashSize(languageContext: Object, receiver: Object): number;
    getHashValue(languageContext: Object, receiver: Object, key: Object): Object;
    getHashValueOrDefault(languageContext: Object, receiver: Object, key: Object, defaultValue: Object): Object;
    getHashValuesIterator(languageContext: Object, receiver: Object): Object;
    getIterator(languageContext: Object, receiver: Object): Object;
    getIteratorNextElement(languageContext: Object, receiver: Object): Object;
    getMember(languageContext: Object, receiver: Object, key: string): Object;
    getMemberKeys(languageContext: Object, receiver: Object): string[];
    getMetaParents(languageContext: Object, receiver: Object): Object;
    getMetaQualifiedName(languageContext: Object, receiver: Object): string;
    getMetaSimpleName(languageContext: Object, receiver: Object): string;
    hasArrayElements(languageContext: Object, receiver: Object): boolean;
    hasBufferElements(languageContext: Object, receiver: Object): boolean;
    hasHashEntries(languageContext: Object, receiver: Object): boolean;
    hasHashEntry(languageContext: Object, receiver: Object, key: Object): boolean;
    hasIterator(languageContext: Object, receiver: Object): boolean;
    hasIteratorNextElement(languageContext: Object, receiver: Object): boolean;
    hasMember(languageContext: Object, receiver: Object, key: string): boolean;
    hasMembers(languageContext: Object, receiver: Object): boolean;
    hasMetaParents(languageContext: Object, receiver: Object): boolean;
    invoke(languageContext: Object, receiver: Object, identifier: string): Object;
    invoke(languageContext: Object, receiver: Object, identifier: string, arguments: Object[]): Object;
    isBoolean(languageContext: Object, receiver: Object): boolean;
    isBufferWritable(languageContext: Object, receiver: Object): boolean;
    isDate(languageContext: Object, receiver: Object): boolean;
    isDuration(languageContext: Object, receiver: Object): boolean;
    isException(languageContext: Object, receiver: Object): boolean;
    isHostObject(languageContext: Object, receiver: Object): boolean;
    isIterator(languageContext: Object, receiver: Object): boolean;
    isMetaInstance(languageContext: Object, receiver: Object, instance: Object): boolean;
    isMetaObject(languageContext: Object, receiver: Object): boolean;
    isNativePointer(languageContext: Object, receiver: Object): boolean;
    isNull(languageContext: Object, receiver: Object): boolean;
    isNumber(languageContext: Object, receiver: Object): boolean;
    isProxyObject(languageContext: Object, receiver: Object): boolean;
    isString(languageContext: Object, receiver: Object): boolean;
    isTime(languageContext: Object, receiver: Object): boolean;
    isTimeZone(languageContext: Object, receiver: Object): boolean;
    newInstance(languageContext: Object, receiver: Object, arguments: Object[]): Object;
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
    writeBufferByte(languageContext: Object, receiver: Object, byteOffset: number, value: number): void;
    writeBufferDouble(languageContext: Object, receiver: Object, order: ByteOrder, byteOffset: number, value: number): void;
    writeBufferFloat(languageContext: Object, receiver: Object, order: ByteOrder, byteOffset: number, value: number): void;
    writeBufferInt(languageContext: Object, receiver: Object, order: ByteOrder, byteOffset: number, value: number): void;
    writeBufferLong(languageContext: Object, receiver: Object, order: ByteOrder, byteOffset: number, value: number): void;
    writeBufferShort(languageContext: Object, receiver: Object, order: ByteOrder, byteOffset: number, value: number): void;
}