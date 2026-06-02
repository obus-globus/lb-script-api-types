import type { Assumption } from '../../../../../com/oracle/truffle/api/Assumption.d.ts'
import type { DynamicObject } from '../../../../../com/oracle/truffle/api/object/DynamicObject.d.ts'
import type { Property } from '../../../../../com/oracle/truffle/api/object/Property.d.ts'
import type { PropertyGetter } from '../../../../../com/oracle/truffle/api/object/PropertyGetter.d.ts'
import type { Shape$Builder } from '../../../../../com/oracle/truffle/api/object/Shape$Builder.d.ts'
import type { Shape$DerivedBuilder } from '../../../../../com/oracle/truffle/api/object/Shape$DerivedBuilder.d.ts'
import type { Class } from '../../../../../java/lang/Class.d.ts'
import type { Predicate } from '../../../../../java/util/function/Predicate.d.ts'
import type { Object } from '../../../../../java/lang/Object.d.ts'
export class Shape extends Object {
    static newBuilder(): Shape$Builder;
    static newBuilder(parambaseShape: Shape): Shape$DerivedBuilder;
    constructor()
    addProperty(property: Property): Shape;
    allPropertiesMatch(predicate: (param0: Property) => kotlin.Boolean): boolean;
    check(subject: DynamicObject): boolean;
    defineConstantProperty(key: Object, value: Object, propertyFlags: number): Shape;
    defineProperty(key: Object, value: Object, propertyFlags: number): Shape;
    defineProperty(key: Object, value: Object, propertyFlags: number, putFlags: number): Shape;
    getDynamicType(): Object;
    getFlags(): number;
    getKeyList(): Object[];
    getKeys(): Object[];
    getLastProperty(): Property;
    getLayoutClass(): Class<DynamicObject>;
    getLeafAssumption(): Assumption;
    getProperties(): Property[];
    getProperty(key: Object): Property;
    getPropertyAssumption(key: Object): Assumption;
    getPropertyCount(): number;
    getPropertyList(): Property[];
    getPropertyListInternal(ascending: boolean): Property[];
    getRoot(): Shape;
    getSharedData(): Object;
    getValidAssumption(): Assumption;
    hasInstanceProperties(): boolean;
    hasProperty(key: Object): boolean;
    isLeaf(): boolean;
    isShared(): boolean;
    isValid(): boolean;
    makePropertyGetter(key: Object): PropertyGetter;
    makeSharedShape(): Shape;
    removeProperty(property: Property): Shape;
    replaceProperty(oldProperty: Property, newProperty: Property): Shape;
    setDynamicType(dynamicType: Object): Shape;
    setFlags(newFlags: number): Shape;
    tryMerge(other: Shape): Shape;
}