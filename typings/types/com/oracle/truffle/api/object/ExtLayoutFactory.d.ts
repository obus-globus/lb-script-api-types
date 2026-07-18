import type { CoreLayoutFactory } from '../../../../../com/oracle/truffle/api/object/CoreLayoutFactory.d.ts'
import type { DynamicObject } from '../../../../../com/oracle/truffle/api/object/DynamicObject.d.ts'
import type { LayoutImpl } from '../../../../../com/oracle/truffle/api/object/LayoutImpl.d.ts'
import type { Class } from '../../../../../java/lang/Class.d.ts'
import type { MethodHandles$Lookup } from '../../../../../java/lang/invoke/MethodHandles$Lookup.d.ts'
export class ExtLayoutFactory extends CoreLayoutFactory {
    constructor()
    createLayout(layoutClass: Class<DynamicObject>, layoutLookup: MethodHandles$Lookup, implicitCastFlags: number): LayoutImpl;
    getPriority(): number;
    registerLayoutClass(subclass: Class<DynamicObject>, layoutLookup: MethodHandles$Lookup): void;
}