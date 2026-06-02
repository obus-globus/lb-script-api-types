import type { Assumption } from '../../../../../com/oracle/truffle/api/Assumption.d.ts'
import type { DynamicObject } from '../../../../../com/oracle/truffle/api/object/DynamicObject.d.ts'
import type { Layout } from '../../../../../com/oracle/truffle/api/object/Layout.d.ts'
import type { LayoutStrategy } from '../../../../../com/oracle/truffle/api/object/LayoutStrategy.d.ts'
import type { Shape } from '../../../../../com/oracle/truffle/api/object/Shape.d.ts'
import type { ShapeImpl } from '../../../../../com/oracle/truffle/api/object/ShapeImpl.d.ts'
import type { ShapeImpl$BaseAllocator } from '../../../../../com/oracle/truffle/api/object/ShapeImpl$BaseAllocator.d.ts'
import type { Class } from '../../../../../java/lang/Class.d.ts'
import type { Object } from '../../../../../java/lang/Object.d.ts'
export abstract class LayoutImpl extends Layout {
    static OPTION_PREFIX: string;
    constructor(clazz: Class<DynamicObject>, strategy: LayoutStrategy, implicitCastFlags: number)
    // private allowedImplicitCasts: number;
    // private clazz: Class<DynamicObject>;
    readonly strategy: LayoutStrategy;
    buildShape(dynamicType: Object, sharedData: Object, flags: number, singleContextAssumption: Assumption): Shape;
    createAllocator(): ShapeImpl$BaseAllocator;
    getObjectFieldCount(): number;
    getPrimitiveFieldCount(): number;
    getStrategy(): LayoutStrategy;
    getType(): Class<DynamicObject>;
    hasObjectExtensionArray(): boolean;
    hasPrimitiveExtensionArray(): boolean;
    isAllowedIntToDouble(): boolean;
    isAllowedIntToLong(): boolean;
    newShape(objectType: Object, sharedData: Object, flags: number, singleContextAssumption: Assumption): ShapeImpl;
    toString(): string;
}