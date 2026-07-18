import type { JavaMap } from '../../../../../JavaMap.d.ts'
import type { DynamicObject } from '../../../../../com/oracle/truffle/api/object/DynamicObject.d.ts'
import type { ExtLayoutStrategy } from '../../../../../com/oracle/truffle/api/object/ExtLayoutStrategy.d.ts'
import type { LayoutImpl } from '../../../../../com/oracle/truffle/api/object/LayoutImpl.d.ts'
import type { Location } from '../../../../../com/oracle/truffle/api/object/Location.d.ts'
import type { Property } from '../../../../../com/oracle/truffle/api/object/Property.d.ts'
import type { Shape } from '../../../../../com/oracle/truffle/api/object/Shape.d.ts'
import type { ShapeImpl } from '../../../../../com/oracle/truffle/api/object/ShapeImpl.d.ts'
import type { ShapeImpl$BaseAllocator } from '../../../../../com/oracle/truffle/api/object/ShapeImpl$BaseAllocator.d.ts'
import type { Object } from '../../../../../java/lang/Object.d.ts'
import type { Pair } from '../../../../../org/graalvm/collections/Pair.d.ts'
export class ObsolescenceStrategy extends ExtLayoutStrategy {
    static diffToString(paramoldShape: Shape, paramnewShape: Shape): string;
    static findPropertyDifferences(paramoldShape: Shape, paramnewShape: Shape): JavaMap<Object, Pair<Property, Property>>;
    private constructor()
    // private checkForObsoleteShapeAndMigrate(store: DynamicObject): boolean;
    createAllocator(layout: LayoutImpl): ShapeImpl$BaseAllocator;
    createAllocator(shape: ShapeImpl): ShapeImpl$BaseAllocator;
    definePropertyGeneralize(oldShape: ShapeImpl, oldProperty: Property, value: Object, putFlags: number): ShapeImpl;
    ensureSpace(shape: ShapeImpl, location: Location): ShapeImpl;
    ensureValid(newShape: ShapeImpl): ShapeImpl;
    // private generalizeHelper(currentProperty: Property, value: Object, currentShape: ShapeImpl, putFlags: number): ShapeImpl;
    generalizeProperty(oldProperty: Property, value: Object, oldShape: ShapeImpl, newShape: ShapeImpl, putFlags: number): ShapeImpl;
    generalizePropertyWithFlags(oldShape: ShapeImpl, oldProperty: Property, value: Object, propertyFlags: number, putFlags: number): ShapeImpl;
    // private getObsoletedBy(shape: ShapeImpl): ShapeImpl;
    // private indirectReplaceProperty(shape: ShapeImpl, oldProperty: Property, newProperty: Property): ShapeImpl;
    // private makeNewOwningShape(owningShape: ShapeImpl, newProperty: Property): ShapeImpl;
    // private makeSuccessorShape(oldShape: ShapeImpl): ShapeImpl;
    // private migrateObsoleteShape(currentShape: Shape, store: DynamicObject): boolean;
    // private obsoleteAndMakeShapeWithProperty(oldProperty: Property, oldShape: ShapeImpl, owningShape: ShapeImpl, newProperty: Property): ShapeImpl;
    // private rebuildObsoleteShape(oldShape: ShapeImpl, owningShape: ShapeImpl): ShapeImpl;
    replaceProperty(shape: ShapeImpl, oldProperty: Property, newProperty: Property): ShapeImpl;
    // private reshape(store: DynamicObject): void;
    updateShape(object: DynamicObject): boolean;
}