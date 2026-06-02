import type { TruffleObject } from '../../../../../../com/oracle/truffle/api/interop/TruffleObject.d.ts'
import type { Node } from '../../../../../../com/oracle/truffle/api/nodes/Node.d.ts'
import type { InlinedBranchProfile } from '../../../../../../com/oracle/truffle/api/profiles/InlinedBranchProfile.d.ts'
import type { Object } from '../../../../../../java/lang/Object.d.ts'
export class MemoryDump$MembersArray extends Object implements TruffleObject {
    private constructor(members: string[])
    // private members: string[];
    getArraySize(): number;
    hasArrayElements(): boolean;
    isArrayElementReadable(index: number): boolean;
    readArrayElement(index: number, node: Node, exception: InlinedBranchProfile): Object;
}