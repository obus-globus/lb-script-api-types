import type { Node } from '../../../../../com/oracle/truffle/api/nodes/Node.d.ts'
import type { TruffleString } from '../../../../../com/oracle/truffle/api/strings/TruffleString.d.ts'
import type { RegExpPrototypeBuiltins$JSRegExpReplaceNode } from '../../../../../com/oracle/truffle/js/builtins/RegExpPrototypeBuiltins$JSRegExpReplaceNode.d.ts'
import type { ReplaceStringParser$Token } from '../../../../../com/oracle/truffle/js/builtins/helper/ReplaceStringParser$Token.d.ts'
import type { JavaScriptBaseNode } from '../../../../../com/oracle/truffle/js/nodes/JavaScriptBaseNode.d.ts'
import type { JSContext } from '../../../../../com/oracle/truffle/js/runtime/JSContext.d.ts'
import type { JSRegExpObject } from '../../../../../com/oracle/truffle/js/runtime/builtins/JSRegExpObject.d.ts'
export abstract class RegExpPrototypeBuiltins$JSRegExpReplaceNode$ReplaceInternalNode extends JavaScriptBaseNode {
    static reportLoopCount(paramnode: Node, paramcount: number): void;
    static reportLoopCount(paramnode: Node, paramcount: number): void;
    constructor()
    execute(rx: JSRegExpObject, s: TruffleString, replaceString: TruffleString, parsedWithNamedCG: ReplaceStringParser$Token[], parsedWithoutNamedCG: ReplaceStringParser$Token[], context: JSContext, parent: RegExpPrototypeBuiltins$JSRegExpReplaceNode): TruffleString;
}