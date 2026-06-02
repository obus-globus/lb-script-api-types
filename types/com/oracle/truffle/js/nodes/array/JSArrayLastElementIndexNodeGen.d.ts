import type { Node } from '../../../../../../com/oracle/truffle/api/nodes/Node.d.ts'
import type { JSHasPropertyNode } from '../../../../../../com/oracle/truffle/js/nodes/access/JSHasPropertyNode.d.ts'
import type { JSArrayLastElementIndexNode } from '../../../../../../com/oracle/truffle/js/nodes/array/JSArrayLastElementIndexNode.d.ts'
import type { JSArrayLastElementIndexNodeGen$WithHolesCachedData } from '../../../../../../com/oracle/truffle/js/nodes/array/JSArrayLastElementIndexNodeGen$WithHolesCachedData.d.ts'
import type { JSArrayLastElementIndexNodeGen$WithoutHolesCachedData } from '../../../../../../com/oracle/truffle/js/nodes/array/JSArrayLastElementIndexNodeGen$WithoutHolesCachedData.d.ts'
import type { JSArrayPreviousElementIndexNode } from '../../../../../../com/oracle/truffle/js/nodes/array/JSArrayPreviousElementIndexNode.d.ts'
import type { JSContext } from '../../../../../../com/oracle/truffle/js/runtime/JSContext.d.ts'
import type { Class } from '../../../../../../java/lang/Class.d.ts'
import type { Object } from '../../../../../../java/lang/Object.d.ts'
export class JSArrayLastElementIndexNodeGen extends JSArrayLastElementIndexNode {
    static create(paramcontext: JSContext): JSArrayLastElementIndexNode;
    static reportLoopCount(paramnode: Node, paramcount: number): void;
    static reportLoopCount(paramnode: Node, paramcount: number): void;
    private constructor(context: JSContext)
    // private hasPropertyNode: JSHasPropertyNode;
    // private previousElementIndexNode: JSArrayPreviousElementIndexNode;
    // private state_0_: number;
    // private withHolesCached_cache: JSArrayLastElementIndexNodeGen$WithHolesCachedData;
    // private withHolesUncached_arrayTypeProfile__field1_: Class<Object>;
    // private withoutHolesCached_cache: JSArrayLastElementIndexNodeGen$WithoutHolesCachedData;
    // private executeAndSpecialize(arg0Value: Object, arg1Value: number, arg2Value: boolean): number;
    executeLong(arg0Value: Object, arg1Value: number, arg2Value: boolean): number;
}