import type { TruffleLanguage } from '../../../../../com/oracle/truffle/api/TruffleLanguage.d.ts'
import type { Breakpoint } from '../../../../../com/oracle/truffle/api/debug/Breakpoint.d.ts'
import type { DebugScope } from '../../../../../com/oracle/truffle/api/debug/DebugScope.d.ts'
import type { Debugger } from '../../../../../com/oracle/truffle/api/debug/Debugger.d.ts'
import type { DebuggerSession } from '../../../../../com/oracle/truffle/api/debug/DebuggerSession.d.ts'
import type { LanguageInfo } from '../../../../../com/oracle/truffle/api/nodes/LanguageInfo.d.ts'
import type { SourceSection } from '../../../../../com/oracle/truffle/api/source/SourceSection.d.ts'
import type { Class } from '../../../../../java/lang/Class.d.ts'
import type { BigInteger } from '../../../../../java/math/BigInteger.d.ts'
import type { Duration } from '../../../../../java/time/Duration.d.ts'
import type { Instant } from '../../../../../java/time/Instant.d.ts'
import type { LocalDate } from '../../../../../java/time/LocalDate.d.ts'
import type { LocalTime } from '../../../../../java/time/LocalTime.d.ts'
import type { ZoneId } from '../../../../../java/time/ZoneId.d.ts'
import type { Object } from '../../../../../java/lang/Object.d.ts'
export abstract class DebugValue extends Object {
    constructor(preferredLanguage: LanguageInfo)
    // private preferredLanguage: LanguageInfo;
    as<T extends unknown>(clazz: Class<T>): T;
    asBigInteger(): BigInteger;
    asBoolean(): boolean;
    asByte(): number;
    asDate(): LocalDate;
    asDouble(): number;
    asDuration(): Duration;
    asFloat(): number;
    asInLanguage(language: LanguageInfo): DebugValue;
    asInstant(): Instant;
    asInt(): number;
    asLong(): number;
    asShort(): number;
    asString(): string;
    asTime(): LocalTime;
    asTimeZone(): ZoneId;
    canExecute(): boolean;
    createAsInLanguage(language: LanguageInfo): DebugValue;
    equals(obj: Object | null): boolean;
    execute(arguments: DebugValue[]): DebugValue;
    fitsInBigInteger(): boolean;
    fitsInByte(): boolean;
    fitsInDouble(): boolean;
    fitsInFloat(): boolean;
    fitsInInt(): boolean;
    fitsInLong(): boolean;
    fitsInShort(): boolean;
    get(): Object;
    getArray(): DebugValue[];
    getDebugger(): Debugger;
    getHashEntriesIterator(): DebugValue;
    getHashKeysIterator(): DebugValue;
    getHashSize(): number;
    getHashValue(key: DebugValue): DebugValue;
    getHashValueOrDefault(key: DebugValue, defaultValue: DebugValue): DebugValue;
    getHashValuesIterator(): DebugValue;
    getIterator(): DebugValue;
    getIteratorNextElement(): DebugValue;
    getLanguageView(): Object;
    getMetaObject(): DebugValue;
    getMetaQualifiedName(): string;
    getMetaSimpleName(): string;
    getName(): string;
    getOriginalLanguage(): LanguageInfo;
    getProperties(): DebugValue[];
    getProperty(name: string): DebugValue;
    getRawValue(languageClass: Class<TruffleLanguage<Object>>): Object;
    getRootInstanceBreakpoints(): Breakpoint[];
    getScope(): DebugScope;
    getSession(): DebuggerSession;
    getSourceLocation(): SourceSection;
    hasHashEntries(): boolean;
    hasIterator(): boolean;
    hasIteratorNextElement(): boolean;
    hasReadSideEffects(): boolean;
    hasWriteSideEffects(): boolean;
    hashCode(): number;
    isArray(): boolean;
    isBoolean(): boolean;
    isDate(): boolean;
    isDuration(): boolean;
    isHashEntryExisting(key: DebugValue): boolean;
    isHashEntryInsertable(key: DebugValue): boolean;
    isHashEntryModifiable(key: DebugValue): boolean;
    isHashEntryReadable(key: DebugValue): boolean;
    isHashEntryRemovable(key: DebugValue): boolean;
    isHashEntryWritable(key: DebugValue): boolean;
    isInstant(): boolean;
    isInternal(): boolean;
    isIterator(): boolean;
    isMetaInstance(instance: DebugValue): boolean;
    isMetaObject(): boolean;
    isNull(): boolean;
    isNumber(): boolean;
    isReadable(): boolean;
    isString(): boolean;
    isTime(): boolean;
    isTimeZone(): boolean;
    isWritable(): boolean;
    putHashEntry(key: DebugValue, value: DebugValue): void;
    removeHashEntry(key: DebugValue): boolean;
    resolveLanguage(): LanguageInfo;
    set(value: DebugValue): void;
    set(primitiveValue: Object): void;
    toDisplayString(): string;
    toDisplayString(allowSideEffects: boolean): string;
    toString(): string;
    unreadableEquals(var_: DebugValue): boolean;
    unreadableHashCode(): number;
    valueEquals(value1: Object, value2: Object): boolean;
    valueHashCode(value: Object): number;
}