import type { TruffleLanguage } from '../../../../com/oracle/truffle/api/TruffleLanguage.d.ts'
import type { InteropLibrary } from '../../../../com/oracle/truffle/api/interop/InteropLibrary.d.ts'
import type { TruffleObject } from '../../../../com/oracle/truffle/api/interop/TruffleObject.d.ts'
import type { GuestToHostCodeCache } from '../../../../com/oracle/truffle/host/GuestToHostCodeCache.d.ts'
import type { HostContext } from '../../../../com/oracle/truffle/host/HostContext.d.ts'
import type { HostLanguage } from '../../../../com/oracle/truffle/host/HostLanguage.d.ts'
import type { Class } from '../../../../java/lang/Class.d.ts'
import type { Duration } from '../../../../java/time/Duration.d.ts'
import type { Instant } from '../../../../java/time/Instant.d.ts'
import type { LocalDate } from '../../../../java/time/LocalDate.d.ts'
import type { LocalTime } from '../../../../java/time/LocalTime.d.ts'
import type { ZoneId } from '../../../../java/time/ZoneId.d.ts'
import type { Object } from '../../../../java/lang/Object.d.ts'
export class HostProxy extends Object implements TruffleObject {
    static isProxyGuestObject(paramlanguage: HostLanguage, paramvalue: TruffleObject): boolean;
    static isProxyGuestObject(paramlanguage: HostLanguage, paramvalue: Object): boolean;
    static toProxyGuestObject(paramcontext: HostContext, paramreceiver: Object): TruffleObject;
    static toProxyHostObject(paramlanguage: HostLanguage, paramvalue: Object): Object;
    constructor(context: HostContext, proxy: Object)
    // private context: HostContext;
    // private proxy: Object;
    asDate(library: InteropLibrary, cache: GuestToHostCodeCache): LocalDate;
    asDuration(library: InteropLibrary, cache: GuestToHostCodeCache): Duration;
    asInstant(library: InteropLibrary, cache: GuestToHostCodeCache): Instant;
    asPointer(library: InteropLibrary, cache: GuestToHostCodeCache): number;
    asTime(library: InteropLibrary, cache: GuestToHostCodeCache): LocalTime;
    asTimeZone(library: InteropLibrary, cache: GuestToHostCodeCache): ZoneId;
    equals(obj: Object | null): boolean;
    execute(arguments: Object[], library: InteropLibrary, cache: GuestToHostCodeCache): Object;
    getArraySize(library: InteropLibrary, cache: GuestToHostCodeCache): number;
    getHashEntriesIterator(library: InteropLibrary, cache: GuestToHostCodeCache): Object;
    getHashSize(library: InteropLibrary, cache: GuestToHostCodeCache): number;
    getIterator(library: InteropLibrary, cache: GuestToHostCodeCache): Object;
    getIteratorNextElement(library: InteropLibrary, cache: GuestToHostCodeCache): Object;
    getLanguage(): Class<TruffleLanguage<Object>>;
    getMembers(includeInternal: boolean, library: InteropLibrary, cache: GuestToHostCodeCache): Object;
    getMetaObject(): Object;
    hasArrayElements(cache: GuestToHostCodeCache): boolean;
    hasHashEntries(cache: GuestToHostCodeCache): boolean;
    hasIterator(cache: GuestToHostCodeCache): boolean;
    hasIteratorNextElement(library: InteropLibrary, cache: GuestToHostCodeCache): boolean;
    hasLanguage(): boolean;
    hasMembers(cache: GuestToHostCodeCache): boolean;
    hasMetaObject(): boolean;
    hashCode(): number;
    instantiate(arguments: Object[], library: InteropLibrary, cache: GuestToHostCodeCache): Object;
    invokeMember(member: string, arguments: Object[], library: InteropLibrary, executables: InteropLibrary, cache: GuestToHostCodeCache): Object;
    isArrayElementExisting(index: number, library: InteropLibrary, cache: GuestToHostCodeCache): boolean;
    isArrayElementInsertable(index: number, library: InteropLibrary, cache: GuestToHostCodeCache): boolean;
    isDate(cache: GuestToHostCodeCache): boolean;
    isDuration(cache: GuestToHostCodeCache): boolean;
    isExecutable(cache: GuestToHostCodeCache): boolean;
    isHashEntryInsertable(key: Object, library: InteropLibrary, cache: GuestToHostCodeCache): boolean;
    isHashValueExisting(key: Object, library: InteropLibrary, cache: GuestToHostCodeCache): boolean;
    isInstantiable(cache: GuestToHostCodeCache): boolean;
    isIterator(cache: GuestToHostCodeCache): boolean;
    isMemberExisting(member: string, library: InteropLibrary, cache: GuestToHostCodeCache): boolean;
    isMemberInsertable(member: string, library: InteropLibrary, cache: GuestToHostCodeCache): boolean;
    isMemberInvocable(member: string, library: InteropLibrary, executables: InteropLibrary, cache: GuestToHostCodeCache): boolean;
    isPointer(cache: GuestToHostCodeCache): boolean;
    isTime(cache: GuestToHostCodeCache): boolean;
    isTimeZone(cache: GuestToHostCodeCache): boolean;
    readArrayElement(index: number, library: InteropLibrary, cache: GuestToHostCodeCache): Object;
    readHashValue(key: Object, library: InteropLibrary, cache: GuestToHostCodeCache): Object;
    readMember(member: string, library: InteropLibrary, cache: GuestToHostCodeCache): Object;
    removeArrayElement(index: number, library: InteropLibrary, cache: GuestToHostCodeCache): void;
    removeHashEntry(key: Object, library: InteropLibrary, cache: GuestToHostCodeCache): void;
    removeMember(member: string, library: InteropLibrary, cache: GuestToHostCodeCache): void;
    toDisplayString(config: boolean): Object;
    writeArrayElement(index: number, value: Object, library: InteropLibrary, cache: GuestToHostCodeCache): void;
    writeHashEntry(key: Object, value: Object, library: InteropLibrary, cache: GuestToHostCodeCache): void;
    writeMember(member: string, value: Object, library: InteropLibrary, cache: GuestToHostCodeCache): void;
}