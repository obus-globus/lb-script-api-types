import type { Frame } from '../../../../../../com/oracle/truffle/api/frame/Frame.d.ts'
import type { TruffleObject } from '../../../../../../com/oracle/truffle/api/interop/TruffleObject.d.ts'
import type { Node } from '../../../../../../com/oracle/truffle/api/nodes/Node.d.ts'
import type { Object } from '../../../../../../java/lang/Object.d.ts'
export class ScopeMembers extends Object implements TruffleObject {
    constructor(frame: Frame, blockOrRoot: Node, functionFrame: Frame)
    // private blockOrRoot: Node;
    // private frame: Frame;
    // private functionFrame: Frame;
    // private members: Object[];
    // private collectAllMembers(): Object[];
    // private getAllMembers(): Object[];
    getArraySize(): number;
    hasArrayElements(): boolean;
    isArrayElementReadable(index: number): boolean;
    readArrayElement(index: number): Object;
}