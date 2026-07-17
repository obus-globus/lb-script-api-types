import type { JavaMap } from '../../../../../../JavaMap.d.ts'
import type { Node } from '../../../../../../com/oracle/truffle/api/nodes/Node.d.ts'
import type { GroupByNode } from '../../../../../../com/oracle/truffle/js/nodes/access/GroupByNode.d.ts'
import type { GroupByNodeGen$GroupByData } from '../../../../../../com/oracle/truffle/js/nodes/access/GroupByNodeGen$GroupByData.d.ts'
import type { JSContext } from '../../../../../../com/oracle/truffle/js/runtime/JSContext.d.ts'
import type { Object } from '../../../../../../java/lang/Object.d.ts'
export class GroupByNodeGen extends GroupByNode {
    static create(paramcontext: JSContext, paramtoPropertyKeyCoercion: boolean): GroupByNode;
    static reportLoopCount(paramnode: Node, paramcount: number): void;
    private constructor(context: JSContext, toPropertyKeyCoercion: boolean)
    // private groupBy_cache: GroupByNodeGen$GroupByData;
    // private state_0_: number;
    execute(arg0Value: Object, arg1Value: Object): JavaMap<Object, Object[]>;
    // private executeAndSpecialize(arg0Value: Object, arg1Value: Object): JavaMap<Object, Object[]>;
}