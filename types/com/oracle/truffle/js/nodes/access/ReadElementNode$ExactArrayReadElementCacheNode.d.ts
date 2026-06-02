import type { Node } from '../../../../../../com/oracle/truffle/api/nodes/Node.d.ts'
import type { ReadElementNode$ArrayClassGuardCachedArrayReadElementCacheNode } from '../../../../../../com/oracle/truffle/js/nodes/access/ReadElementNode$ArrayClassGuardCachedArrayReadElementCacheNode.d.ts'
import type { JSContext } from '../../../../../../com/oracle/truffle/js/runtime/JSContext.d.ts'
import type { ScriptArray } from '../../../../../../com/oracle/truffle/js/runtime/array/ScriptArray.d.ts'
import type { JSDynamicObject } from '../../../../../../com/oracle/truffle/js/runtime/objects/JSDynamicObject.d.ts'
import type { JSClassProfile } from '../../../../../../com/oracle/truffle/js/runtime/util/JSClassProfile.d.ts'
import type { Object } from '../../../../../../java/lang/Object.d.ts'
export class ReadElementNode$ExactArrayReadElementCacheNode extends ReadElementNode$ArrayClassGuardCachedArrayReadElementCacheNode {
    static reportLoopCount(paramnode: Node, paramcount: number): void;
    static reportLoopCount(paramnode: Node, paramcount: number): void;
    private constructor()
    // private classProfile: JSClassProfile;
    executeArrayGet(target: JSDynamicObject, array: ScriptArray, index: number, receiver: Object, defaultValue: Object, context: JSContext): Object;
}