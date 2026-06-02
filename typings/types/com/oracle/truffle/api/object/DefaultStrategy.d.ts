import type { DynamicObject } from '../../../../../com/oracle/truffle/api/object/DynamicObject.d.ts'
import type { LayoutImpl } from '../../../../../com/oracle/truffle/api/object/LayoutImpl.d.ts'
import type { LayoutStrategy } from '../../../../../com/oracle/truffle/api/object/LayoutStrategy.d.ts'
import type { Location } from '../../../../../com/oracle/truffle/api/object/Location.d.ts'
import type { ShapeImpl } from '../../../../../com/oracle/truffle/api/object/ShapeImpl.d.ts'
import type { ShapeImpl$BaseAllocator } from '../../../../../com/oracle/truffle/api/object/ShapeImpl$BaseAllocator.d.ts'
import type { Object } from '../../../../../java/lang/Object.d.ts'
export class DefaultStrategy extends LayoutStrategy {
    private constructor()
    createAllocator(layout: LayoutImpl): ShapeImpl$BaseAllocator;
    createAllocator(shape: ShapeImpl): ShapeImpl$BaseAllocator;
    createLocationForValue(shape: ShapeImpl, value: Object, putFlags: number): Location;
    ensureSpace(shape: ShapeImpl, location: Location): ShapeImpl;
    ensureValid(newShape: ShapeImpl): ShapeImpl;
    getLocationOrdinal(location: Location): number;
    updateShape(object: DynamicObject): boolean;
}