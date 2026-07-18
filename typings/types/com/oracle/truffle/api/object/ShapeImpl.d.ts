import type { JavaMap } from '../../../../../JavaMap.d.ts'
import type { Assumption } from '../../../../../com/oracle/truffle/api/Assumption.d.ts'
import type { DynamicObject } from '../../../../../com/oracle/truffle/api/object/DynamicObject.d.ts'
import type { Layout } from '../../../../../com/oracle/truffle/api/object/Layout.d.ts'
import type { LayoutImpl } from '../../../../../com/oracle/truffle/api/object/LayoutImpl.d.ts'
import type { LayoutStrategy } from '../../../../../com/oracle/truffle/api/object/LayoutStrategy.d.ts'
import type { Property } from '../../../../../com/oracle/truffle/api/object/Property.d.ts'
import type { Shape } from '../../../../../com/oracle/truffle/api/object/Shape.d.ts'
import type { Shape$Builder } from '../../../../../com/oracle/truffle/api/object/Shape$Builder.d.ts'
import type { Shape$DerivedBuilder } from '../../../../../com/oracle/truffle/api/object/Shape$DerivedBuilder.d.ts'
import type { ShapeImpl$BaseAllocator } from '../../../../../com/oracle/truffle/api/object/ShapeImpl$BaseAllocator.d.ts'
import type { ShapeImpl$PropertyAssumptions } from '../../../../../com/oracle/truffle/api/object/ShapeImpl$PropertyAssumptions.d.ts'
import type { Transition } from '../../../../../com/oracle/truffle/api/object/Transition.d.ts'
import type { Transition$PropertyTransition } from '../../../../../com/oracle/truffle/api/object/Transition$PropertyTransition.d.ts'
import type { Class } from '../../../../../java/lang/Class.d.ts'
import type { BiConsumer } from '../../../../../java/util/function/BiConsumer.d.ts'
import type { IntPredicate } from '../../../../../java/util/function/IntPredicate.d.ts'
import type { Predicate } from '../../../../../java/util/function/Predicate.d.ts'
import type { Object } from '../../../../../java/lang/Object.d.ts'
export class ShapeImpl extends Shape {
    static diff(paramoldShape: Shape, paramnewShape: Shape): Property[];
    static findCommonAncestor(paramleft: ShapeImpl, paramright: ShapeImpl): ShapeImpl;
    static newBuilder(): Shape$Builder;
    static newBuilder(parambaseShape: Shape): Shape$DerivedBuilder;
    constructor(layout: Layout, parent: ShapeImpl, objectType: Object, sharedData: Object, propertyMap: JavaMap<any, any>, transition: Transition, allocator: ShapeImpl$BaseAllocator, flags: number)
    constructor(layout: Layout, dynamicType: Object, sharedData: Object, flags: number, constantObjectAssumption: Assumption)
    readonly depth: number;
    readonly flags: number;
    readonly layout: LayoutImpl;
    leafAssumption: Assumption;
    readonly objectArrayCapacity: number;
    readonly objectArraySize: number;
    readonly objectFieldSize: number;
    // private objectType: Object;
    readonly parent: ShapeImpl;
    readonly primitiveArrayCapacity: number;
    readonly primitiveArraySize: number;
    readonly primitiveFieldSize: number;
    readonly propertyCount: number;
    readonly propertyMap: JavaMap<any, any>;
    readonly root: ShapeImpl;
    readonly sharedData: Object;
    // private sharedPropertyAssumptions: ShapeImpl$PropertyAssumptions;
    readonly transitionFromParent: Transition;
    // private transitionMap: Object;
    readonly validAssumption: Assumption;
    addDirectTransition(transition: Transition, next: ShapeImpl): ShapeImpl;
    addIndirectTransition(transition: Transition, next: ShapeImpl): ShapeImpl;
    addProperty(property: Property): ShapeImpl;
    addTransitionIfAbsentOrGet(transition: Transition, successor: ShapeImpl): ShapeImpl;
    addTransitionIfAbsentOrNull(transition: Transition, successor: ShapeImpl): ShapeImpl;
    allPropertiesMatch(predicate: (param0: Property) => boolean): boolean;
    allocator(): ShapeImpl$BaseAllocator;
    allowPropertyAssumptions(): boolean;
    check(subject: DynamicObject): boolean;
    cloneOnto(newParent: ShapeImpl): ShapeImpl;
    cloneRoot(from: ShapeImpl, newSharedData: Object): ShapeImpl;
    createSeparateShape(newSharedData: Object): ShapeImpl;
    createShape(layout: Layout, sharedData: Object, parent: ShapeImpl, objectType: Object, propertyMap: JavaMap<any, any>, transition: Transition, allocator: ShapeImpl$BaseAllocator, id: number): ShapeImpl;
    defineProperty(key: Object, value: Object, propertyFlags: number): ShapeImpl;
    defineProperty(key: Object, value: Object, propertyFlags: number, putFlags: number): ShapeImpl;
    forEachTransition(consumer: (param0: Transition, param1: ShapeImpl) => void): void;
    getDepth(): number;
    getDynamicType(): Object;
    getFlags(): number;
    getFlagsInternal(): number;
    getKeyArray(): Object[];
    getKeyList(): Object[];
    getKeys(): Object[];
    getLastProperty(): Property;
    getLayout(): LayoutImpl;
    getLayoutClass(): Class<DynamicObject>;
    getLayoutStrategy(): LayoutStrategy;
    getLeafAssumption(): Assumption;
    getMutex(): Object;
    getObjectArrayCapacity(): number;
    getObjectArraySize(): number;
    getObjectFieldSize(): number;
    // private getOrCreatePropertyAssumptions(): ShapeImpl$PropertyAssumptions;
    getParent(): ShapeImpl;
    getPrimitiveArrayCapacity(): number;
    getPrimitiveArraySize(): number;
    getPrimitiveFieldSize(): number;
    getProperties(): Property[];
    getProperty(key: Object): Property;
    getPropertyArray(): Property[];
    getPropertyAssumption(key: Object): Assumption;
    // private getPropertyAssumptions(): ShapeImpl$PropertyAssumptions;
    getPropertyCount(): number;
    getPropertyList(): Property[];
    getPropertyListInternal(ascending: boolean): Property[];
    getPropertyMap(): JavaMap<any, any>;
    getRoot(): ShapeImpl;
    getSharedData(): Object;
    getSharedDataInternal(): Object;
    getSingleContextAssumption(): Assumption;
    getTransitionFromParent(): Transition;
    getTransitionMapForRead(): JavaMap<Transition, ShapeImpl>;
    getValidAssumption(): Assumption;
    hasInstanceProperties(): boolean;
    hasPrimitiveArray(): boolean;
    hasProperty(name: Object): boolean;
    invalidateAllPropertyAssumptions(): void;
    invalidateLeafAssumption(): void;
    // private invalidatePropertyAssumption(propertyKey: Object, onlyExisting: boolean): void;
    invalidateValidAssumption(): void;
    isLeaf(): boolean;
    isRelated(other: Shape): boolean;
    isShared(): boolean;
    isValid(): boolean;
    makeSharedShape(): Shape;
    onPropertyTransition(propertyTransition: Transition$PropertyTransition): void;
    queryTransition(transition: Transition): ShapeImpl;
    // private queryTransitionImpl(transition: Transition): ShapeImpl;
    removeProperty(prop: Property): ShapeImpl;
    replaceProperty(oldProperty: Property, newProperty: Property): ShapeImpl;
    setDynamicType(newObjectType: Object): ShapeImpl;
    setFlags(newShapeFlags: number): ShapeImpl;
    testPropertyFlags(predicate: (param0: number) => boolean): boolean;
    toString(): string;
    toStringLimit(limit: number): string;
    tryMerge(other: Shape): Shape;
}