import type { InlineSupport$InlineTarget } from '../../../../../../com/oracle/truffle/api/dsl/InlineSupport$InlineTarget.d.ts'
import type { Node } from '../../../../../../com/oracle/truffle/api/nodes/Node.d.ts'
import type { TRegexUtil$InteropReadMemberNode } from '../../../../../../com/oracle/truffle/js/runtime/util/TRegexUtil$InteropReadMemberNode.d.ts'
import type { TRegexUtilFactory$InteropReadMemberNodeGen$Read0Data } from '../../../../../../com/oracle/truffle/js/runtime/util/TRegexUtilFactory$InteropReadMemberNodeGen$Read0Data.d.ts'
import type { Object } from '../../../../../../java/lang/Object.d.ts'
export class TRegexUtilFactory$InteropReadMemberNodeGen extends TRegexUtil$InteropReadMemberNode {
    static create(): TRegexUtil$InteropReadMemberNode;
    static getUncached(): TRegexUtil$InteropReadMemberNode;
    static inline(paramtarget: InlineSupport$InlineTarget): TRegexUtil$InteropReadMemberNode;
    private constructor()
    // private read0_cache: TRegexUtilFactory$InteropReadMemberNodeGen$Read0Data;
    // private state_0_: number;
    execute(arg0Value: Node, arg1Value: Object, arg2Value: string): Object;
    // private executeAndSpecialize(arg0Value: Node, arg1Value: Object, arg2Value: string): Object;
    // private read1Boundary(state_0: number, arg0Value: Node, arg1Value: Object, arg2Value: string): Object;
}