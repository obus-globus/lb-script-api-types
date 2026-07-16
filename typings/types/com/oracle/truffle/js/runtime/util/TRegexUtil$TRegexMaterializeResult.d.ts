import type { Node } from '../../../../../../com/oracle/truffle/api/nodes/Node.d.ts'
import type { TruffleString } from '../../../../../../com/oracle/truffle/api/strings/TruffleString.d.ts'
import type { TruffleString$SubstringByteIndexNode } from '../../../../../../com/oracle/truffle/api/strings/TruffleString$SubstringByteIndexNode.d.ts'
import type { JSContext } from '../../../../../../com/oracle/truffle/js/runtime/JSContext.d.ts'
import type { TRegexUtil$InvokeGetGroupBoundariesMethodNode } from '../../../../../../com/oracle/truffle/js/runtime/util/TRegexUtil$InvokeGetGroupBoundariesMethodNode.d.ts'
import type { Object } from '../../../../../../java/lang/Object.d.ts'
export class TRegexUtil$TRegexMaterializeResult extends Object {
    static materializeFull(paramcontext: JSContext, paramregexResult: Object, paramgroupCount: number, paraminput: TruffleString, paramnode: Node, paramsubstringNode: TruffleString$SubstringByteIndexNode, paramgetStart: TRegexUtil$InvokeGetGroupBoundariesMethodNode, paramgetEnd: TRegexUtil$InvokeGetGroupBoundariesMethodNode): Object[];
    static materializeFullUncached(paramregexResult: Object, paramgroupCount: number, paraminput: TruffleString): Object[];
    static materializeGroup(paramcontext: JSContext, paramregexResult: Object, parami: number, paraminput: TruffleString, paramnode: Node, paramsubstringNode: TruffleString$SubstringByteIndexNode, paramgetStart: TRegexUtil$InvokeGetGroupBoundariesMethodNode, paramgetEnd: TRegexUtil$InvokeGetGroupBoundariesMethodNode): Object;
    static materializeGroup(paramcontext: JSContext, paramregexResult: Object, paramindices: number[], paraminput: TruffleString, paramnode: Node, paramsubstringNode: TruffleString$SubstringByteIndexNode, paramgetStart: TRegexUtil$InvokeGetGroupBoundariesMethodNode, paramgetEnd: TRegexUtil$InvokeGetGroupBoundariesMethodNode): Object;
    static materializeGroupUncached(paramregexResult: Object, parami: number, paraminput: TruffleString): Object;
    static materializeGroupUncached(paramregexResult: Object, paramindices: number[], paraminput: TruffleString): Object;
    private constructor()
}