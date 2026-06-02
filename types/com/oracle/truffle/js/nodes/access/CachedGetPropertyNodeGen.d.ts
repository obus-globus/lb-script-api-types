import type { Node } from '../../../../../../com/oracle/truffle/api/nodes/Node.d.ts'
import type { TruffleString$EqualNode } from '../../../../../../com/oracle/truffle/api/strings/TruffleString$EqualNode.d.ts'
import type { CachedGetPropertyNode } from '../../../../../../com/oracle/truffle/js/nodes/access/CachedGetPropertyNode.d.ts'
import type { CachedGetPropertyNodeGen$ArrayIndexData } from '../../../../../../com/oracle/truffle/js/nodes/access/CachedGetPropertyNodeGen$ArrayIndexData.d.ts'
import type { CachedGetPropertyNodeGen$CachedKeyData } from '../../../../../../com/oracle/truffle/js/nodes/access/CachedGetPropertyNodeGen$CachedKeyData.d.ts'
import type { CachedGetPropertyNodeGen$GenericData } from '../../../../../../com/oracle/truffle/js/nodes/access/CachedGetPropertyNodeGen$GenericData.d.ts'
import type { JSProxyPropertyGetNode } from '../../../../../../com/oracle/truffle/js/nodes/access/JSProxyPropertyGetNode.d.ts'
import type { JSContext } from '../../../../../../com/oracle/truffle/js/runtime/JSContext.d.ts'
import type { JSDynamicObject } from '../../../../../../com/oracle/truffle/js/runtime/objects/JSDynamicObject.d.ts'
import type { JSClassProfile } from '../../../../../../com/oracle/truffle/js/runtime/util/JSClassProfile.d.ts'
import type { Object } from '../../../../../../java/lang/Object.d.ts'
export class CachedGetPropertyNodeGen extends CachedGetPropertyNode {
    static create(paramcontext: JSContext): CachedGetPropertyNode;
    static reportLoopCount(paramnode: Node, paramcount: number): void;
    static reportLoopCount(paramnode: Node, paramcount: number): void;
    private constructor(context: JSContext)
    // private arrayIndex_cache: CachedGetPropertyNodeGen$ArrayIndexData;
    // private cachedKey_cache: CachedGetPropertyNodeGen$CachedKeyData;
    // private equalsNode: TruffleString$EqualNode;
    // private generic_cache: CachedGetPropertyNodeGen$GenericData;
    // private jsclassProfile: JSClassProfile;
    // private proxy_proxyGet_: JSProxyPropertyGetNode;
    // private state_0_: number;
    execute(arg0Value: JSDynamicObject, arg1Value: Object, arg2Value: Object, arg3Value: Object): Object;
    // private executeAndSpecialize(arg0Value: JSDynamicObject, arg1Value: Object, arg2Value: Object, arg3Value: Object): Object;
}