import type { Node } from '../../../../../../com/oracle/truffle/api/nodes/Node.d.ts'
import type { BranchProfile } from '../../../../../../com/oracle/truffle/api/profiles/BranchProfile.d.ts'
import type { JavaScriptBaseNode } from '../../../../../../com/oracle/truffle/js/nodes/JavaScriptBaseNode.d.ts'
import type { JSToNumberNode } from '../../../../../../com/oracle/truffle/js/nodes/cast/JSToNumberNode.d.ts'
import type { Object } from '../../../../../../java/lang/Object.d.ts'
export abstract class ToWebAssemblyIndexOrSizeNode extends JavaScriptBaseNode {
    static create(paramerrorMessagePrefix: string): ToWebAssemblyIndexOrSizeNode;
    static reportLoopCount(paramnode: Node, paramcount: number): void;
    static reportLoopCount(paramnode: Node, paramcount: number): void;
    constructor(errorMessagePrefix: string)
    // private errorBranch: BranchProfile;
    // private errorMessagePrefix: string;
    // private toNumberNode: JSToNumberNode;
    convert(value: Object): number;
    convertInt(intValue: number): number;
    executeInt(value: Object): number;
}