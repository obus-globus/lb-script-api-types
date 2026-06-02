import type { Node } from '../../../../../com/oracle/truffle/api/nodes/Node.d.ts'
import type { TruffleString } from '../../../../../com/oracle/truffle/api/strings/TruffleString.d.ts'
import type { RegExpPrototypeBuiltins$JSRegExpSplitNode } from '../../../../../com/oracle/truffle/js/builtins/RegExpPrototypeBuiltins$JSRegExpSplitNode.d.ts'
import type { JavaScriptBaseNode } from '../../../../../com/oracle/truffle/js/nodes/JavaScriptBaseNode.d.ts'
import type { JSContext } from '../../../../../com/oracle/truffle/js/runtime/JSContext.d.ts'
import type { JSArrayObject } from '../../../../../com/oracle/truffle/js/runtime/builtins/JSArrayObject.d.ts'
import type { JSRegExpObject } from '../../../../../com/oracle/truffle/js/runtime/builtins/JSRegExpObject.d.ts'
export abstract class RegExpPrototypeBuiltins$JSRegExpSplitNode$SplitInternalNode extends JavaScriptBaseNode {
    static reportLoopCount(paramnode: Node, paramcount: number): void;
    static reportLoopCount(paramnode: Node, paramcount: number): void;
    constructor()
    execute(rx: JSRegExpObject, str: TruffleString, lim: number, context: JSContext, parent: RegExpPrototypeBuiltins$JSRegExpSplitNode): JSArrayObject;
}