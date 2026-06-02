import type { Node } from '../../../../../../com/oracle/truffle/api/nodes/Node.d.ts'
import type { CompileRegexNode } from '../../../../../../com/oracle/truffle/js/nodes/CompileRegexNode.d.ts'
import type { JSToRegExpNode } from '../../../../../../com/oracle/truffle/js/nodes/cast/JSToRegExpNode.d.ts'
import type { JSToStringNode } from '../../../../../../com/oracle/truffle/js/nodes/cast/JSToStringNode.d.ts'
import type { JSContext } from '../../../../../../com/oracle/truffle/js/runtime/JSContext.d.ts'
import type { JSRegExpObject } from '../../../../../../com/oracle/truffle/js/runtime/builtins/JSRegExpObject.d.ts'
import type { Object } from '../../../../../../java/lang/Object.d.ts'
export class JSToRegExpNodeGen extends JSToRegExpNode {
    static create(paramcontext: JSContext): JSToRegExpNode;
    static reportLoopCount(paramnode: Node, paramcount: number): void;
    static reportLoopCount(paramnode: Node, paramcount: number): void;
    private constructor(context: JSContext)
    // private createRegExp_compileRegexNode_: CompileRegexNode;
    // private createRegExp_toStringNode_: JSToStringNode;
    // private state_0_: number;
    execute(arg0Value: Object): JSRegExpObject;
    // private executeAndSpecialize(arg0Value: Object): JSRegExpObject;
}