import type { IndirectCallNode } from '../../../../../../com/oracle/truffle/api/nodes/IndirectCallNode.d.ts'
import type { Node } from '../../../../../../com/oracle/truffle/api/nodes/Node.d.ts'
import type { Source } from '../../../../../../com/oracle/truffle/api/source/Source.d.ts'
import type { JSLoadNode } from '../../../../../../com/oracle/truffle/js/nodes/function/JSLoadNode.d.ts'
import type { JSLoadNodeGen$CachedLoadData } from '../../../../../../com/oracle/truffle/js/nodes/function/JSLoadNodeGen$CachedLoadData.d.ts'
import type { ImportValueNode } from '../../../../../../com/oracle/truffle/js/nodes/interop/ImportValueNode.d.ts'
import type { JSRealm } from '../../../../../../com/oracle/truffle/js/runtime/JSRealm.d.ts'
import type { Object } from '../../../../../../java/lang/Object.d.ts'
export class JSLoadNodeGen extends JSLoadNode {
    static create(): JSLoadNode;
    static reportLoopCount(paramnode: Node, paramcount: number): void;
    static reportLoopCount(paramnode: Node, paramcount: number): void;
    private constructor()
    // private cachedLoad_cache: JSLoadNodeGen$CachedLoadData;
    // private importValue: ImportValueNode;
    // private state_0_: number;
    // private uncachedLoad_callNode_: IndirectCallNode;
    // private executeAndSpecialize(arg0Value: Source, arg1Value: JSRealm): Object;
    executeLoad(arg0Value: Source, arg1Value: JSRealm): Object;
}