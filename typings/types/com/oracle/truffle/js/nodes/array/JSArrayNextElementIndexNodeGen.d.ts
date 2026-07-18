import type { Node } from '../../../../../../com/oracle/truffle/api/nodes/Node.d.ts'
import type { JSHasPropertyNode } from '../../../../../../com/oracle/truffle/js/nodes/access/JSHasPropertyNode.d.ts'
import type { JSArrayNextElementIndexNode } from '../../../../../../com/oracle/truffle/js/nodes/array/JSArrayNextElementIndexNode.d.ts'
import type { JSArrayNextElementIndexNodeGen$NextWithHolesCachedData } from '../../../../../../com/oracle/truffle/js/nodes/array/JSArrayNextElementIndexNodeGen$NextWithHolesCachedData.d.ts'
import type { JSArrayNextElementIndexNodeGen$WithoutHolesCachedData } from '../../../../../../com/oracle/truffle/js/nodes/array/JSArrayNextElementIndexNodeGen$WithoutHolesCachedData.d.ts'
import type { JSContext } from '../../../../../../com/oracle/truffle/js/runtime/JSContext.d.ts'
import type { Class } from '../../../../../../java/lang/Class.d.ts'
import type { Object } from '../../../../../../java/lang/Object.d.ts'
export class JSArrayNextElementIndexNodeGen extends JSArrayNextElementIndexNode {
    static create(paramcontext: JSContext): JSArrayNextElementIndexNode;
    static reportLoopCount(paramnode: Node, paramcount: number): void;
    private constructor(context: JSContext)
    // private hasPropertyNode: JSHasPropertyNode;
    // private nextElementIndexNode: JSArrayNextElementIndexNode;
    // private nextWithHolesCached_cache: JSArrayNextElementIndexNodeGen$NextWithHolesCachedData;
    // private nextWithHolesUncached_arrayTypeProfile__field1_: Class<Object>;
    // private state_0_: number;
    // private withoutHolesCached_cache: JSArrayNextElementIndexNodeGen$WithoutHolesCachedData;
    // private executeAndSpecialize(arg0Value: Object, arg1Value: number, arg2Value: number, arg3Value: boolean): number;
    executeLong(object: Object, currentIndex: number, length: number): number;
    executeLong(arg0Value: Object, arg1Value: number, arg2Value: number, arg3Value: boolean): number;
}