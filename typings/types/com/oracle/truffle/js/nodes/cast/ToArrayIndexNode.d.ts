import type { InteropLibrary } from '../../../../../../com/oracle/truffle/api/interop/InteropLibrary.d.ts'
import type { Node } from '../../../../../../com/oracle/truffle/api/nodes/Node.d.ts'
import type { InlinedBranchProfile } from '../../../../../../com/oracle/truffle/api/profiles/InlinedBranchProfile.d.ts'
import type { InlinedConditionProfile } from '../../../../../../com/oracle/truffle/api/profiles/InlinedConditionProfile.d.ts'
import type { TruffleString } from '../../../../../../com/oracle/truffle/api/strings/TruffleString.d.ts'
import type { TruffleString$ReadCharUTF16Node } from '../../../../../../com/oracle/truffle/api/strings/TruffleString$ReadCharUTF16Node.d.ts'
import type { JavaScriptBaseNode } from '../../../../../../com/oracle/truffle/js/nodes/JavaScriptBaseNode.d.ts'
import type { JSToPropertyKeyNode } from '../../../../../../com/oracle/truffle/js/nodes/cast/JSToPropertyKeyNode.d.ts'
import type { ToArrayIndexNoToPropertyKeyNode } from '../../../../../../com/oracle/truffle/js/nodes/cast/ToArrayIndexNoToPropertyKeyNode.d.ts'
import type { Object } from '../../../../../../java/lang/Object.d.ts'
export abstract class ToArrayIndexNode extends JavaScriptBaseNode {
    static create(): ToArrayIndexNode;
    static createNoStringToIndex(): ToArrayIndexNode;
    static reportLoopCount(paramnode: Node, paramcount: number): void;
    constructor(convertStringToIndex: boolean)
    // private convertStringToIndex: boolean;
    convertFromString(index: TruffleString, startsWithDigitBranch: InlinedConditionProfile, isArrayIndexBranch: InlinedBranchProfile, stringReadNode: TruffleString$ReadCharUTF16Node): Object;
    doNonArrayIndex(value: Object, node: Node, interop: InteropLibrary, toPropertyKey: JSToPropertyKeyNode, propertyKeyToArrayIndex: ToArrayIndexNoToPropertyKeyNode): Object;
    execute(value: Object): Object;
    executeLong(operand: Object): number;
}