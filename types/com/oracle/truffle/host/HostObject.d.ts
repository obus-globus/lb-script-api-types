import type { TruffleLanguage } from '../../../../com/oracle/truffle/api/TruffleLanguage.d.ts'
import type { ExceptionType } from '../../../../com/oracle/truffle/api/interop/ExceptionType.d.ts'
import type { InteropLibrary } from '../../../../com/oracle/truffle/api/interop/InteropLibrary.d.ts'
import type { TruffleObject } from '../../../../com/oracle/truffle/api/interop/TruffleObject.d.ts'
import type { Node } from '../../../../com/oracle/truffle/api/nodes/Node.d.ts'
import type { InlinedBranchProfile } from '../../../../com/oracle/truffle/api/profiles/InlinedBranchProfile.d.ts'
import type { InlinedExactClassProfile } from '../../../../com/oracle/truffle/api/profiles/InlinedExactClassProfile.d.ts'
import type { HostClassCache } from '../../../../com/oracle/truffle/host/HostClassCache.d.ts'
import type { HostContext } from '../../../../com/oracle/truffle/host/HostContext.d.ts'
import type { HostExecuteNode } from '../../../../com/oracle/truffle/host/HostExecuteNode.d.ts'
import type { HostObject$LookupFieldNode } from '../../../../com/oracle/truffle/host/HostObject$LookupFieldNode.d.ts'
import type { HostObject$LookupFunctionalMethodNode } from '../../../../com/oracle/truffle/host/HostObject$LookupFunctionalMethodNode.d.ts'
import type { HostObject$LookupInnerClassNode } from '../../../../com/oracle/truffle/host/HostObject$LookupInnerClassNode.d.ts'
import type { HostObject$LookupMethodNode } from '../../../../com/oracle/truffle/host/HostObject$LookupMethodNode.d.ts'
import type { HostObject$ReadFieldNode } from '../../../../com/oracle/truffle/host/HostObject$ReadFieldNode.d.ts'
import type { HostObject$WriteFieldNode } from '../../../../com/oracle/truffle/host/HostObject$WriteFieldNode.d.ts'
import type { Class } from '../../../../java/lang/Class.d.ts'
import type { RuntimeException } from '../../../../java/lang/RuntimeException.d.ts'
import type { Duration } from '../../../../java/time/Duration.d.ts'
import type { Instant } from '../../../../java/time/Instant.d.ts'
import type { LocalDate } from '../../../../java/time/LocalDate.d.ts'
import type { LocalTime } from '../../../../java/time/LocalTime.d.ts'
import type { ZoneId } from '../../../../java/time/ZoneId.d.ts'
import type { Object } from '../../../../java/lang/Object.d.ts'
export class HostObject extends Object implements TruffleObject {
    private constructor(obj: Object, context: HostContext, extraInfo: Object)
    // private context: HostContext;
    // private extraInfo: Object;
    // private obj: Object;
    asBoolean(node: Node, error: InlinedBranchProfile): boolean;
    asClass(): Class<Object>;
    asDate(): LocalDate;
    asDuration(): Duration;
    asInstant(): Instant;
    asStaticClass(): Class<Object>;
    asString(node: Node, thisLibrary: InteropLibrary, strings: InteropLibrary, error: InlinedBranchProfile): string;
    asTime(): LocalTime;
    asTimeZone(): ZoneId;
    bigIntegerAsByte(): number;
    bigIntegerAsDouble(): number;
    bigIntegerAsFloat(): number;
    bigIntegerAsInt(): number;
    bigIntegerAsLong(): number;
    bigIntegerAsShort(): number;
    bigIntegerFitsInByte(): boolean;
    bigIntegerFitsInDouble(): boolean;
    bigIntegerFitsInFloat(): boolean;
    bigIntegerFitsInInt(): boolean;
    bigIntegerFitsInLong(): boolean;
    bigIntegerFitsInShort(): boolean;
    equals(o: Object | null): boolean;
    execute(args: Object[], node: Node, doExecute: HostExecuteNode, lookupMethod: HostObject$LookupFunctionalMethodNode, error: InlinedBranchProfile): Object;
    getExceptionCause(): Object;
    getExceptionExitStatus(node: Node, error: InlinedBranchProfile): number;
    getExceptionMessage(node: Node, error: InlinedBranchProfile): Object;
    getExceptionStackTrace(): Object;
    getExceptionType(node: Node, error: InlinedBranchProfile): ExceptionType;
    getHostClassCache(): HostClassCache;
    getLanguage(): Class<TruffleLanguage<Object>>;
    getLookupClass(): Class<Object>;
    getMembers(includeInternal: boolean): Object;
    getMetaObject(): Object;
    getMetaParents(): Object;
    getMetaQualifiedName(): Object;
    getMetaSimpleName(): Object;
    getObjectClass(): Class<Object>;
    hasExceptionCause(): boolean;
    hasExceptionMessage(): boolean;
    hasExceptionStackTrace(): boolean;
    hasLanguage(): boolean;
    hasMembers(): boolean;
    hasMetaObject(): boolean;
    hasMetaParents(): boolean;
    hashCode(): number;
    invokeMember(name: string, args: Object[], node: Node, lookupMethod: HostObject$LookupMethodNode, executeMethod: HostExecuteNode, lookupField: HostObject$LookupFieldNode, readField: HostObject$ReadFieldNode, fieldValues: InteropLibrary, error: InlinedBranchProfile): Object;
    isArray(hostClassCache: HostClassCache): boolean;
    isArrayClass(): boolean;
    isBigInteger(): boolean;
    isBoolean(): boolean;
    isBuffer(hostClassCache: HostClassCache): boolean;
    isByteSequence(): boolean;
    isClass(): boolean;
    isDate(): boolean;
    isDefaultClass(): boolean;
    isDuration(): boolean;
    isException(): boolean;
    isExceptionIncompleteSource(node: Node, error: InlinedBranchProfile): boolean;
    isExecutable(node: Node, lookupMethod: HostObject$LookupFunctionalMethodNode): boolean;
    isIterable(hostClassCache: HostClassCache): boolean;
    isIteratorLocal(hostClassCache: HostClassCache): boolean;
    isList(hostClassCache: HostClassCache): boolean;
    isMap(hostClassCache: HostClassCache): boolean;
    isMapEntry(hostClassCache: HostClassCache): boolean;
    isMemberInsertable(member: string): boolean;
    isMetaInstance(other: Object, node: Node, library: InteropLibrary, error: InlinedBranchProfile): boolean;
    isMetaObject(): boolean;
    isNull(): boolean;
    isStaticClass(): boolean;
    isString(node: Node, classProfile: InlinedExactClassProfile): boolean;
    isTime(): boolean;
    isTimeZone(): boolean;
    readMember(name: string, node: Node, lookupField: HostObject$LookupFieldNode, readField: HostObject$ReadFieldNode, lookupMethod: HostObject$LookupMethodNode, lookupInnerClass: HostObject$LookupInnerClassNode, error: InlinedBranchProfile): Object;
    throwException(node: Node, error: InlinedBranchProfile): RuntimeException;
    toDisplayString(allowSideEffects: boolean): string;
    toString(): string;
    writeMember(member: string, value: Object, node: Node, lookupField: HostObject$LookupFieldNode, writeField: HostObject$WriteFieldNode, error: InlinedBranchProfile): void;
}