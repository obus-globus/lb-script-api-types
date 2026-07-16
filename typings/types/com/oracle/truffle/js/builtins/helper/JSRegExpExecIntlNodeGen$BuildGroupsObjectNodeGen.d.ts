import type { Node } from '../../../../../../com/oracle/truffle/api/nodes/Node.d.ts'
import type { JSRegExpExecIntlNode$BuildGroupsObjectNode } from '../../../../../../com/oracle/truffle/js/builtins/helper/JSRegExpExecIntlNode$BuildGroupsObjectNode.d.ts'
import type { JSRegExpExecIntlNodeGen$BuildGroupsObjectNodeGen$CachedGroupsFactoryData } from '../../../../../../com/oracle/truffle/js/builtins/helper/JSRegExpExecIntlNodeGen$BuildGroupsObjectNodeGen$CachedGroupsFactoryData.d.ts'
import type { JSRegExpObject } from '../../../../../../com/oracle/truffle/js/runtime/builtins/JSRegExpObject.d.ts'
import type { JSDynamicObject } from '../../../../../../com/oracle/truffle/js/runtime/objects/JSDynamicObject.d.ts'
import type { Object } from '../../../../../../java/lang/Object.d.ts'
export class JSRegExpExecIntlNodeGen$BuildGroupsObjectNodeGen extends JSRegExpExecIntlNode$BuildGroupsObjectNode {
    static create(): JSRegExpExecIntlNode$BuildGroupsObjectNode;
    static reportLoopCount(paramnode: Node, paramcount: number): void;
    private constructor()
    // private cachedGroupsFactory_cache: JSRegExpExecIntlNodeGen$BuildGroupsObjectNodeGen$CachedGroupsFactoryData;
    // private state_0_: number;
    execute(arg0Value: JSRegExpObject, arg1Value: Object, arg2Value: Object, arg3Value: boolean): JSDynamicObject;
    // private executeAndSpecialize(arg0Value: JSRegExpObject, arg1Value: Object, arg2Value: Object, arg3Value: boolean): JSDynamicObject;
}