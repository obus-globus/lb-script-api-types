import type { DynamicObject } from '../../../../../com/oracle/truffle/api/object/DynamicObject.d.ts'
import type { LayoutImpl } from '../../../../../com/oracle/truffle/api/object/LayoutImpl.d.ts'
import type { Location } from '../../../../../com/oracle/truffle/api/object/Location.d.ts'
import type { Property } from '../../../../../com/oracle/truffle/api/object/Property.d.ts'
import type { ShapeImpl } from '../../../../../com/oracle/truffle/api/object/ShapeImpl.d.ts'
import type { ShapeImpl$BaseAllocator } from '../../../../../com/oracle/truffle/api/object/ShapeImpl$BaseAllocator.d.ts'
import type { Transition } from '../../../../../com/oracle/truffle/api/object/Transition.d.ts'
import type { Transition$AddPropertyTransition } from '../../../../../com/oracle/truffle/api/object/Transition$AddPropertyTransition.d.ts'
import type { Transition$RemovePropertyTransition } from '../../../../../com/oracle/truffle/api/object/Transition$RemovePropertyTransition.d.ts'
import type { Class } from '../../../../../java/lang/Class.d.ts'
import type { Object } from '../../../../../java/lang/Object.d.ts'
export abstract class LayoutStrategy extends Object {
    constructor()
    addProperty(shape: ShapeImpl, property: Property): ShapeImpl;
    addProperty(shape: ShapeImpl, property: Property, ensureValid: boolean): ShapeImpl;
    // private addPropertyInner(shape: ShapeImpl, property: Property): ShapeImpl;
    applyTransition(shape: ShapeImpl, transition: Transition, append: boolean): ShapeImpl;
    createAllocator(shape: LayoutImpl): ShapeImpl$BaseAllocator;
    createAllocator(shape: ShapeImpl): ShapeImpl$BaseAllocator;
    createLocationForValue(shape: ShapeImpl, value: Object, putFlags: number): Location;
    createSeparateShape(shape: ShapeImpl): ShapeImpl;
    // private defineNewProperty(oldShape: ShapeImpl, key: Object, value: Object, propertyFlags: number, putFlags: number): ShapeImpl;
    defineProperty(shape: ShapeImpl, key: Object, value: Object, flags: number): ShapeImpl;
    defineProperty(oldShape: ShapeImpl, key: Object, value: Object, propertyFlags: number, existing: Property, putFlags: number): ShapeImpl;
    defineProperty(shape: ShapeImpl, key: Object, value: Object, flags: number, putFlags: number): ShapeImpl;
    definePropertyChangeFlags(oldShape: ShapeImpl, existing: Property, value: Object, propertyFlags: number, putFlags: number): ShapeImpl;
    definePropertyGeneralize(oldShape: ShapeImpl, oldProperty: Property, value: Object, putFlags: number): ShapeImpl;
    // private definePropertySeparateShape(oldShape: ShapeImpl, key: Object, value: Object, propertyFlags: number, putFlags: number): ShapeImpl;
    detectLocationType(value: Object): Class<Object>;
    directReplaceProperty(shape: ShapeImpl, oldProperty: Property, newProperty: Property): ShapeImpl;
    directReplaceProperty(shape: ShapeImpl, oldProperty: Property, newProperty: Property, ensureValid: boolean): ShapeImpl;
    ensureSameTypeOrMoreGeneral(generalProperty: Property, specificProperty: Property): void;
    ensureSpace(shape: ShapeImpl, location: Location): ShapeImpl;
    ensureValid(newShape: ShapeImpl): ShapeImpl;
    generalizeProperty(oldProperty: Property, value: Object, currentShape: ShapeImpl, nextShape: ShapeImpl, putFlags: number): ShapeImpl;
    generalizePropertyWithFlags(currentShape: ShapeImpl, oldProperty: Property, value: Object, propertyFlags: number, putFlags: number): ShapeImpl;
    getLocationOrdinal(location: Location): number;
    // private indirectRemoveProperty(shape: ShapeImpl, property: Property, transition: Transition$RemovePropertyTransition): ShapeImpl;
    newAddPropertyTransition(property: Property): Transition$AddPropertyTransition;
    newRemovePropertyTransition(property: Property, direct: boolean): Transition$RemovePropertyTransition;
    removeProperty(shape: ShapeImpl, property: Property): ShapeImpl;
    replaceProperty(shape: ShapeImpl, oldProperty: Property, newProperty: Property): ShapeImpl;
    separateReplaceProperty(shape: ShapeImpl, oldProperty: Property, newProperty: Property): ShapeImpl;
    toLocationOrType(location: Location): Object;
    updateShape(object: DynamicObject): boolean;
}