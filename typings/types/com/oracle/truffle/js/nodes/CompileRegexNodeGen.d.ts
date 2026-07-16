import type { Node } from '../../../../../com/oracle/truffle/api/nodes/Node.d.ts'
import type { TruffleString$EqualNode } from '../../../../../com/oracle/truffle/api/strings/TruffleString$EqualNode.d.ts'
import type { TruffleString$ToJavaStringNode } from '../../../../../com/oracle/truffle/api/strings/TruffleString$ToJavaStringNode.d.ts'
import type { CompileRegexNode } from '../../../../../com/oracle/truffle/js/nodes/CompileRegexNode.d.ts'
import type { CompileRegexNodeGen$GetCachedData } from '../../../../../com/oracle/truffle/js/nodes/CompileRegexNodeGen$GetCachedData.d.ts'
import type { JSContext } from '../../../../../com/oracle/truffle/js/runtime/JSContext.d.ts'
import type { Object } from '../../../../../java/lang/Object.d.ts'
export class CompileRegexNodeGen extends CompileRegexNode {
    static create(paramcontext: JSContext): CompileRegexNode;
    static reportLoopCount(paramnode: Node, paramcount: number): void;
    private constructor(context: JSContext)
    // private equalsNode: TruffleString$EqualNode;
    // private equalsNode2: TruffleString$EqualNode;
    // private getCached_cache: CompileRegexNodeGen$GetCachedData;
    // private state_0_: number;
    // private toJavaString: TruffleString$ToJavaStringNode;
    // private checkForPolymorphicSpecialize(oldState_0: number): void;
    // private executeAndSpecialize(arg0Value: Object, arg1Value: Object): Object;
    executeCompile(arg0Value: Object, arg1Value: Object): Object;
}