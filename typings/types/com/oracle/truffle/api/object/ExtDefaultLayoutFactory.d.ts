import type { DynamicObject } from '../../../../../com/oracle/truffle/api/object/DynamicObject.d.ts'
import type { ExtLayoutFactory } from '../../../../../com/oracle/truffle/api/object/ExtLayoutFactory.d.ts'
import type { LayoutImpl } from '../../../../../com/oracle/truffle/api/object/LayoutImpl.d.ts'
import type { Class } from '../../../../../java/lang/Class.d.ts'
import type { MethodHandles$Lookup } from '../../../../../java/lang/invoke/MethodHandles$Lookup.d.ts'
export class ExtDefaultLayoutFactory extends ExtLayoutFactory {
    constructor()
    createLayout(layoutClass: Class<DynamicObject>, layoutLookup: MethodHandles$Lookup, implicitCastFlags: number): LayoutImpl;
    getPriority(): number;
}