import type { Node } from '../../../../../../com/oracle/truffle/api/nodes/Node.d.ts'
import type { TestArrayNode } from '../../../../../../com/oracle/truffle/js/nodes/array/TestArrayNode.d.ts'
import type { TestArrayNode$Test } from '../../../../../../com/oracle/truffle/js/nodes/array/TestArrayNode$Test.d.ts'
import type { TestArrayNodeGen$CachedData } from '../../../../../../com/oracle/truffle/js/nodes/array/TestArrayNodeGen$CachedData.d.ts'
import type { JSDynamicObject } from '../../../../../../com/oracle/truffle/js/runtime/objects/JSDynamicObject.d.ts'
export class TestArrayNodeGen extends TestArrayNode {
    static create(paramtest: TestArrayNode$Test): TestArrayNode;
    static createHasHoles(): TestArrayNode;
    static createHasHolesOrUnused(): TestArrayNode;
    static createIsSealed(): TestArrayNode;
    static reportLoopCount(paramnode: Node, paramcount: number): void;
    private constructor(test: TestArrayNode$Test)
    // private cached_cache: TestArrayNodeGen$CachedData;
    // private state_0_: number;
    // private executeAndSpecialize(arg0Value: JSDynamicObject): boolean;
    executeBoolean(arg0Value: JSDynamicObject): boolean;
}