import type { Node } from '../../../../../../com/oracle/truffle/api/nodes/Node.d.ts'
import type { JSProxyPropertyGetNode } from '../../../../../../com/oracle/truffle/js/nodes/access/JSProxyPropertyGetNode.d.ts'
import type { JSToPropertyKeyNode } from '../../../../../../com/oracle/truffle/js/nodes/cast/JSToPropertyKeyNode.d.ts'
import type { JSContext } from '../../../../../../com/oracle/truffle/js/runtime/JSContext.d.ts'
import type { JSClassProfile } from '../../../../../../com/oracle/truffle/js/runtime/util/JSClassProfile.d.ts'
import type { Object } from '../../../../../../java/lang/Object.d.ts'
export class JSProxyPropertyGetNodeGen extends JSProxyPropertyGetNode {
    static create(paramcontext: JSContext): JSProxyPropertyGetNode;
    static reportLoopCount(paramnode: Node, paramcount: number): void;
    private constructor(context: JSContext)
    // private state_0_: number;
    // private targetClassProfile_: JSClassProfile;
    // private toPropertyKeyNode_: JSToPropertyKeyNode;
    // private executeAndSpecialize(arg0Value: Object, arg1Value: Object, arg2Value: Object, arg3Value: Object): Object;
    executeWithReceiver(arg0Value: Object, arg1Value: Object, arg2Value: Object, arg3Value: Object): Object;
}