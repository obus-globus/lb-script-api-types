import type { TruffleLanguage } from '../../../../../com/oracle/truffle/api/TruffleLanguage.d.ts'
import type { ExceptionType } from '../../../../../com/oracle/truffle/api/interop/ExceptionType.d.ts'
import type { InteropLibrary } from '../../../../../com/oracle/truffle/api/interop/InteropLibrary.d.ts'
import type { InteropLibrary$Asserts$Type } from '../../../../../com/oracle/truffle/api/interop/InteropLibrary$Asserts$Type.d.ts'
import type { LibraryFactory } from '../../../../../com/oracle/truffle/api/library/LibraryFactory.d.ts'
import type { SourceSection } from '../../../../../com/oracle/truffle/api/source/SourceSection.d.ts'
import type { TruffleString } from '../../../../../com/oracle/truffle/api/strings/TruffleString.d.ts'
import type { TriState } from '../../../../../com/oracle/truffle/api/utilities/TriState.d.ts'
import type { Class } from '../../../../../java/lang/Class.d.ts'
import type { RuntimeException } from '../../../../../java/lang/RuntimeException.d.ts'
import type { BigInteger } from '../../../../../java/math/BigInteger.d.ts'
import type { ByteOrder } from '../../../../../java/nio/ByteOrder.d.ts'
import type { Duration } from '../../../../../java/time/Duration.d.ts'
import type { Instant } from '../../../../../java/time/Instant.d.ts'
import type { LocalDate } from '../../../../../java/time/LocalDate.d.ts'
import type { LocalTime } from '../../../../../java/time/LocalTime.d.ts'
import type { ZoneId } from '../../../../../java/time/ZoneId.d.ts'
import type { Object } from '../../../../../java/lang/Object.d.ts'
export class InteropLibrary$Asserts extends InteropLibrary {
    static getFactory(): LibraryFactory<InteropLibrary>;
    static getUncached(): InteropLibrary;
    static getUncached(paramv: Object): InteropLibrary;
    static isValidProtocolValue(paramvalue: Object): boolean;
    static isValidValue(paramreceiver: Object): boolean;
    constructor(delegate: InteropLibrary)
    // private delegate: InteropLibrary;
    accepts(receiver: Object): boolean;
    asBigInteger(receiver: Object): BigInteger;
    asBoolean(receiver: Object): boolean;
    asByte(receiver: Object): number;
    asDate(receiver: Object): LocalDate;
    asDouble(receiver: Object): number;
    asDuration(receiver: Object): Duration;
    asFloat(receiver: Object): number;
    asInstant(receiver: Object): Instant;
    asInt(receiver: Object): number;
    asLong(receiver: Object): number;
    asPointer(receiver: Object): number;
    asShort(receiver: Object): number;
    asString(receiver: Object): string;
    asTime(receiver: Object): LocalTime;
    asTimeZone(receiver: Object): ZoneId;
    asTruffleString(receiver: Object): TruffleString;
    // private assertHasMetaObject(receiver: Object, result: boolean): boolean;
    // private assertHasNoLanguage(receiver: Object): boolean;
    // private assertHasNoMetaObject(receiver: Object): boolean;
    // private assertHasNoSourceSection(receiver: Object): boolean;
    // private assertMetaObject(receiver: Object): boolean;
    // private assertNoMetaObject(receiver: Object): boolean;
    execute(receiver: Object, arguments: Object[]): Object;
    fitsInBigInteger(receiver: Object): boolean;
    fitsInByte(receiver: Object): boolean;
    fitsInDouble(receiver: Object): boolean;
    fitsInFloat(receiver: Object): boolean;
    fitsInInt(receiver: Object): boolean;
    fitsInLong(receiver: Object): boolean;
    fitsInShort(receiver: Object): boolean;
    getArraySize(receiver: Object): number;
    getBufferSize(receiver: Object): number;
    getDeclaringMetaObject(receiver: Object): Object;
    getExceptionCause(receiver: Object): Object;
    getExceptionExitStatus(receiver: Object): number;
    getExceptionMessage(receiver: Object): Object;
    getExceptionStackTrace(receiver: Object): Object;
    getExceptionType(receiver: Object): ExceptionType;
    getExecutableName(receiver: Object): Object;
    getHashEntriesIterator(receiver: Object): Object;
    getHashKeysIterator(receiver: Object): Object;
    getHashSize(receiver: Object): number;
    getHashValuesIterator(receiver: Object): Object;
    getIterator(receiver: Object): Object;
    getIteratorNextElement(receiver: Object): Object;
    getLanguage(receiver: Object): Class<TruffleLanguage<Object>>;
    getMembers(receiver: Object): Object;
    getMembers(receiver: Object, internal: boolean): Object;
    getMetaObject(receiver: Object): Object;
    getMetaParents(receiver: Object): Object;
    getMetaQualifiedName(receiver: Object): Object;
    getMetaSimpleName(receiver: Object): Object;
    getScopeParent(receiver: Object): Object;
    getSourceLocation(receiver: Object): SourceSection;
    hasArrayElements(receiver: Object): boolean;
    hasBufferElements(receiver: Object): boolean;
    hasDeclaringMetaObject(receiver: Object): boolean;
    hasExceptionCause(receiver: Object): boolean;
    hasExceptionMessage(receiver: Object): boolean;
    hasExceptionStackTrace(receiver: Object): boolean;
    hasExecutableName(receiver: Object): boolean;
    // private hasFixedTimeZone(receiver: Object): boolean;
    hasHashEntries(receiver: Object): boolean;
    hasIterator(receiver: Object): boolean;
    hasIteratorNextElement(receiver: Object): boolean;
    hasLanguage(receiver: Object): boolean;
    hasMemberReadSideEffects(receiver: Object, identifier: string): boolean;
    hasMemberWriteSideEffects(receiver: Object, identifier: string): boolean;
    hasMembers(receiver: Object): boolean;
    hasMetaObject(receiver: Object): boolean;
    hasMetaParents(receiver: Object): boolean;
    hasScopeParent(receiver: Object): boolean;
    hasSourceLocation(receiver: Object): boolean;
    identityHashCode(receiver: Object): number;
    instantiate(receiver: Object, arguments: Object[]): Object;
    invokeMember(receiver: Object, identifier: string, arguments: Object[]): Object;
    isArrayElementInsertable(receiver: Object, index: number): boolean;
    isArrayElementModifiable(receiver: Object, index: number): boolean;
    isArrayElementReadable(receiver: Object, index: number): boolean;
    isArrayElementRemovable(receiver: Object, index: number): boolean;
    isBoolean(receiver: Object): boolean;
    isBufferWritable(receiver: Object): boolean;
    isDate(receiver: Object): boolean;
    isDuration(receiver: Object): boolean;
    isException(receiver: Object): boolean;
    isExceptionIncompleteSource(receiver: Object): boolean;
    isExecutable(receiver: Object): boolean;
    isHashEntryExisting(receiver: Object, key: Object): boolean;
    isHashEntryInsertable(receiver: Object, key: Object): boolean;
    isHashEntryModifiable(receiver: Object, key: Object): boolean;
    isHashEntryReadable(receiver: Object, key: Object): boolean;
    isHashEntryRemovable(receiver: Object, key: Object): boolean;
    isHashEntryWritable(receiver: Object, key: Object): boolean;
    isIdentical(receiver: Object, other: Object, otherInterop: InteropLibrary): boolean;
    isIdenticalOrUndefined(receiver: Object, other: Object): TriState;
    isInstantiable(receiver: Object): boolean;
    isIterator(receiver: Object): boolean;
    isMemberInsertable(receiver: Object, identifier: string): boolean;
    isMemberInternal(receiver: Object, identifier: string): boolean;
    isMemberInvocable(receiver: Object, identifier: string): boolean;
    isMemberModifiable(receiver: Object, identifier: string): boolean;
    isMemberReadable(receiver: Object, identifier: string): boolean;
    isMemberRemovable(receiver: Object, identifier: string): boolean;
    isMetaInstance(receiver: Object, instance: Object): boolean;
    isMetaObject(receiver: Object): boolean;
    isNull(receiver: Object): boolean;
    isNumber(receiver: Object): boolean;
    isPointer(receiver: Object): boolean;
    isScope(receiver: Object): boolean;
    isString(receiver: Object): boolean;
    isTime(receiver: Object): boolean;
    isTimeZone(receiver: Object): boolean;
    // private notOtherType(receiver: Object, type: InteropLibrary$Asserts$Type): boolean;
    readArrayElement(receiver: Object, index: number): Object;
    readBuffer(receiver: Object, byteOffset: number, destination: number[], destinationOffset: number, length: number): void;
    readBufferByte(receiver: Object, byteOffset: number): number;
    readBufferDouble(receiver: Object, order: ByteOrder, byteOffset: number): number;
    readBufferFloat(receiver: Object, order: ByteOrder, byteOffset: number): number;
    readBufferInt(receiver: Object, order: ByteOrder, byteOffset: number): number;
    readBufferLong(receiver: Object, order: ByteOrder, byteOffset: number): number;
    readBufferShort(receiver: Object, order: ByteOrder, byteOffset: number): number;
    readHashValue(receiver: Object, key: Object): Object;
    readHashValueOrDefault(receiver: Object, key: Object, defaultValue: Object): Object;
    readMember(receiver: Object, identifier: string): Object;
    removeArrayElement(receiver: Object, index: number): void;
    removeHashEntry(receiver: Object, key: Object): void;
    removeMember(receiver: Object, identifier: string): void;
    throwException(receiver: Object): RuntimeException;
    toDisplayString(receiver: Object): Object;
    toDisplayString(receiver: Object, allowSideEffects: boolean): Object;
    toNative(receiver: Object): void;
    verifyIsSame(result: boolean, receiver: Object, other: Object, otherInterop: InteropLibrary): boolean;
    writeArrayElement(receiver: Object, index: number, value: Object): void;
    writeBufferByte(receiver: Object, byteOffset: number, value: number): void;
    writeBufferDouble(receiver: Object, order: ByteOrder, byteOffset: number, value: number): void;
    writeBufferFloat(receiver: Object, order: ByteOrder, byteOffset: number, value: number): void;
    writeBufferInt(receiver: Object, order: ByteOrder, byteOffset: number, value: number): void;
    writeBufferLong(receiver: Object, order: ByteOrder, byteOffset: number, value: number): void;
    writeBufferShort(receiver: Object, order: ByteOrder, byteOffset: number, value: number): void;
    writeHashEntry(receiver: Object, key: Object, value: Object): void;
    writeMember(receiver: Object, identifier: string, value: Object): void;
}