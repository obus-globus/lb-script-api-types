import type { Assumption } from '../../../../../../com/oracle/truffle/api/Assumption.d.ts'
import type { Node } from '../../../../../../com/oracle/truffle/api/nodes/Node.d.ts'
import type { Property } from '../../../../../../com/oracle/truffle/api/object/Property.d.ts'
import type { Shape } from '../../../../../../com/oracle/truffle/api/object/Shape.d.ts'
import type { TruffleString } from '../../../../../../com/oracle/truffle/api/strings/TruffleString.d.ts'
import type { JavaScriptBaseNode } from '../../../../../../com/oracle/truffle/js/nodes/JavaScriptBaseNode.d.ts'
import type { PropertyCacheNode$AbstractShapeCheckNode } from '../../../../../../com/oracle/truffle/js/nodes/access/PropertyCacheNode$AbstractShapeCheckNode.d.ts'
import type { PropertyCacheNode$CacheNode } from '../../../../../../com/oracle/truffle/js/nodes/access/PropertyCacheNode$CacheNode.d.ts'
import type { PropertyCacheNode$ReceiverCheckNode } from '../../../../../../com/oracle/truffle/js/nodes/access/PropertyCacheNode$ReceiverCheckNode.d.ts'
import type { JSContext } from '../../../../../../com/oracle/truffle/js/runtime/JSContext.d.ts'
import type { JSDynamicObject } from '../../../../../../com/oracle/truffle/js/runtime/objects/JSDynamicObject.d.ts'
import type { Object } from '../../../../../../java/lang/Object.d.ts'
export abstract class PropertyCacheNode<T extends PropertyCacheNode$CacheNode<T>> extends JavaScriptBaseNode {
    static reportLoopCount(paramnode: Node, paramcount: number): void;
    constructor(key: Object, context: JSContext)
    readonly context: JSContext;
    // private invalidationAssumption: Assumption;
    readonly key: Object;
    canCombineShapeCheck(parentShape: Shape, cacheShape: Shape, thisObj: Object, depth: number, value: Object, property: Property): boolean;
    checkForUnstableAssumption(head: T, thisObj: Object): void;
    createCachedPropertyNode(entry: Property, thisObj: Object, proto: JSDynamicObject, depth: number, value: Object, currentHead: T): T;
    createCombinedIcPropertyNode(parentShape: Shape, cacheShape: Shape, thisObj: Object, depth: number, value: Object, property: Property): T;
    createGenericPropertyNode(): T;
    createJSClassCheck(thisObj: Object, proto: JSDynamicObject, depth: number): PropertyCacheNode$ReceiverCheckNode;
    createJavaPropertyNodeMaybe(thisObj: Object, proto: JSDynamicObject, depth: number): T;
    createPrimitiveReceiverCheck(thisObj: Object, protoAtDepth: JSDynamicObject, depth: number): PropertyCacheNode$ReceiverCheckNode;
    createShapeCheckNode(shape: Shape, thisObj: JSDynamicObject, proto: JSDynamicObject, depth: number, isConstantObjectFinal: boolean, isDefine: boolean): PropertyCacheNode$AbstractShapeCheckNode;
    // private createShapeCheckNodeDeeper(shape: Shape, thisObj: JSDynamicObject, protoAtDepth: JSDynamicObject, depth: number, isConstantObjectFinal: boolean): PropertyCacheNode$AbstractShapeCheckNode;
    // private createShapeCheckNodeDepth0(shape: Shape, thisObj: JSDynamicObject, isConstantObjectFinal: boolean, isDefine: boolean): PropertyCacheNode$AbstractShapeCheckNode;
    createSpecialization(thisObj: Object, currentHead: T, cachedCount: number, value: Object): T;
    createTruffleObjectPropertyNode(): T;
    createUndefinedPropertyNode(thisObj: Object, store: Object, proto: JSDynamicObject, depth: number, value: Object): T;
    deoptimize(): void;
    filterValid(cache: T): T;
    getAccessorKey(getset: TruffleString): TruffleString;
    getCacheNode(): T;
    getContext(): JSContext;
    getKey(): Object;
    insertCached(specialized: T, currentHead: T, cachedCount: number): T;
    invalidateCache(): void;
    isGlobal(): boolean;
    isOwnProperty(): boolean;
    isPropertyAssumptionCheckEnabled(): boolean;
    // private isUnexpectedConstantObject(cache: T, thisObj: Object): boolean;
    propertyAssumptionsValid(thisObj: JSDynamicObject, depth: number, checkDepth0: boolean): boolean;
    retryCache(): T;
    rewriteCached(currentHead: T, newHead: T): T;
    // private rewriteToCombinedIC(parentShape: Shape, cacheShape: Shape, thisObj: Object, depth: number, value: Object, property: Property): T;
    rewriteToGeneric(currentHead: T, cachedCount: number, reason: string): T;
    setCacheNode(cache: T): void;
    setPropertyAssumptionCheckEnabled(value: boolean): void;
    shapesHaveCommonLayoutForKey(shape1: Shape, shape2: Shape): boolean;
    specialize(thisObj: Object): T;
    specialize(thisObj: Object, value: Object): T;
    // private traceAssumptionInvalidated(): void;
    traceRewriteEvictFinal(evicted: Node): void;
    // private traceRewriteInsert(newNode: Node, cacheDepth: number): void;
    // private traceRewriteMegamorphic(newNode: Node, reason: string): void;
}