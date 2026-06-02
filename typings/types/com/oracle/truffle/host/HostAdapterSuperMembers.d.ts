import type { InteropLibrary } from '../../../../com/oracle/truffle/api/interop/InteropLibrary.d.ts'
import type { TruffleObject } from '../../../../com/oracle/truffle/api/interop/TruffleObject.d.ts'
import type { HostAdapterSuperMembers$NameCache } from '../../../../com/oracle/truffle/host/HostAdapterSuperMembers$NameCache.d.ts'
import type { HostObject } from '../../../../com/oracle/truffle/host/HostObject.d.ts'
import type { Object } from '../../../../java/lang/Object.d.ts'
export class HostAdapterSuperMembers extends Object implements TruffleObject {
    constructor(adapter: HostObject)
    readonly adapter: HostObject;
    // private collectSuperMembers(): string[];
    getAdapter(): Object;
    getMembers(includeInternal: boolean): Object;
    hasMembers(): boolean;
    invokeMember(name: string, args: Object[], cache: HostAdapterSuperMembers$NameCache, interop: InteropLibrary): Object;
    isMemberInvocable(name: string, cache: HostAdapterSuperMembers$NameCache, interop: InteropLibrary): boolean;
    isMemberReadable(name: string, cache: HostAdapterSuperMembers$NameCache, interop: InteropLibrary): boolean;
    readMember(name: string, cache: HostAdapterSuperMembers$NameCache, interop: InteropLibrary): Object;
}