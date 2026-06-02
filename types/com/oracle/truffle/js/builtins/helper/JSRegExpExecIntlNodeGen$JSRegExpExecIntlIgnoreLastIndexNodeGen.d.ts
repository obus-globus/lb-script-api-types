import type { Node } from '../../../../../../com/oracle/truffle/api/nodes/Node.d.ts'
import type { JSRegExpExecIntlNode$JSRegExpExecIntlIgnoreLastIndexNode } from '../../../../../../com/oracle/truffle/js/builtins/helper/JSRegExpExecIntlNode$JSRegExpExecIntlIgnoreLastIndexNode.d.ts'
import type { JSRegExpExecIntlNodeGen$JSRegExpExecIntlIgnoreLastIndexNodeGen$CachedData } from '../../../../../../com/oracle/truffle/js/builtins/helper/JSRegExpExecIntlNodeGen$JSRegExpExecIntlIgnoreLastIndexNodeGen$CachedData.d.ts'
import type { JSContext } from '../../../../../../com/oracle/truffle/js/runtime/JSContext.d.ts'
import type { JSRegExpObject } from '../../../../../../com/oracle/truffle/js/runtime/builtins/JSRegExpObject.d.ts'
import type { Object } from '../../../../../../java/lang/Object.d.ts'
export class JSRegExpExecIntlNodeGen$JSRegExpExecIntlIgnoreLastIndexNodeGen extends JSRegExpExecIntlNode$JSRegExpExecIntlIgnoreLastIndexNode {
    static create(paramcontext: JSContext, paramdoStaticResultUpdate: boolean): JSRegExpExecIntlNode$JSRegExpExecIntlIgnoreLastIndexNode;
    static reportLoopCount(paramnode: Node, paramcount: number): void;
    static reportLoopCount(paramnode: Node, paramcount: number): void;
    private constructor(context: JSContext, doStaticResultUpdate: boolean)
    // private cached_cache: JSRegExpExecIntlNodeGen$JSRegExpExecIntlIgnoreLastIndexNodeGen$CachedData;
    // private invokeExec_field1_: Node;
    // private readIsMatch_field1_: Node;
    // private readIsMatch_field2_: Node;
    // private state_0_: number;
    execute(arg0Value: JSRegExpObject, arg1Value: Object, arg2Value: number): Object;
    // private executeAndSpecialize(arg0Value: JSRegExpObject, arg1Value: Object, arg2Value: number): Object;
}