import type { Node } from '../../../../../../com/oracle/truffle/api/nodes/Node.d.ts'
import type { JSHasPropertyNode } from '../../../../../../com/oracle/truffle/js/nodes/access/JSHasPropertyNode.d.ts'
import type { JSArrayPreviousElementIndexNode } from '../../../../../../com/oracle/truffle/js/nodes/array/JSArrayPreviousElementIndexNode.d.ts'
import type { JSArrayPreviousElementIndexNodeGen$PreviousWithHolesCachedData } from '../../../../../../com/oracle/truffle/js/nodes/array/JSArrayPreviousElementIndexNodeGen$PreviousWithHolesCachedData.d.ts'
import type { JSArrayPreviousElementIndexNodeGen$WithoutHolesCachedData } from '../../../../../../com/oracle/truffle/js/nodes/array/JSArrayPreviousElementIndexNodeGen$WithoutHolesCachedData.d.ts'
import type { JSContext } from '../../../../../../com/oracle/truffle/js/runtime/JSContext.d.ts'
import type { Class } from '../../../../../../java/lang/Class.d.ts'
import type { Object } from '../../../../../../java/lang/Object.d.ts'
export class JSArrayPreviousElementIndexNodeGen extends JSArrayPreviousElementIndexNode {
    static create(paramcontext: JSContext): JSArrayPreviousElementIndexNode;
    static reportLoopCount(paramnode: Node, paramcount: number): void;
    static reportLoopCount(paramnode: Node, paramcount: number): void;
    private constructor(context: JSContext)
    // private hasPropertyNode: JSHasPropertyNode;
    // private previousElementIndexNode: JSArrayPreviousElementIndexNode;
    // private previousWithHolesCached_cache: JSArrayPreviousElementIndexNodeGen$PreviousWithHolesCachedData;
    // private previousWithHolesUncached_arrayTypeProfile__field1_: Class<Object>;
    // private state_0_: number;
    // private withoutHolesCached_cache: JSArrayPreviousElementIndexNodeGen$WithoutHolesCachedData;
    // private executeAndSpecialize(arg0Value: Object, arg1Value: number, arg2Value: boolean): number;
    executeLong(object: Object, currentIndex: number): number;
    executeLong(arg0Value: Object, arg1Value: number, arg2Value: boolean): number;
}