import type { Node } from '../../../../../../com/oracle/truffle/api/nodes/Node.d.ts'
import type { JSArrayDeleteIndexNode } from '../../../../../../com/oracle/truffle/js/nodes/array/JSArrayDeleteIndexNode.d.ts'
import type { JSArrayDeleteIndexNodeGen$CachedData } from '../../../../../../com/oracle/truffle/js/nodes/array/JSArrayDeleteIndexNodeGen$CachedData.d.ts'
import type { ScriptArray } from '../../../../../../com/oracle/truffle/js/runtime/array/ScriptArray.d.ts'
import type { JSDynamicObject } from '../../../../../../com/oracle/truffle/js/runtime/objects/JSDynamicObject.d.ts'
export class JSArrayDeleteIndexNodeGen extends JSArrayDeleteIndexNode {
    static create(paramstrict: boolean): JSArrayDeleteIndexNode;
    static reportLoopCount(paramnode: Node, paramcount: number): void;
    private constructor(strict: boolean)
    // private cached_cache: JSArrayDeleteIndexNodeGen$CachedData;
    // private state_0_: number;
    execute(arg0Value: JSDynamicObject, arg1Value: ScriptArray, arg2Value: number): boolean;
    // private executeAndSpecialize(arg0Value: JSDynamicObject, arg1Value: ScriptArray, arg2Value: number): boolean;
}