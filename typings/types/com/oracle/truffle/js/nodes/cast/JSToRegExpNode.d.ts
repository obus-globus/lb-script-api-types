import type { Node } from '../../../../../../com/oracle/truffle/api/nodes/Node.d.ts'
import type { CompileRegexNode } from '../../../../../../com/oracle/truffle/js/nodes/CompileRegexNode.d.ts'
import type { JavaScriptBaseNode } from '../../../../../../com/oracle/truffle/js/nodes/JavaScriptBaseNode.d.ts'
import type { JSToStringNode } from '../../../../../../com/oracle/truffle/js/nodes/cast/JSToStringNode.d.ts'
import type { CreateRegExpNode } from '../../../../../../com/oracle/truffle/js/nodes/intl/CreateRegExpNode.d.ts'
import type { JSContext } from '../../../../../../com/oracle/truffle/js/runtime/JSContext.d.ts'
import type { JSRegExpObject } from '../../../../../../com/oracle/truffle/js/runtime/builtins/JSRegExpObject.d.ts'
import type { Object } from '../../../../../../java/lang/Object.d.ts'
export abstract class JSToRegExpNode extends JavaScriptBaseNode {
    static reportLoopCount(paramnode: Node, paramcount: number): void;
    constructor(context: JSContext)
    // private context: JSContext;
    // private createRegExpNode: CreateRegExpNode;
    createRegExp(patternObj: Object, toStringNode: JSToStringNode, compileRegexNode: CompileRegexNode): JSRegExpObject;
    execute(target: Object): JSRegExpObject;
    // private getCreateRegExpNode(): CreateRegExpNode;
    returnRegExp(regExp: JSRegExpObject): JSRegExpObject;
}