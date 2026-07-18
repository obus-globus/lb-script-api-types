import type { DynamicObject } from '../../../../../com/oracle/truffle/api/object/DynamicObject.d.ts'
import type { ExtLayoutStrategy } from '../../../../../com/oracle/truffle/api/object/ExtLayoutStrategy.d.ts'
import type { LayoutImpl } from '../../../../../com/oracle/truffle/api/object/LayoutImpl.d.ts'
import type { Location } from '../../../../../com/oracle/truffle/api/object/Location.d.ts'
import type { ShapeImpl } from '../../../../../com/oracle/truffle/api/object/ShapeImpl.d.ts'
import type { ShapeImpl$BaseAllocator } from '../../../../../com/oracle/truffle/api/object/ShapeImpl$BaseAllocator.d.ts'
export class ExtDefaultStrategy extends ExtLayoutStrategy {
    static singleton(): ExtDefaultStrategy;
    private constructor()
    createAllocator(layout: LayoutImpl): ShapeImpl$BaseAllocator;
    createAllocator(shape: ShapeImpl): ShapeImpl$BaseAllocator;
    ensureSpace(shape: ShapeImpl, location: Location): ShapeImpl;
    ensureValid(newShape: ShapeImpl): ShapeImpl;
    updateShape(object: DynamicObject): boolean;
}