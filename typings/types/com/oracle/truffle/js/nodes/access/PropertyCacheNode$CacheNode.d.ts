import type { Node } from '../../../../../../com/oracle/truffle/api/nodes/Node.d.ts'
import type { JavaScriptBaseNode } from '../../../../../../com/oracle/truffle/js/nodes/JavaScriptBaseNode.d.ts'
import type { PropertyCacheNode$ReceiverCheckNode } from '../../../../../../com/oracle/truffle/js/nodes/access/PropertyCacheNode$ReceiverCheckNode.d.ts'
import type { JSDynamicObject } from '../../../../../../com/oracle/truffle/js/runtime/objects/JSDynamicObject.d.ts'
import type { Object } from '../../../../../../java/lang/Object.d.ts'
export abstract class PropertyCacheNode$CacheNode<T extends PropertyCacheNode$CacheNode<T>> extends JavaScriptBaseNode {
    static reportLoopCount(paramnode: Node, paramcount: number): void;
    constructor(receiverCheck: PropertyCacheNode$ReceiverCheckNode)
    constructor(receiverCheck: PropertyCacheNode$ReceiverCheckNode, specializationFlags: number)
    // private receiverCheck: PropertyCacheNode$ReceiverCheckNode;
    // private specializationFlags: number;
    accepts(thisObj: Object): boolean;
    acceptsValue(value: Object): boolean;
    clearExpectedObject(): void;
    debugString(): string;
    getExpectedObject(): JSDynamicObject;
    getNext(): T;
    isConstantObjectSpecialization(): boolean;
    isFinalSpecialization(): boolean;
    isGeneric(): boolean;
    isSimpleShapeCheck(): boolean;
    isSingleRealm(): boolean;
    isValid(): boolean;
    isValidFinalAssumption(): boolean;
    setNext(next: T): void;
    sweep(): boolean;
    withNext(newNext: T): T;
}