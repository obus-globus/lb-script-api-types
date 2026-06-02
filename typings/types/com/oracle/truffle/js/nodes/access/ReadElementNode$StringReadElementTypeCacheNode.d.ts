import type { Node } from '../../../../../../com/oracle/truffle/api/nodes/Node.d.ts'
import type { InlinedConditionProfile } from '../../../../../../com/oracle/truffle/api/profiles/InlinedConditionProfile.d.ts'
import type { TruffleString } from '../../../../../../com/oracle/truffle/api/strings/TruffleString.d.ts'
import type { TruffleString$SubstringByteIndexNode } from '../../../../../../com/oracle/truffle/api/strings/TruffleString$SubstringByteIndexNode.d.ts'
import type { ReadElementNode } from '../../../../../../com/oracle/truffle/js/nodes/access/ReadElementNode.d.ts'
import type { ReadElementNode$ToPropertyKeyCachedReadElementTypeCacheNode } from '../../../../../../com/oracle/truffle/js/nodes/access/ReadElementNode$ToPropertyKeyCachedReadElementTypeCacheNode.d.ts'
import type { JSToPropertyKeyNode } from '../../../../../../com/oracle/truffle/js/nodes/cast/JSToPropertyKeyNode.d.ts'
import type { ToArrayIndexNoToPropertyKeyNode } from '../../../../../../com/oracle/truffle/js/nodes/cast/ToArrayIndexNoToPropertyKeyNode.d.ts'
import type { Object } from '../../../../../../java/lang/Object.d.ts'
export abstract class ReadElementNode$StringReadElementTypeCacheNode extends ReadElementNode$ToPropertyKeyCachedReadElementTypeCacheNode {
    static reportLoopCount(paramnode: Node, paramcount: number): void;
    static reportLoopCount(paramnode: Node, paramcount: number): void;
    constructor()
    // private substringByteIndexNode: TruffleString$SubstringByteIndexNode;
    doString(target: Object, index: Object, receiver: Object, defaultValue: Object, root: ReadElementNode, stringIndexInBounds: InlinedConditionProfile, toArrayIndexNode: ToArrayIndexNoToPropertyKeyNode, indexToPropertyKeyNode: JSToPropertyKeyNode): Object;
    doStringLongIndex(target: Object, index: number, receiver: Object, defaultValue: Object, root: ReadElementNode, stringIndexInBounds: InlinedConditionProfile): Object;
    // private doStringLongIndexOOB(string: TruffleString, index: number, receiver: Object, defaultValue: Object, root: ReadElementNode): Object;
    // private doStringOOB(string: TruffleString, index: Object, receiver: Object, defaultValue: Object, root: ReadElementNode, indexToPropertyKeyNode: JSToPropertyKeyNode): Object;
    guard(target: Object): boolean;
}