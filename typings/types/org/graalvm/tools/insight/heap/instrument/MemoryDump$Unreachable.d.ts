import type { TruffleObject } from '../../../../../../com/oracle/truffle/api/interop/TruffleObject.d.ts'
import type { Object } from '../../../../../../java/lang/Object.d.ts'
export class MemoryDump$Unreachable extends Object implements TruffleObject {
    constructor()
    getMembers(includeInternal: boolean): Object;
    hasMembers(): boolean;
    isMemberReadable(member: string): boolean;
    readMember(name: string): Object;
}