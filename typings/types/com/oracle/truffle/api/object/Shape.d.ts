import type { Assumption } from '../../../../../com/oracle/truffle/api/Assumption.d.ts'
import type { AbstractAssumption } from '../../../../../com/oracle/truffle/api/impl/AbstractAssumption.d.ts'
import type { BaseAllocator } from '../../../../../com/oracle/truffle/api/object/BaseAllocator.d.ts'
import type { DynamicObject } from '../../../../../com/oracle/truffle/api/object/DynamicObject.d.ts'
import type { LayoutImpl } from '../../../../../com/oracle/truffle/api/object/LayoutImpl.d.ts'
import type { Location } from '../../../../../com/oracle/truffle/api/object/Location.d.ts'
import type { Property } from '../../../../../com/oracle/truffle/api/object/Property.d.ts'
import type { PropertyAssumptions } from '../../../../../com/oracle/truffle/api/object/PropertyAssumptions.d.ts'
import type { PropertyGetter } from '../../../../../com/oracle/truffle/api/object/PropertyGetter.d.ts'
import type { Shape$Builder } from '../../../../../com/oracle/truffle/api/object/Shape$Builder.d.ts'
import type { Shape$DerivedBuilder } from '../../../../../com/oracle/truffle/api/object/Shape$DerivedBuilder.d.ts'
import type { Transition } from '../../../../../com/oracle/truffle/api/object/Transition.d.ts'
import type { Transition$PropertyTransition } from '../../../../../com/oracle/truffle/api/object/Transition$PropertyTransition.d.ts'
import type { Class } from '../../../../../java/lang/Class.d.ts'
import type { BiConsumer } from '../../../../../java/util/function/BiConsumer.d.ts'
import type { IntPredicate } from '../../../../../java/util/function/IntPredicate.d.ts'
import type { Predicate } from '../../../../../java/util/function/Predicate.d.ts'
import type { Object } from '../../../../../java/lang/Object.d.ts'
export class Shape extends Object {
    static newBuilder(): Shape$Builder;
    static newBuilder(parambaseShape: Shape): Shape$DerivedBuilder;
    constructor(layout: LayoutImpl, dynamicType: Object, sharedData: Object, flags: number, constantObjectAssumption: Assumption)
    // private depth: number;
    readonly flags: number;
    // private layout: LayoutImpl;
    readonly leafAssumption: AbstractAssumption;
    // private objectArrayCapacity: number;
    // private objectArraySize: number;
    // private objectFieldSize: number;
    // private objectType: Object;
    // private parent: Shape;
    // private predecessorShape: Object;
    // private primitiveArrayCapacity: number;
    // private primitiveArraySize: number;
    // private primitiveFieldSize: number;
    readonly propertyCount: number;
    // private propertyMap: { [key: string]: any };
    readonly root: Shape;
    readonly sharedData: Object;
    // private sharedPropertyAssumptions: PropertyAssumptions;
    // private successorShape: Shape;
    // private transitionFromParent: Transition;
    // private transitionMap: Object;
    readonly validAssumption: AbstractAssumption;
    addDirectTransition(transition: Transition, next: Shape): Shape;
    addIndirectTransition(transition: Transition, next: Shape): Shape;
    addPredecessorShape(nextShape: Shape): void;
    addProperty(property: Property): Shape;
    addTransitionIfAbsentOrGet(transition: Transition, successor: Shape): Shape;
    addTransitionIfAbsentOrNull(transition: Transition, successor: Shape): Shape;
    allPropertiesMatch(predicate: (param0: Property) => boolean): boolean;
    allocator(): BaseAllocator;
    allowPropertyAssumptions(): boolean;
    check(subject: DynamicObject): boolean;
    createShape(dynamicType: Object, sharedData: Object, propertyMap: { [key: string]: any }, transition: Transition, allocator: BaseAllocator, flags: number): Shape;
    createShapeWithSameSize(dynamicType: Object, sharedData: Object, propertyMap: { [key: string]: any }, transition: Transition, flags: number): Shape;
    defineConstantProperty(key: Object, value: Object, propertyFlags: number): Shape;
    defineProperty(key: Object, value: Object, propertyFlags: number): Shape;
    defineProperty(key: Object, value: Object, propertyFlags: number, putFlags: number): Shape;
    defineProperty(key: Object, value: Object, propertyFlags: number, putFlags: number, existing: Property): Shape;
    forEachTransition(consumer: (param0: Transition, param1: Shape) => void): void;
    getDepth(): number;
    getDynamicType(): Object;
    getFirstProperty(): Property;
    getFlags(): number;
    getFlagsInternal(): number;
    getKeyArray(): Object[];
    getKeyList(): Object[];
    getKeys(): Object[];
    getLastProperty(): Property;
    getLayout(): LayoutImpl;
    getLayoutClass(): Class<DynamicObject>;
    getLeafAssumption(): Assumption;
    getLocation(key: Object): Location;
    getMutex(): Object;
    getObjectArrayCapacity(): number;
    getObjectArraySize(): number;
    getObjectFieldSize(): number;
    // private getOrCreatePropertyAssumptions(): PropertyAssumptions;
    getParent(): Shape;
    getPrimitiveArrayCapacity(): number;
    getPrimitiveArraySize(): number;
    getPrimitiveFieldSize(): number;
    getProperties(): Property[];
    getProperty(key: Object): Property;
    getPropertyArray(): Property[];
    getPropertyAssumption(key: Object): Assumption;
    // private getPropertyAssumptions(): PropertyAssumptions;
    getPropertyCount(): number;
    getPropertyList(): Property[];
    getPropertyListInternal(ascending: boolean): Property[];
    getPropertyMap(): { [key: string]: any };
    getRoot(): Shape;
    getSharedData(): Object;
    getSuccessorShape(): Shape;
    getTransitionFromParent(): Transition;
    getValidAbstractAssumption(): AbstractAssumption;
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
    makePropertyGetter(key: Object): PropertyGetter;
    makeSharedShape(): Shape;
    onPropertyTransition(propertyTransition: Transition$PropertyTransition): void;
    queryTransition(transition: Transition): Shape;
    // private queryTransitionImpl(transition: Transition): Shape;
    removeProperty(property: Property): Shape;
    replaceProperty(oldProperty: Property, newProperty: Property): Shape;
    setDynamicType(dynamicType: Object): Shape;
    setFlags(objectFlags: number): Shape;
    setPropertyFlags(oldProperty: Property, newFlags: number): Shape;
    setSuccessorShape(successorShape: Shape): void;
    testPropertyFlags(predicate: (param0: number) => boolean): boolean;
    toString(): string;
    toStringLimit(limit: number): string;
    tryMerge(other: Shape): Shape;
}