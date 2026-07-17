import type { InteropLibrary } from '../../../../com/oracle/truffle/api/interop/InteropLibrary.d.ts'
import type { TruffleObject } from '../../../../com/oracle/truffle/api/interop/TruffleObject.d.ts'
import type { Node } from '../../../../com/oracle/truffle/api/nodes/Node.d.ts'
import type { InlinedBranchProfile } from '../../../../com/oracle/truffle/api/profiles/InlinedBranchProfile.d.ts'
import type { InlinedExactClassProfile } from '../../../../com/oracle/truffle/api/profiles/InlinedExactClassProfile.d.ts'
import type { GuestToHostCodeCache } from '../../../../com/oracle/truffle/host/GuestToHostCodeCache.d.ts'
import type { HostContext } from '../../../../com/oracle/truffle/host/HostContext.d.ts'
import type { HostContext$ToGuestValueNode } from '../../../../com/oracle/truffle/host/HostContext$ToGuestValueNode.d.ts'
import type { HostLanguage } from '../../../../com/oracle/truffle/host/HostLanguage.d.ts'
import type { HostToValueNode } from '../../../../com/oracle/truffle/host/HostToValueNode.d.ts'
import type { HostToValuesNode } from '../../../../com/oracle/truffle/host/HostToValuesNode.d.ts'
import type { RuntimeException } from '../../../../java/lang/RuntimeException.d.ts'
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
    asDate(node: Node, proxyType: InlinedExactClassProfile, errorProfile: InlinedBranchProfile, cache: GuestToHostCodeCache): LocalDate;
    asDuration(node: Node, proxyType: InlinedExactClassProfile, errorProfile: InlinedBranchProfile, cache: GuestToHostCodeCache): Duration;
    asInstant(node: Node, proxyType: InlinedExactClassProfile, errorProfile: InlinedBranchProfile, cache: GuestToHostCodeCache): Instant;
    asPointer(node: Node, proxyType: InlinedExactClassProfile, errorProfile: InlinedBranchProfile, cache: GuestToHostCodeCache): number;
    asTime(node: Node, proxyType: InlinedExactClassProfile, errorProfile: InlinedBranchProfile, cache: GuestToHostCodeCache): LocalTime;
    asTimeZone(node: Node, proxyType: InlinedExactClassProfile, errorProfile: InlinedBranchProfile, cache: GuestToHostCodeCache): ZoneId;
    equals(obj: Object | null): boolean;
    execute(arguments: Object[], node: Node, proxyType: InlinedExactClassProfile, toGuest: HostContext$ToGuestValueNode, toGuestValues: HostToValuesNode, errorProfile: InlinedBranchProfile, cache: GuestToHostCodeCache): Object;
    // private failInvalidMembers(node: Node, guestValue: Object): RuntimeException;
    getArraySize(node: Node, proxyType: InlinedExactClassProfile, errorProfile: InlinedBranchProfile, cache: GuestToHostCodeCache): number;
    getHashEntriesIterator(node: Node, proxyType: InlinedExactClassProfile, sharedInterop: InteropLibrary, toGuest: HostContext$ToGuestValueNode, errorProfile: InlinedBranchProfile, cache: GuestToHostCodeCache): Object;
    getHashSize(node: Node, proxyType: InlinedExactClassProfile, errorProfile: InlinedBranchProfile, cache: GuestToHostCodeCache): number;
    getIterator(node: Node, proxyType: InlinedExactClassProfile, errorProfile: InlinedBranchProfile, toGuest: HostContext$ToGuestValueNode, sharedInterop: InteropLibrary, cache: GuestToHostCodeCache): Object;
    getIteratorNextElement(node: Node, proxyType: InlinedExactClassProfile, toGuest: HostContext$ToGuestValueNode, errorProfile: InlinedBranchProfile, cache: GuestToHostCodeCache): Object;
    getLanguageId(): string;
    getMembers(includeInternal: boolean, node: Node, proxyType: InlinedExactClassProfile, errorProfile: InlinedBranchProfile, toGuest: HostContext$ToGuestValueNode, sharedInterop: InteropLibrary, sharedInterop2: InteropLibrary, cache: GuestToHostCodeCache): Object;
    getMetaObject(): Object;
    hasArrayElements(node: Node, proxyType: InlinedExactClassProfile): boolean;
    hasHashEntries(node: Node, proxyType: InlinedExactClassProfile): boolean;
    hasIterator(node: Node, proxyType: InlinedExactClassProfile): boolean;
    hasIteratorNextElement(node: Node, proxyType: InlinedExactClassProfile, errorProfile: InlinedBranchProfile, cache: GuestToHostCodeCache): boolean;
    hasLanguageId(): boolean;
    hasMembers(node: Node, proxyType: InlinedExactClassProfile): boolean;
    hasMetaObject(): boolean;
    hashCode(): number;
    instantiate(arguments: Object[], node: Node, proxyType: InlinedExactClassProfile, toGuest: HostContext$ToGuestValueNode, errorProfile: InlinedBranchProfile, cache: GuestToHostCodeCache): Object;
    invokeMember(member: string, arguments: Object[], node: Node, proxyType: InlinedExactClassProfile, toGuest: HostContext$ToGuestValueNode, errorProfile: InlinedBranchProfile, executables: InteropLibrary, cache: GuestToHostCodeCache): Object;
    isArrayElementExisting(index: number, node: Node, proxyType: InlinedExactClassProfile, cache: GuestToHostCodeCache): boolean;
    isArrayElementInsertable(index: number, node: Node, proxyType: InlinedExactClassProfile, cache: GuestToHostCodeCache): boolean;
    isDate(node: Node, proxyType: InlinedExactClassProfile): boolean;
    isDuration(node: Node, proxyType: InlinedExactClassProfile): boolean;
    isExecutable(node: Node, proxyType: InlinedExactClassProfile): boolean;
    isHashEntryInsertable(key: Object, node: Node, proxyType: InlinedExactClassProfile, toValueNode: HostToValueNode, cache: GuestToHostCodeCache): boolean;
    isHashValueExisting(key: Object, node: Node, proxyType: InlinedExactClassProfile, toValueNode: HostToValueNode, cache: GuestToHostCodeCache): boolean;
    isInstantiable(node: Node, proxyType: InlinedExactClassProfile): boolean;
    isIterator(node: Node, proxyType: InlinedExactClassProfile): boolean;
    isMemberExisting(member: string, node: Node, proxyType: InlinedExactClassProfile, cache: GuestToHostCodeCache): boolean;
    isMemberInsertable(member: string, node: Node, proxyType: InlinedExactClassProfile, cache: GuestToHostCodeCache): boolean;
    isMemberInvocable(member: string, node: Node, proxyType: InlinedExactClassProfile, toGuest: HostContext$ToGuestValueNode, errorProfile: InlinedBranchProfile, executables: InteropLibrary, cache: GuestToHostCodeCache): boolean;
    isPointer(node: Node, proxyType: InlinedExactClassProfile): boolean;
    isTime(node: Node, proxyType: InlinedExactClassProfile): boolean;
    isTimeZone(node: Node, proxyType: InlinedExactClassProfile): boolean;
    readArrayElement(index: number, node: Node, toGuest: HostContext$ToGuestValueNode, proxyType: InlinedExactClassProfile, errorProfile: InlinedBranchProfile, cache: GuestToHostCodeCache): Object;
    readHashValue(key: Object, node: Node, proxyType: InlinedExactClassProfile, toValueNode: HostToValueNode, toGuest: HostContext$ToGuestValueNode, errorProfile: InlinedBranchProfile, cache: GuestToHostCodeCache): Object;
    readMember(member: string, node: Node, proxyType: InlinedExactClassProfile, toGuest: HostContext$ToGuestValueNode, errorProfile: InlinedBranchProfile, cache: GuestToHostCodeCache): Object;
    removeArrayElement(index: number, node: Node, proxyType: InlinedExactClassProfile, errorProfile: InlinedBranchProfile, cache: GuestToHostCodeCache): void;
    removeHashEntry(key: Object, node: Node, proxyType: InlinedExactClassProfile, toValueNode: HostToValueNode, errorProfile: InlinedBranchProfile, cache: GuestToHostCodeCache): void;
    removeMember(member: string, node: Node, proxyType: InlinedExactClassProfile, errorProfile: InlinedBranchProfile, cache: GuestToHostCodeCache): void;
    toDisplayString(config: boolean): Object;
    // private valueToString(node: Node, guestValue: Object): string;
    writeArrayElement(index: number, value: Object, node: Node, proxyType: InlinedExactClassProfile, toValueNode: HostToValueNode, errorProfile: InlinedBranchProfile, cache: GuestToHostCodeCache): void;
    writeHashEntry(key: Object, value: Object, node: Node, proxyType: InlinedExactClassProfile, toValueNode: HostToValueNode, toValueNode2: HostToValueNode, errorProfile: InlinedBranchProfile, cache: GuestToHostCodeCache): void;
    writeMember(member: string, value: Object, node: Node, proxyType: InlinedExactClassProfile, toValueNode: HostToValueNode, cache: GuestToHostCodeCache): void;
}