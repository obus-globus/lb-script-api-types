import type { TruffleLanguage } from '../../../../../com/oracle/truffle/api/TruffleLanguage.d.ts'
import type { ExceptionType } from '../../../../../com/oracle/truffle/api/interop/ExceptionType.d.ts'
import type { InteropLibrary } from '../../../../../com/oracle/truffle/api/interop/InteropLibrary.d.ts'
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
export abstract class InteropLibraryGen$CachedDispatch extends InteropLibrary {
    static getFactory(): LibraryFactory<InteropLibrary>;
    static getUncached(): InteropLibrary;
    static getUncached(paramv: Object): InteropLibrary;
    static isValidProtocolValue(paramvalue: Object): boolean;
    static isValidValue(paramreceiver: Object): boolean;
    constructor(library: InteropLibrary, next: InteropLibraryGen$CachedDispatch)
    // private library: InteropLibrary;
    // private next: InteropLibraryGen$CachedDispatch;
    accepts(receiver_: Object): boolean;
    asBigInteger(receiver_: Object): BigInteger;
    asBoolean(receiver_: Object): boolean;
    asByte(receiver_: Object): number;
    asDate(receiver_: Object): LocalDate;
    asDouble(receiver_: Object): number;
    asDuration(receiver_: Object): Duration;
    asFloat(receiver_: Object): number;
    asHostObject(receiver_: Object): Object;
    asInstant(receiver_: Object): Instant;
    asInt(receiver_: Object): number;
    asLong(receiver_: Object): number;
    asPointer(receiver_: Object): number;
    asShort(receiver_: Object): number;
    asString(receiver_: Object): string;
    asTime(receiver_: Object): LocalTime;
    asTimeZone(receiver_: Object): ZoneId;
    asTruffleString(receiver_: Object): TruffleString;
    execute(receiver_: Object, ...arguments: Object[]): Object;
    fitsInBigInteger(receiver_: Object): boolean;
    fitsInByte(receiver_: Object): boolean;
    fitsInDouble(receiver_: Object): boolean;
    fitsInFloat(receiver_: Object): boolean;
    fitsInInt(receiver_: Object): boolean;
    fitsInLong(receiver_: Object): boolean;
    fitsInShort(receiver_: Object): boolean;
    getArraySize(receiver_: Object): number;
    getBufferSize(receiver_: Object): number;
    getBytecodeIndex(receiver_: Object): number;
    getDeclaringMetaObject(receiver_: Object): Object;
    getExceptionCause(receiver_: Object): Object;
    getExceptionExitStatus(receiver_: Object): number;
    getExceptionMessage(receiver_: Object): Object;
    getExceptionStackTrace(receiver_: Object): Object;
    getExceptionType(receiver_: Object): ExceptionType;
    getExecutableName(receiver_: Object): Object;
    getHashEntriesIterator(receiver_: Object): Object;
    getHashKeysIterator(receiver_: Object): Object;
    getHashSize(receiver_: Object): number;
    getHashValuesIterator(receiver_: Object): Object;
    getIterator(receiver_: Object): Object;
    getIteratorNextElement(receiver_: Object): Object;
    getLanguage(receiver_: Object): Class<TruffleLanguage<Object>>;
    getLanguageId(receiver_: Object): string;
    getLimit(): number;
    getMembers(receiver: Object): Object;
    getMembers(receiver_: Object, includeInternal: boolean): Object;
    getMetaObject(receiver_: Object): Object;
    getMetaParents(receiver_: Object): Object;
    getMetaQualifiedName(receiver_: Object): Object;
    getMetaSimpleName(receiver_: Object): Object;
    getScopeParent(receiver_: Object): Object;
    getSourceLocation(receiver_: Object): SourceSection;
    getStaticScope(receiver_: Object): Object;
    hasArrayElements(receiver_: Object): boolean;
    hasBufferElements(receiver_: Object): boolean;
    hasBytecodeIndex(receiver_: Object): boolean;
    hasDeclaringMetaObject(receiver_: Object): boolean;
    hasExceptionCause(receiver_: Object): boolean;
    hasExceptionMessage(receiver_: Object): boolean;
    hasExceptionStackTrace(receiver_: Object): boolean;
    hasExecutableName(receiver_: Object): boolean;
    hasHashEntries(receiver_: Object): boolean;
    hasIterator(receiver_: Object): boolean;
    hasIteratorNextElement(receiver_: Object): boolean;
    hasLanguage(receiver_: Object): boolean;
    hasLanguageId(receiver_: Object): boolean;
    hasMemberReadSideEffects(receiver_: Object, member: string): boolean;
    hasMemberWriteSideEffects(receiver_: Object, member: string): boolean;
    hasMembers(receiver_: Object): boolean;
    hasMetaObject(receiver_: Object): boolean;
    hasMetaParents(receiver_: Object): boolean;
    hasScopeParent(receiver_: Object): boolean;
    hasSourceLocation(receiver_: Object): boolean;
    hasStaticScope(receiver_: Object): boolean;
    identityHashCode(receiver_: Object): number;
    instantiate(receiver_: Object, ...arguments: Object[]): Object;
    invokeMember(receiver_: Object, member: string, ...arguments: Object[]): Object;
    isArrayElementInsertable(receiver_: Object, index: number): boolean;
    isArrayElementModifiable(receiver_: Object, index: number): boolean;
    isArrayElementReadable(receiver_: Object, index: number): boolean;
    isArrayElementRemovable(receiver_: Object, index: number): boolean;
    isBoolean(receiver_: Object): boolean;
    isBufferWritable(receiver_: Object): boolean;
    isDate(receiver_: Object): boolean;
    isDuration(receiver_: Object): boolean;
    isException(receiver_: Object): boolean;
    isExceptionIncompleteSource(receiver_: Object): boolean;
    isExecutable(receiver_: Object): boolean;
    isHashEntryExisting(receiver_: Object, key: Object): boolean;
    isHashEntryInsertable(receiver_: Object, key: Object): boolean;
    isHashEntryModifiable(receiver_: Object, key: Object): boolean;
    isHashEntryReadable(receiver_: Object, key: Object): boolean;
    isHashEntryRemovable(receiver_: Object, key: Object): boolean;
    isHashEntryWritable(receiver_: Object, key: Object): boolean;
    isHostObject(receiver_: Object): boolean;
    isIdentical(receiver_: Object, other: Object, otherInterop: InteropLibrary): boolean;
    isIdenticalOrUndefined(receiver_: Object, other: Object): TriState;
    isInstantiable(receiver_: Object): boolean;
    isInternal(receiver_: Object): boolean;
    isIterator(receiver_: Object): boolean;
    isMemberInsertable(receiver_: Object, member: string): boolean;
    isMemberInternal(receiver_: Object, member: string): boolean;
    isMemberInvocable(receiver_: Object, member: string): boolean;
    isMemberModifiable(receiver_: Object, member: string): boolean;
    isMemberReadable(receiver_: Object, member: string): boolean;
    isMemberRemovable(receiver_: Object, member: string): boolean;
    isMetaInstance(receiver_: Object, instance: Object): boolean;
    isMetaObject(receiver_: Object): boolean;
    isNull(receiver_: Object): boolean;
    isNumber(receiver_: Object): boolean;
    isPointer(receiver_: Object): boolean;
    isScope(receiver_: Object): boolean;
    isString(receiver_: Object): boolean;
    isTime(receiver_: Object): boolean;
    isTimeZone(receiver_: Object): boolean;
    readArrayElement(receiver_: Object, index: number): Object;
    readBuffer(receiver_: Object, byteOffset: number, destination: number[], destinationOffset: number, length: number): void;
    readBufferByte(receiver_: Object, byteOffset: number): number;
    readBufferDouble(receiver_: Object, order: ByteOrder, byteOffset: number): number;
    readBufferFloat(receiver_: Object, order: ByteOrder, byteOffset: number): number;
    readBufferInt(receiver_: Object, order: ByteOrder, byteOffset: number): number;
    readBufferLong(receiver_: Object, order: ByteOrder, byteOffset: number): number;
    readBufferShort(receiver_: Object, order: ByteOrder, byteOffset: number): number;
    readHashValue(receiver_: Object, key: Object): Object;
    readHashValueOrDefault(receiver_: Object, key: Object, defaultValue: Object): Object;
    readMember(receiver_: Object, member: string): Object;
    removeArrayElement(receiver_: Object, index: number): void;
    removeHashEntry(receiver_: Object, key: Object): void;
    removeMember(receiver_: Object, member: string): void;
    // private specialize(receiver_: Object): void;
    throwException(receiver_: Object): RuntimeException;
    toDisplayString(receiver: Object): Object;
    toDisplayString(receiver_: Object, allowSideEffects: boolean): Object;
    toNative(receiver_: Object): void;
    writeArrayElement(receiver_: Object, index: number, value: Object): void;
    writeBufferByte(receiver_: Object, byteOffset: number, value: number): void;
    writeBufferDouble(receiver_: Object, order: ByteOrder, byteOffset: number, value: number): void;
    writeBufferFloat(receiver_: Object, order: ByteOrder, byteOffset: number, value: number): void;
    writeBufferInt(receiver_: Object, order: ByteOrder, byteOffset: number, value: number): void;
    writeBufferLong(receiver_: Object, order: ByteOrder, byteOffset: number, value: number): void;
    writeBufferShort(receiver_: Object, order: ByteOrder, byteOffset: number, value: number): void;
    writeHashEntry(receiver_: Object, key: Object, value: Object): void;
    writeMember(receiver_: Object, member: string, value: Object): void;
}