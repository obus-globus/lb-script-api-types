import type { Node } from '../../../../../com/oracle/truffle/api/nodes/Node.d.ts'
import type { TruffleString } from '../../../../../com/oracle/truffle/api/strings/TruffleString.d.ts'
import type { TruffleString$EqualNode } from '../../../../../com/oracle/truffle/api/strings/TruffleString$EqualNode.d.ts'
import type { JavaScriptBaseNode } from '../../../../../com/oracle/truffle/js/nodes/JavaScriptBaseNode.d.ts'
export abstract class ObjectPrototypeBuiltins$FormatCacheNode extends JavaScriptBaseNode {
    static create(): ObjectPrototypeBuiltins$FormatCacheNode;
    static reportLoopCount(paramnode: Node, paramcount: number): void;
    static reportLoopCount(paramnode: Node, paramcount: number): void;
    constructor()
    // private equalsNode: TruffleString$EqualNode;
    doCached(name: TruffleString, cachedName: TruffleString, cachedResult: TruffleString): TruffleString;
    doUncached(name: TruffleString): TruffleString;
    execute(name: TruffleString): TruffleString;
}