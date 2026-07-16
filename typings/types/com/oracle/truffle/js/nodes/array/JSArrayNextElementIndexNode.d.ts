import type { Node } from '../../../../../../com/oracle/truffle/api/nodes/Node.d.ts'
import type { InlinedConditionProfile } from '../../../../../../com/oracle/truffle/api/profiles/InlinedConditionProfile.d.ts'
import type { InlinedExactClassProfile } from '../../../../../../com/oracle/truffle/api/profiles/InlinedExactClassProfile.d.ts'
import type { JSHasPropertyNode } from '../../../../../../com/oracle/truffle/js/nodes/access/JSHasPropertyNode.d.ts'
import type { JSArrayElementIndexNode } from '../../../../../../com/oracle/truffle/js/nodes/array/JSArrayElementIndexNode.d.ts'
import type { JSContext } from '../../../../../../com/oracle/truffle/js/runtime/JSContext.d.ts'
import type { ScriptArray } from '../../../../../../com/oracle/truffle/js/runtime/array/ScriptArray.d.ts'
import type { JSDynamicObject } from '../../../../../../com/oracle/truffle/js/runtime/objects/JSDynamicObject.d.ts'
import type { Object } from '../../../../../../java/lang/Object.d.ts'
export abstract class JSArrayNextElementIndexNode extends JSArrayElementIndexNode {
    static create(paramcontext: JSContext): JSArrayNextElementIndexNode;
    static reportLoopCount(paramnode: Node, paramcount: number): void;
    constructor(context: JSContext)
    doWithoutHolesCached(object: JSDynamicObject, currentIndex: number, length: number, isArray: boolean, cachedArrayType: ScriptArray): number;
    doWithoutHolesUncached(object: JSDynamicObject, currentIndex: number, length: number, isArray: boolean): number;
    executeLong(object: Object, currentIndex: number, length: number): number;
    executeLong(object: Object, currentIndex: number, length: number, isArray: boolean): number;
    // private holesArrayImpl(object: JSDynamicObject, currentIndex: number, length: number, array: ScriptArray, node: Node, nextElementIndexNode: JSArrayNextElementIndexNode, isPlusOne: InlinedConditionProfile): number;
    nextObjectViaEnumeration(object: JSDynamicObject, currentIndex: number, length: number, isArray: boolean, hasPropertyNode: JSHasPropertyNode): number;
    nextObjectViaFullEnumeration(object: JSDynamicObject, currentIndex: number, length: number, isArray: boolean, hasPropertyNode: JSHasPropertyNode): number;
    nextObjectViaPolling(object: Object, currentIndex: number, length: number, isArray: boolean, hasPropertyNode: JSHasPropertyNode): number;
    nextWithHolesCached(object: JSDynamicObject, currentIndex: number, length: number, isArray: boolean, cachedArrayType: ScriptArray, node: Node, nextElementIndexNode: JSArrayNextElementIndexNode, isPlusOne: InlinedConditionProfile): number;
    nextWithHolesUncached(object: JSDynamicObject, currentIndex: number, length: number, isArray: boolean, nextElementIndexNode: JSArrayNextElementIndexNode, isPlusOne: InlinedConditionProfile, arrayTypeProfile: InlinedExactClassProfile): number;
}