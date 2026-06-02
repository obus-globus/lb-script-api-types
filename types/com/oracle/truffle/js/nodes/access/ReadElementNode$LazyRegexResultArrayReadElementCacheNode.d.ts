import type { Node } from '../../../../../../com/oracle/truffle/api/nodes/Node.d.ts'
import type { DynamicObjectLibrary } from '../../../../../../com/oracle/truffle/api/object/DynamicObjectLibrary.d.ts'
import type { InlinedConditionProfile } from '../../../../../../com/oracle/truffle/api/profiles/InlinedConditionProfile.d.ts'
import type { TruffleString$SubstringByteIndexNode } from '../../../../../../com/oracle/truffle/api/strings/TruffleString$SubstringByteIndexNode.d.ts'
import type { ReadElementNode$ArrayClassGuardCachedArrayReadElementCacheNode } from '../../../../../../com/oracle/truffle/js/nodes/access/ReadElementNode$ArrayClassGuardCachedArrayReadElementCacheNode.d.ts'
import type { JSContext } from '../../../../../../com/oracle/truffle/js/runtime/JSContext.d.ts'
import type { LazyRegexResultArray } from '../../../../../../com/oracle/truffle/js/runtime/array/dyn/LazyRegexResultArray.d.ts'
import type { JSDynamicObject } from '../../../../../../com/oracle/truffle/js/runtime/objects/JSDynamicObject.d.ts'
import type { TRegexUtil$InvokeGetGroupBoundariesMethodNode } from '../../../../../../com/oracle/truffle/js/runtime/util/TRegexUtil$InvokeGetGroupBoundariesMethodNode.d.ts'
import type { Object } from '../../../../../../java/lang/Object.d.ts'
export abstract class ReadElementNode$LazyRegexResultArrayReadElementCacheNode extends ReadElementNode$ArrayClassGuardCachedArrayReadElementCacheNode {
    static reportLoopCount(paramnode: Node, paramcount: number): void;
    static reportLoopCount(paramnode: Node, paramcount: number): void;
    constructor()
    // private getEndNode: TRegexUtil$InvokeGetGroupBoundariesMethodNode;
    // private getStartNode: TRegexUtil$InvokeGetGroupBoundariesMethodNode;
    // private lazyRegexResultNode: DynamicObjectLibrary;
    // private lazyRegexResultOriginalInputNode: DynamicObjectLibrary;
    // private substringNode: TruffleString$SubstringByteIndexNode;
    doLazyRegexResultArray(target: JSDynamicObject, lazyRegexResultArray: LazyRegexResultArray, index: number, receiver: Object, defaultValue: Object, context: JSContext, inBounds: InlinedConditionProfile, needGetProperty: InlinedConditionProfile): Object;
}