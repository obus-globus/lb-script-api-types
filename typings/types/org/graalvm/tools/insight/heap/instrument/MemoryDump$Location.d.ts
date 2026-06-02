import type { TruffleObject } from '../../../../../../com/oracle/truffle/api/interop/TruffleObject.d.ts'
import type { Object } from '../../../../../../java/lang/Object.d.ts'
export class MemoryDump$Location extends Object implements TruffleObject {
    private constructor(at: Object)
    // private charIndex: number;
    // private charLength: number;
    // private column: number;
    // private line: number;
    // private name: string;
    // private source: Object;
    getMembers(includeInternal: boolean): Object;
    hasMembers(): boolean;
    isMemberReadable(member: string): boolean;
    readMember(member: string): Object;
}