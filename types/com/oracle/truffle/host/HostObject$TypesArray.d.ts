import type { TruffleObject } from '../../../../com/oracle/truffle/api/interop/TruffleObject.d.ts'
import type { Node } from '../../../../com/oracle/truffle/api/nodes/Node.d.ts'
import type { InlinedBranchProfile } from '../../../../com/oracle/truffle/api/profiles/InlinedBranchProfile.d.ts'
import type { HostObject } from '../../../../com/oracle/truffle/host/HostObject.d.ts'
import type { Object } from '../../../../java/lang/Object.d.ts'
export class HostObject$TypesArray extends Object implements TruffleObject {
    constructor(types: HostObject[])
    // private types: HostObject[];
    getArraySize(): number;
    hasArrayElements(): boolean;
    isArrayElementReadable(idx: number): boolean;
    readArrayElement(idx: number, node: Node, error: InlinedBranchProfile): Object;
}