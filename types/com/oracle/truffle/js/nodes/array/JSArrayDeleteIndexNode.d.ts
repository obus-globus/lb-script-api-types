import type { Node } from '../../../../../../com/oracle/truffle/api/nodes/Node.d.ts'
import type { JavaScriptBaseNode } from '../../../../../../com/oracle/truffle/js/nodes/JavaScriptBaseNode.d.ts'
import type { ScriptArray } from '../../../../../../com/oracle/truffle/js/runtime/array/ScriptArray.d.ts'
import type { JSDynamicObject } from '../../../../../../com/oracle/truffle/js/runtime/objects/JSDynamicObject.d.ts'
export abstract class JSArrayDeleteIndexNode extends JavaScriptBaseNode {
    static create(paramstrict: boolean): JSArrayDeleteIndexNode;
    static reportLoopCount(paramnode: Node, paramcount: number): void;
    static reportLoopCount(paramnode: Node, paramcount: number): void;
    constructor(strict: boolean)
    // private strict: boolean;
    doCached(array: JSDynamicObject, arrayType: ScriptArray, index: number, cachedArrayType: ScriptArray): boolean;
    doUncached(array: JSDynamicObject, arrayType: ScriptArray, index: number): boolean;
    execute(array: JSDynamicObject, arrayType: ScriptArray, index: number): boolean;
}