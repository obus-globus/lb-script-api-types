import type { Node } from '../../../../../../com/oracle/truffle/api/nodes/Node.d.ts'
import type { InlinedConditionProfile } from '../../../../../../com/oracle/truffle/api/profiles/InlinedConditionProfile.d.ts'
import type { ReadElementNode$ArrayClassGuardCachedArrayReadElementCacheNode } from '../../../../../../com/oracle/truffle/js/nodes/access/ReadElementNode$ArrayClassGuardCachedArrayReadElementCacheNode.d.ts'
import type { JSContext } from '../../../../../../com/oracle/truffle/js/runtime/JSContext.d.ts'
import type { HolesObjectArray } from '../../../../../../com/oracle/truffle/js/runtime/array/dyn/HolesObjectArray.d.ts'
import type { JSDynamicObject } from '../../../../../../com/oracle/truffle/js/runtime/objects/JSDynamicObject.d.ts'
import type { Object } from '../../../../../../java/lang/Object.d.ts'
export abstract class ReadElementNode$HolesObjectArrayReadElementCacheNode extends ReadElementNode$ArrayClassGuardCachedArrayReadElementCacheNode {
    static reportLoopCount(paramnode: Node, paramcount: number): void;
    constructor()
    doHolesObjectArray(target: JSDynamicObject, holesArray: HolesObjectArray, index: number, receiver: Object, defaultValue: Object, context: JSContext, inBounds: InlinedConditionProfile, notHoleValue: InlinedConditionProfile, needGetProperty: InlinedConditionProfile): Object;
}