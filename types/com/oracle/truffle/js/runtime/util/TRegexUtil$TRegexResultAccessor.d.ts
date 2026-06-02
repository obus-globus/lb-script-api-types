import type { Node } from '../../../../../../com/oracle/truffle/api/nodes/Node.d.ts'
import type { TRegexUtil$InteropReadBooleanMemberNode } from '../../../../../../com/oracle/truffle/js/runtime/util/TRegexUtil$InteropReadBooleanMemberNode.d.ts'
import type { TRegexUtil$InteropReadIntMemberNode } from '../../../../../../com/oracle/truffle/js/runtime/util/TRegexUtil$InteropReadIntMemberNode.d.ts'
import type { TRegexUtil$InvokeGetGroupBoundariesMethodNode } from '../../../../../../com/oracle/truffle/js/runtime/util/TRegexUtil$InvokeGetGroupBoundariesMethodNode.d.ts'
import type { Object } from '../../../../../../java/lang/Object.d.ts'
export class TRegexUtil$TRegexResultAccessor extends Object {
    static captureGroupEnd(paramresult: Object, paramgroupNumber: number, paramnode: Node, paramgetEnd: TRegexUtil$InvokeGetGroupBoundariesMethodNode): number;
    static captureGroupLength(paramregexResultObject: Object, paramgroupNumber: number, paramnode: Node, paramgetStart: TRegexUtil$InvokeGetGroupBoundariesMethodNode, paramgetEnd: TRegexUtil$InvokeGetGroupBoundariesMethodNode): number;
    static captureGroupStart(paramresult: Object, paramgroupNumber: number, paramnode: Node, paramgetStart: TRegexUtil$InvokeGetGroupBoundariesMethodNode): number;
    static groupCount(paramcompiledRegex: Object, paramnode: Node, paramreadGroupCount: TRegexUtil$InteropReadIntMemberNode): number;
    static isMatch(paramresult: Object, paramnode: Node, paramreadIsMatch: TRegexUtil$InteropReadBooleanMemberNode): boolean;
    private constructor()
}