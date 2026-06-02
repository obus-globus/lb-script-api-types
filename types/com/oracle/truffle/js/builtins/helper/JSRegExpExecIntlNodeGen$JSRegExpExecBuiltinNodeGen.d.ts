import type { Node } from '../../../../../../com/oracle/truffle/api/nodes/Node.d.ts'
import type { TruffleString } from '../../../../../../com/oracle/truffle/api/strings/TruffleString.d.ts'
import type { JSRegExpExecIntlNode$JSRegExpExecBuiltinNode } from '../../../../../../com/oracle/truffle/js/builtins/helper/JSRegExpExecIntlNode$JSRegExpExecBuiltinNode.d.ts'
import type { JSRegExpExecIntlNodeGen$JSRegExpExecBuiltinNodeGen$CachedData } from '../../../../../../com/oracle/truffle/js/builtins/helper/JSRegExpExecIntlNodeGen$JSRegExpExecBuiltinNodeGen$CachedData.d.ts'
import type { JSContext } from '../../../../../../com/oracle/truffle/js/runtime/JSContext.d.ts'
import type { JSRegExpObject } from '../../../../../../com/oracle/truffle/js/runtime/builtins/JSRegExpObject.d.ts'
import type { Object } from '../../../../../../java/lang/Object.d.ts'
export class JSRegExpExecIntlNodeGen$JSRegExpExecBuiltinNodeGen extends JSRegExpExecIntlNode$JSRegExpExecBuiltinNode {
    static create(paramcontext: JSContext): JSRegExpExecIntlNode$JSRegExpExecBuiltinNode;
    static reportLoopCount(paramnode: Node, paramcount: number): void;
    static reportLoopCount(paramnode: Node, paramcount: number): void;
    private constructor(context: JSContext)
    // private cached_cache: JSRegExpExecIntlNodeGen$JSRegExpExecBuiltinNodeGen$CachedData;
    // private getEnd_field1_: Node;
    // private getEnd_field2_: Node;
    // private getStart_field1_: Node;
    // private getStart_field2_: Node;
    // private invokeExec_field1_: Node;
    // private match_field0_: number;
    // private match_field1_: number;
    // private readFlags_field1_: Node;
    // private readGlobal_field1_: Node;
    // private readGlobal_field2_: Node;
    // private readGroupCount_field1_: Node;
    // private readGroupCount_field2_: Node;
    // private readHasIndices_field1_: Node;
    // private readHasIndices_field2_: Node;
    // private readIsMatch_field1_: Node;
    // private readIsMatch_field2_: Node;
    // private readSticky_field1_: Node;
    // private readSticky_field2_: Node;
    // private state_0_: number;
    // private state_1_: number;
    execute(arg0Value: JSRegExpObject, arg1Value: TruffleString): Object;
    // private executeAndSpecialize(arg0Value: JSRegExpObject, arg1Value: TruffleString): Object;
}