import type { TruffleObject } from '../../../../com/oracle/truffle/api/interop/TruffleObject.d.ts'
import type { Node } from '../../../../com/oracle/truffle/api/nodes/Node.d.ts'
import type { InlinedBranchProfile } from '../../../../com/oracle/truffle/api/profiles/InlinedBranchProfile.d.ts'
import type { Object } from '../../../../java/lang/Object.d.ts'
export class HostObject$KeysArray extends Object implements TruffleObject {
    constructor(keys: string[])
    // private keys: string[];
    getArraySize(): number;
    hasArrayElements(): boolean;
    isArrayElementReadable(idx: number): boolean;
    readArrayElement(idx: number, node: Node, error: InlinedBranchProfile): string;
}