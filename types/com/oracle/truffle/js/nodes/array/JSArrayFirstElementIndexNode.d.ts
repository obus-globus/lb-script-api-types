import type { Node } from '../../../../../../com/oracle/truffle/api/nodes/Node.d.ts'
import type { InlinedConditionProfile } from '../../../../../../com/oracle/truffle/api/profiles/InlinedConditionProfile.d.ts'
import type { InlinedExactClassProfile } from '../../../../../../com/oracle/truffle/api/profiles/InlinedExactClassProfile.d.ts'
import type { JSHasPropertyNode } from '../../../../../../com/oracle/truffle/js/nodes/access/JSHasPropertyNode.d.ts'
import type { JSArrayElementIndexNode } from '../../../../../../com/oracle/truffle/js/nodes/array/JSArrayElementIndexNode.d.ts'
import type { JSArrayNextElementIndexNode } from '../../../../../../com/oracle/truffle/js/nodes/array/JSArrayNextElementIndexNode.d.ts'
import type { JSContext } from '../../../../../../com/oracle/truffle/js/runtime/JSContext.d.ts'
import type { ScriptArray } from '../../../../../../com/oracle/truffle/js/runtime/array/ScriptArray.d.ts'
import type { JSDynamicObject } from '../../../../../../com/oracle/truffle/js/runtime/objects/JSDynamicObject.d.ts'
import type { Object } from '../../../../../../java/lang/Object.d.ts'
export abstract class JSArrayFirstElementIndexNode extends JSArrayElementIndexNode {
    static create(paramcontext: JSContext): JSArrayFirstElementIndexNode;
    static reportLoopCount(paramnode: Node, paramcount: number): void;
    static reportLoopCount(paramnode: Node, paramcount: number): void;
    constructor(context: JSContext)
    doObject(object: Object, length: number, isArray: boolean, hasPropertyNode: JSHasPropertyNode): number;
    doWithHolesCached(object: JSDynamicObject, length: number, isArray: boolean, cachedArrayType: ScriptArray, node: Node, nextElementIndexNode: JSArrayNextElementIndexNode, isZero: InlinedConditionProfile): number;
    doWithHolesUncached(object: JSDynamicObject, length: number, isArray: boolean, nextElementIndexNode: JSArrayNextElementIndexNode, isZero: InlinedConditionProfile, arrayTypeProfile: InlinedExactClassProfile): number;
    doWithoutHolesCached(object: JSDynamicObject, length: number, isArray: boolean, cachedArrayType: ScriptArray): number;
    doWithoutHolesUncached(object: JSDynamicObject, length: number, isArray: boolean): number;
    executeLong(object: Object, length: number): number;
    executeLong(object: Object, length: number, isArray: boolean): number;
    firstObjectViaEnumeration(object: JSDynamicObject, length: number, isArray: boolean, hasPropertyNode: JSHasPropertyNode): number;
    firstObjectViaFullEnumeration(object: JSDynamicObject, length: number, isArray: boolean, hasPropertyNode: JSHasPropertyNode): number;
    // private holesArrayImpl(object: JSDynamicObject, length: number, array: ScriptArray, node: Node, nextElementIndexNode: JSArrayNextElementIndexNode, isZero: InlinedConditionProfile): number;
}