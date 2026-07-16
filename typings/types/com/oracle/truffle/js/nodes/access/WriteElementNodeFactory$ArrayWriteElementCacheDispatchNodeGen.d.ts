import type { InlineSupport$InlineTarget } from '../../../../../../com/oracle/truffle/api/dsl/InlineSupport$InlineTarget.d.ts'
import type { Node } from '../../../../../../com/oracle/truffle/api/nodes/Node.d.ts'
import type { WriteElementNode } from '../../../../../../com/oracle/truffle/js/nodes/access/WriteElementNode.d.ts'
import type { WriteElementNode$ArrayWriteElementCacheDispatchNode } from '../../../../../../com/oracle/truffle/js/nodes/access/WriteElementNode$ArrayWriteElementCacheDispatchNode.d.ts'
import type { WriteElementNodeFactory$ArrayWriteElementCacheDispatchNodeGen$DispatchData } from '../../../../../../com/oracle/truffle/js/nodes/access/WriteElementNodeFactory$ArrayWriteElementCacheDispatchNodeGen$DispatchData.d.ts'
import type { ScriptArray } from '../../../../../../com/oracle/truffle/js/runtime/array/ScriptArray.d.ts'
import type { JSDynamicObject } from '../../../../../../com/oracle/truffle/js/runtime/objects/JSDynamicObject.d.ts'
import type { Object } from '../../../../../../java/lang/Object.d.ts'
export class WriteElementNodeFactory$ArrayWriteElementCacheDispatchNodeGen extends WriteElementNode$ArrayWriteElementCacheDispatchNode {
    static create(): WriteElementNode$ArrayWriteElementCacheDispatchNode;
    static inline(paramtarget: InlineSupport$InlineTarget): WriteElementNode$ArrayWriteElementCacheDispatchNode;
    static reportLoopCount(paramnode: Node, paramcount: number): void;
    private constructor()
    // private dispatch_cache: WriteElementNodeFactory$ArrayWriteElementCacheDispatchNodeGen$DispatchData;
    // private state_0_: number;
    // private executeAndSpecialize(arg0Value: Node, arg1Value: JSDynamicObject, arg2Value: ScriptArray, arg3Value: number, arg4Value: Object, arg5Value: WriteElementNode): boolean;
    executeSetArray(arg0Value: Node, arg1Value: JSDynamicObject, arg2Value: ScriptArray, arg3Value: number, arg4Value: Object, arg5Value: WriteElementNode): boolean;
}