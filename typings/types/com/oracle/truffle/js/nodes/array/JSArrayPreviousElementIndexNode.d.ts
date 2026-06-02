import type { Node } from '../../../../../../com/oracle/truffle/api/nodes/Node.d.ts'
import type { InlinedConditionProfile } from '../../../../../../com/oracle/truffle/api/profiles/InlinedConditionProfile.d.ts'
import type { InlinedExactClassProfile } from '../../../../../../com/oracle/truffle/api/profiles/InlinedExactClassProfile.d.ts'
import type { JSHasPropertyNode } from '../../../../../../com/oracle/truffle/js/nodes/access/JSHasPropertyNode.d.ts'
import type { JSArrayElementIndexNode } from '../../../../../../com/oracle/truffle/js/nodes/array/JSArrayElementIndexNode.d.ts'
import type { JSContext } from '../../../../../../com/oracle/truffle/js/runtime/JSContext.d.ts'
import type { ScriptArray } from '../../../../../../com/oracle/truffle/js/runtime/array/ScriptArray.d.ts'
import type { JSDynamicObject } from '../../../../../../com/oracle/truffle/js/runtime/objects/JSDynamicObject.d.ts'
import type { Object } from '../../../../../../java/lang/Object.d.ts'
export abstract class JSArrayPreviousElementIndexNode extends JSArrayElementIndexNode {
    static create(paramcontext: JSContext): JSArrayPreviousElementIndexNode;
    static reportLoopCount(paramnode: Node, paramcount: number): void;
    static reportLoopCount(paramnode: Node, paramcount: number): void;
    constructor(context: JSContext)
    doWithoutHolesCached(object: JSDynamicObject, currentIndex: number, isArray: boolean, cachedArrayType: ScriptArray): number;
    doWithoutHolesUncached(object: JSDynamicObject, currentIndex: number, isArray: boolean): number;
    executeLong(object: Object, currentIndex: number): number;
    executeLong(object: Object, currentIndex: number, isArray: boolean): number;
    // private holesArrayImpl(object: JSDynamicObject, currentIndex: number, isArray: boolean, array: ScriptArray, node: Node, previousElementIndexNode: JSArrayPreviousElementIndexNode, isMinusOne: InlinedConditionProfile): number;
    previousObjectViaEnumeration(object: JSDynamicObject, currentIndex: number, isArray: boolean, hasPropertyNode: JSHasPropertyNode): number;
    previousObjectViaFullEnumeration(object: JSDynamicObject, currentIndex: number, isArray: boolean, hasPropertyNode: JSHasPropertyNode): number;
    previousObjectViaIteration(object: Object, currentIndex: number, isArray: boolean, hasPropertyNode: JSHasPropertyNode): number;
    previousWithHolesCached(object: JSDynamicObject, currentIndex: number, isArray: boolean, node: Node, cachedArrayType: ScriptArray, previousElementIndexNode: JSArrayPreviousElementIndexNode, isMinusOne: InlinedConditionProfile): number;
    previousWithHolesUncached(object: JSDynamicObject, currentIndex: number, isArray: boolean, previousElementIndexNode: JSArrayPreviousElementIndexNode, isMinusOne: InlinedConditionProfile, arrayTypeProfile: InlinedExactClassProfile): number;
}