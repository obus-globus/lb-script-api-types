import type { Node } from '../../../../../../com/oracle/truffle/api/nodes/Node.d.ts'
import type { TRegexUtil$InteropReadIntMemberNode } from '../../../../../../com/oracle/truffle/js/runtime/util/TRegexUtil$InteropReadIntMemberNode.d.ts'
import type { TRegexUtil$InteropReadMemberNode } from '../../../../../../com/oracle/truffle/js/runtime/util/TRegexUtil$InteropReadMemberNode.d.ts'
import type { TRegexUtil$InteropReadStringMemberNode } from '../../../../../../com/oracle/truffle/js/runtime/util/TRegexUtil$InteropReadStringMemberNode.d.ts'
import type { TRegexUtil$InvokeExecMethodNode } from '../../../../../../com/oracle/truffle/js/runtime/util/TRegexUtil$InvokeExecMethodNode.d.ts'
import type { Object } from '../../../../../../java/lang/Object.d.ts'
export class TRegexUtil$TRegexCompiledRegexAccessor extends Object {
    static exec(paramcompiledRegexObject: Object, paraminput: Object, paramfromIndex: number, paramnode: Node, paraminvokeExec: TRegexUtil$InvokeExecMethodNode): Object;
    static flags(paramcompiledRegexObject: Object, paramnode: Node, paramreadFlags: TRegexUtil$InteropReadMemberNode): Object;
    static groupCount(paramregexResultObject: Object, paramnode: Node, paramreadGroupCount: TRegexUtil$InteropReadIntMemberNode): number;
    static namedCaptureGroups(paramcompiledRegexObject: Object, paramnode: Node, paramreadGroups: TRegexUtil$InteropReadMemberNode): Object;
    static pattern(paramcompiledRegexObject: Object, paramnode: Node, paramreadPattern: TRegexUtil$InteropReadStringMemberNode): Object;
    private constructor()
}