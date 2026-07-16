import type { Node } from '../../../../../../com/oracle/truffle/api/nodes/Node.d.ts'
import type { InlinedConditionProfile } from '../../../../../../com/oracle/truffle/api/profiles/InlinedConditionProfile.d.ts'
import type { ReadElementNode$ArrayClassGuardCachedArrayReadElementCacheNode } from '../../../../../../com/oracle/truffle/js/nodes/access/ReadElementNode$ArrayClassGuardCachedArrayReadElementCacheNode.d.ts'
import type { JSContext } from '../../../../../../com/oracle/truffle/js/runtime/JSContext.d.ts'
import type { HolesDoubleArray } from '../../../../../../com/oracle/truffle/js/runtime/array/dyn/HolesDoubleArray.d.ts'
import type { JSDynamicObject } from '../../../../../../com/oracle/truffle/js/runtime/objects/JSDynamicObject.d.ts'
import type { Object } from '../../../../../../java/lang/Object.d.ts'
export abstract class ReadElementNode$HolesDoubleArrayReadElementCacheNode extends ReadElementNode$ArrayClassGuardCachedArrayReadElementCacheNode {
    static reportLoopCount(paramnode: Node, paramcount: number): void;
    constructor()
    doHolesDoubleArray(target: JSDynamicObject, holesDoubleArray: HolesDoubleArray, index: number, receiver: Object, defaultValue: Object, context: JSContext, inBounds: InlinedConditionProfile, notHoleValue: InlinedConditionProfile, needGetProperty: InlinedConditionProfile): Object;
}