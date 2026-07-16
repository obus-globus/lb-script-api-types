import type { Node } from '../../../../../../com/oracle/truffle/api/nodes/Node.d.ts'
import type { JavaScriptNode } from '../../../../../../com/oracle/truffle/js/nodes/JavaScriptNode.d.ts'
import type { GetPrototypeNode } from '../../../../../../com/oracle/truffle/js/nodes/access/GetPrototypeNode.d.ts'
import type { GetPrototypeNodeGen$CachedShapeData } from '../../../../../../com/oracle/truffle/js/nodes/access/GetPrototypeNodeGen$CachedShapeData.d.ts'
import type { JSDynamicObject } from '../../../../../../com/oracle/truffle/js/runtime/objects/JSDynamicObject.d.ts'
import type { JSClassProfile } from '../../../../../../com/oracle/truffle/js/runtime/util/JSClassProfile.d.ts'
import type { Object } from '../../../../../../java/lang/Object.d.ts'
export class GetPrototypeNodeGen extends GetPrototypeNode {
    static create(paramobject: JavaScriptNode): JavaScriptNode;
    static create(): GetPrototypeNode;
    static getUncached(): GetPrototypeNode;
    static reportLoopCount(paramnode: Node, paramcount: number): void;
    private constructor()
    // private cachedShape_cache: GetPrototypeNodeGen$CachedShapeData;
    // private proxy_jsclassProfile_: JSClassProfile;
    // private state_0_: number;
    execute(arg0Value: JSDynamicObject): JSDynamicObject;
    execute(arg0Value: Object): JSDynamicObject;
    // private executeAndSpecialize(arg0Value: Object): JSDynamicObject;
}