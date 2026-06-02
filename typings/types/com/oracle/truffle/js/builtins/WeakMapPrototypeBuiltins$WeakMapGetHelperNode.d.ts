import type { Node } from '../../../../../com/oracle/truffle/api/nodes/Node.d.ts'
import type { DynamicObjectLibrary } from '../../../../../com/oracle/truffle/api/object/DynamicObjectLibrary.d.ts'
import type { InlinedConditionProfile } from '../../../../../com/oracle/truffle/api/profiles/InlinedConditionProfile.d.ts'
import type { CanBeHeldWeaklyNode } from '../../../../../com/oracle/truffle/js/builtins/helper/CanBeHeldWeaklyNode.d.ts'
import type { JavaScriptBaseNode } from '../../../../../com/oracle/truffle/js/nodes/JavaScriptBaseNode.d.ts'
import type { Symbol } from '../../../../../com/oracle/truffle/js/runtime/Symbol.d.ts'
import type { JSWeakMapObject } from '../../../../../com/oracle/truffle/js/runtime/builtins/JSWeakMapObject.d.ts'
import type { JSObject } from '../../../../../com/oracle/truffle/js/runtime/objects/JSObject.d.ts'
import type { Object } from '../../../../../java/lang/Object.d.ts'
export abstract class WeakMapPrototypeBuiltins$WeakMapGetHelperNode extends JavaScriptBaseNode {
    static reportLoopCount(paramnode: Node, paramcount: number): void;
    static reportLoopCount(paramnode: Node, paramcount: number): void;
    constructor()
    execute(thisObject: JSWeakMapObject, key: Object): Object;
    getJSObject(thisObj: JSWeakMapObject, key: JSObject, invertedGetter: DynamicObjectLibrary, hasInvertedProfile: InlinedConditionProfile): Object;
    getSymbol(thisObj: JSWeakMapObject, key: Symbol, canBeHeldWeakly: CanBeHeldWeaklyNode, hasInvertedProfile: InlinedConditionProfile): Object;
}