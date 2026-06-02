import type { Node } from '../../../../../../com/oracle/truffle/api/nodes/Node.d.ts'
import type { TruffleString$EqualNode } from '../../../../../../com/oracle/truffle/api/strings/TruffleString$EqualNode.d.ts'
import type { CachedSetPropertyNode } from '../../../../../../com/oracle/truffle/js/nodes/access/CachedSetPropertyNode.d.ts'
import type { CachedSetPropertyNodeGen$ArrayIndexData } from '../../../../../../com/oracle/truffle/js/nodes/access/CachedSetPropertyNodeGen$ArrayIndexData.d.ts'
import type { CachedSetPropertyNodeGen$CachedKeyData } from '../../../../../../com/oracle/truffle/js/nodes/access/CachedSetPropertyNodeGen$CachedKeyData.d.ts'
import type { CachedSetPropertyNodeGen$GenericData } from '../../../../../../com/oracle/truffle/js/nodes/access/CachedSetPropertyNodeGen$GenericData.d.ts'
import type { JSProxyPropertySetNode } from '../../../../../../com/oracle/truffle/js/nodes/access/JSProxyPropertySetNode.d.ts'
import type { JSContext } from '../../../../../../com/oracle/truffle/js/runtime/JSContext.d.ts'
import type { JSDynamicObject } from '../../../../../../com/oracle/truffle/js/runtime/objects/JSDynamicObject.d.ts'
import type { JSClassProfile } from '../../../../../../com/oracle/truffle/js/runtime/util/JSClassProfile.d.ts'
import type { Object } from '../../../../../../java/lang/Object.d.ts'
export class CachedSetPropertyNodeGen extends CachedSetPropertyNode {
    static create(paramcontext: JSContext, paramstrict: boolean, paramsetOwn: boolean, paramsuperProperty: boolean): CachedSetPropertyNode;
    static reportLoopCount(paramnode: Node, paramcount: number): void;
    static reportLoopCount(paramnode: Node, paramcount: number): void;
    private constructor(context: JSContext, strict: boolean, setOwn: boolean, superProperty: boolean)
    // private arrayIndex_cache: CachedSetPropertyNodeGen$ArrayIndexData;
    // private cachedKey_cache: CachedSetPropertyNodeGen$CachedKeyData;
    // private equalsNode: TruffleString$EqualNode;
    // private generic_cache: CachedSetPropertyNodeGen$GenericData;
    // private jsclassProfile: JSClassProfile;
    // private proxy_proxySet_: JSProxyPropertySetNode;
    // private state_0_: number;
    execute(arg0Value: JSDynamicObject, arg1Value: Object, arg2Value: Object, arg3Value: Object): void;
    // private executeAndSpecialize(arg0Value: JSDynamicObject, arg1Value: Object, arg2Value: Object, arg3Value: Object): void;
}