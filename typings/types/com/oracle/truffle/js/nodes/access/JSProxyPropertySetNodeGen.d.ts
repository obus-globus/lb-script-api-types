import type { Node } from '../../../../../../com/oracle/truffle/api/nodes/Node.d.ts'
import type { JSProxyPropertySetNode } from '../../../../../../com/oracle/truffle/js/nodes/access/JSProxyPropertySetNode.d.ts'
import type { JSToPropertyKeyNode } from '../../../../../../com/oracle/truffle/js/nodes/cast/JSToPropertyKeyNode.d.ts'
import type { JSContext } from '../../../../../../com/oracle/truffle/js/runtime/JSContext.d.ts'
import type { JSClassProfile } from '../../../../../../com/oracle/truffle/js/runtime/util/JSClassProfile.d.ts'
import type { Object } from '../../../../../../java/lang/Object.d.ts'
export class JSProxyPropertySetNodeGen extends JSProxyPropertySetNode {
    static create(paramcontext: JSContext, paramisStrict: boolean, paramdefineProperty: boolean, paramattributes: number): JSProxyPropertySetNode;
    static reportLoopCount(paramnode: Node, paramcount: number): void;
    static reportLoopCount(paramnode: Node, paramcount: number): void;
    private constructor(context: JSContext, isStrict: boolean, defineProperty: boolean, attributes: number)
    // private state_0_: number;
    // private targetClassProfile_: JSClassProfile;
    // private toPropertyKey_: JSToPropertyKeyNode;
    // private executeAndSpecialize(arg0Value: Object, arg1Value: Object, arg2Value: Object, arg3Value: Object): boolean;
    executeWithReceiverAndValue(arg0Value: Object, arg1Value: Object, arg2Value: Object, arg3Value: Object): boolean;
    executeWithReceiverAndValueInt(arg0Value: Object, arg1Value: Object, arg2Value: number, arg3Value: Object): boolean;
}