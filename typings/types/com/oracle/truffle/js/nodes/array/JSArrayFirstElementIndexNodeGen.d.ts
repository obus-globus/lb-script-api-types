import type { Node } from '../../../../../../com/oracle/truffle/api/nodes/Node.d.ts'
import type { JSHasPropertyNode } from '../../../../../../com/oracle/truffle/js/nodes/access/JSHasPropertyNode.d.ts'
import type { JSArrayFirstElementIndexNode } from '../../../../../../com/oracle/truffle/js/nodes/array/JSArrayFirstElementIndexNode.d.ts'
import type { JSArrayFirstElementIndexNodeGen$WithHolesCachedData } from '../../../../../../com/oracle/truffle/js/nodes/array/JSArrayFirstElementIndexNodeGen$WithHolesCachedData.d.ts'
import type { JSArrayFirstElementIndexNodeGen$WithoutHolesCachedData } from '../../../../../../com/oracle/truffle/js/nodes/array/JSArrayFirstElementIndexNodeGen$WithoutHolesCachedData.d.ts'
import type { JSArrayNextElementIndexNode } from '../../../../../../com/oracle/truffle/js/nodes/array/JSArrayNextElementIndexNode.d.ts'
import type { JSContext } from '../../../../../../com/oracle/truffle/js/runtime/JSContext.d.ts'
import type { Class } from '../../../../../../java/lang/Class.d.ts'
import type { Object } from '../../../../../../java/lang/Object.d.ts'
export class JSArrayFirstElementIndexNodeGen extends JSArrayFirstElementIndexNode {
    static create(paramcontext: JSContext): JSArrayFirstElementIndexNode;
    static reportLoopCount(paramnode: Node, paramcount: number): void;
    private constructor(context: JSContext)
    // private arrayTypeProfile_field1_: Class<Object>;
    // private hasPropertyNode: JSHasPropertyNode;
    // private nextElementIndexNode: JSArrayNextElementIndexNode;
    // private state_0_: number;
    // private withHolesCached_cache: JSArrayFirstElementIndexNodeGen$WithHolesCachedData;
    // private withoutHolesCached_cache: JSArrayFirstElementIndexNodeGen$WithoutHolesCachedData;
    // private executeAndSpecialize(arg0Value: Object, arg1Value: number, arg2Value: boolean): number;
    executeLong(object: Object, length: number): number;
    executeLong(arg0Value: Object, arg1Value: number, arg2Value: boolean): number;
}