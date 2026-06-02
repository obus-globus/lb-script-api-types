import type { Node } from '../../../../../../com/oracle/truffle/api/nodes/Node.d.ts'
import type { InlinedConditionProfile } from '../../../../../../com/oracle/truffle/api/profiles/InlinedConditionProfile.d.ts'
import type { CachedSetPropertyNode } from '../../../../../../com/oracle/truffle/js/nodes/access/CachedSetPropertyNode.d.ts'
import type { IsArrayNode } from '../../../../../../com/oracle/truffle/js/nodes/access/IsArrayNode.d.ts'
import type { WriteElementNode } from '../../../../../../com/oracle/truffle/js/nodes/access/WriteElementNode.d.ts'
import type { WriteElementNode$ArrayWriteElementCacheDispatchNode } from '../../../../../../com/oracle/truffle/js/nodes/access/WriteElementNode$ArrayWriteElementCacheDispatchNode.d.ts'
import type { WriteElementNode$WriteElementTypeCacheNode } from '../../../../../../com/oracle/truffle/js/nodes/access/WriteElementNode$WriteElementTypeCacheNode.d.ts'
import type { ToArrayIndexNode } from '../../../../../../com/oracle/truffle/js/nodes/cast/ToArrayIndexNode.d.ts'
import type { JSDynamicObject } from '../../../../../../com/oracle/truffle/js/runtime/objects/JSDynamicObject.d.ts'
import type { JSClassProfile } from '../../../../../../com/oracle/truffle/js/runtime/util/JSClassProfile.d.ts'
import type { Object } from '../../../../../../java/lang/Object.d.ts'
export abstract class WriteElementNode$JSObjectWriteElementTypeCacheNode extends WriteElementNode$WriteElementTypeCacheNode {
    static reportLoopCount(paramnode: Node, paramcount: number): void;
    static reportLoopCount(paramnode: Node, paramcount: number): void;
    constructor()
    // private isArrayNode: IsArrayNode;
    // private jsclassProfile: JSClassProfile;
    // private setPropertyCachedNode: CachedSetPropertyNode;
    // private toArrayIndexNode: ToArrayIndexNode;
    doJSObject(target: Object, index: Object, value: Object, receiver: Object, root: WriteElementNode, arrayIf: InlinedConditionProfile, intOrStringIndexIf: InlinedConditionProfile, arrayDispatch: WriteElementNode$ArrayWriteElementCacheDispatchNode): void;
    doJSObjectIntegerIndex(target: Object, index: number, value: Object, receiver: Object, root: WriteElementNode, arrayIf: InlinedConditionProfile, intOrStringIndexIf: InlinedConditionProfile, arrayDispatch: WriteElementNode$ArrayWriteElementCacheDispatchNode): void;
    // private initToArrayIndexNode(): ToArrayIndexNode;
    // private setCachedProperty(targetObject: JSDynamicObject, index: Object, value: Object, receiver: Object, root: WriteElementNode): void;
    // private setPropertyGeneric(targetObject: JSDynamicObject, index: Object, value: Object, receiver: Object, root: WriteElementNode): void;
    // private setPropertyGenericEvaluatedIndex(targetObject: JSDynamicObject, index: number, value: Object, receiver: Object, root: WriteElementNode): void;
    // private setPropertyGenericEvaluatedStringOrSymbol(targetObject: JSDynamicObject, key: Object, value: Object, receiver: Object, root: WriteElementNode): void;
    // private toArrayIndex(index: Object): Object;
}