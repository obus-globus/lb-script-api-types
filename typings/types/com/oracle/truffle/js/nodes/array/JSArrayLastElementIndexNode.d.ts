import type { Node } from '../../../../../../com/oracle/truffle/api/nodes/Node.d.ts'
import type { InlinedConditionProfile } from '../../../../../../com/oracle/truffle/api/profiles/InlinedConditionProfile.d.ts'
import type { InlinedExactClassProfile } from '../../../../../../com/oracle/truffle/api/profiles/InlinedExactClassProfile.d.ts'
import type { JSHasPropertyNode } from '../../../../../../com/oracle/truffle/js/nodes/access/JSHasPropertyNode.d.ts'
import type { JSArrayElementIndexNode } from '../../../../../../com/oracle/truffle/js/nodes/array/JSArrayElementIndexNode.d.ts'
import type { JSArrayPreviousElementIndexNode } from '../../../../../../com/oracle/truffle/js/nodes/array/JSArrayPreviousElementIndexNode.d.ts'
import type { JSContext } from '../../../../../../com/oracle/truffle/js/runtime/JSContext.d.ts'
import type { ScriptArray } from '../../../../../../com/oracle/truffle/js/runtime/array/ScriptArray.d.ts'
import type { JSDynamicObject } from '../../../../../../com/oracle/truffle/js/runtime/objects/JSDynamicObject.d.ts'
import type { Object } from '../../../../../../java/lang/Object.d.ts'
export abstract class JSArrayLastElementIndexNode extends JSArrayElementIndexNode {
    static create(paramcontext: JSContext): JSArrayLastElementIndexNode;
    static reportLoopCount(paramnode: Node, paramcount: number): void;
    constructor(context: JSContext)
    doObject(object: Object, length: number, isArray: boolean, hasPropertyNode: JSHasPropertyNode): number;
    doObjectViaEnumeration(object: JSDynamicObject, length: number, isArray: boolean, hasPropertyNode: JSHasPropertyNode): number;
    doObjectViaFullEnumeration(object: JSDynamicObject, length: number, isArray: boolean, hasPropertyNode: JSHasPropertyNode): number;
    doWithHolesCached(object: JSDynamicObject, length: number, isArray: boolean, cachedArrayType: ScriptArray, node: Node, previousElementIndexNode: JSArrayPreviousElementIndexNode, isLengthMinusOne: InlinedConditionProfile): number;
    doWithHolesUncached(object: JSDynamicObject, length: number, isArray: boolean, previousElementIndexNode: JSArrayPreviousElementIndexNode, isLengthMinusOne: InlinedConditionProfile, arrayTypeProfile: InlinedExactClassProfile): number;
    doWithoutHolesCached(object: JSDynamicObject, length: number, isArray: boolean, cachedArrayType: ScriptArray): number;
    doWithoutHolesUncached(object: JSDynamicObject, length: number, isArray: boolean): number;
    executeLong(object: Object, length: number): number;
    executeLong(object: Object, length: number, isArray: boolean): number;
    // private holesArrayImpl(object: JSDynamicObject, length: number, array: ScriptArray, node: Node, previousElementIndexNode: JSArrayPreviousElementIndexNode, isLengthMinusOne: InlinedConditionProfile): number;
}