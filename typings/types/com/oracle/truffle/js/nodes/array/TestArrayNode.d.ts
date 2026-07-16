import type { Node } from '../../../../../../com/oracle/truffle/api/nodes/Node.d.ts'
import type { JavaScriptBaseNode } from '../../../../../../com/oracle/truffle/js/nodes/JavaScriptBaseNode.d.ts'
import type { TestArrayNode$Test } from '../../../../../../com/oracle/truffle/js/nodes/array/TestArrayNode$Test.d.ts'
import type { ScriptArray } from '../../../../../../com/oracle/truffle/js/runtime/array/ScriptArray.d.ts'
import type { JSDynamicObject } from '../../../../../../com/oracle/truffle/js/runtime/objects/JSDynamicObject.d.ts'
export abstract class TestArrayNode extends JavaScriptBaseNode {
    static createHasHoles(): TestArrayNode;
    static createHasHolesOrUnused(): TestArrayNode;
    static createIsSealed(): TestArrayNode;
    static reportLoopCount(paramnode: Node, paramcount: number): void;
    constructor(test: TestArrayNode$Test)
    // private test: TestArrayNode$Test;
    doCached(target: JSDynamicObject, arrayType: ScriptArray): boolean;
    doUncached(target: JSDynamicObject): boolean;
    executeBoolean(target: JSDynamicObject): boolean;
}