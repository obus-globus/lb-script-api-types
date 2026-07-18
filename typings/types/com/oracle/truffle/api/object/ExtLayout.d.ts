import type { Assumption } from '../../../../../com/oracle/truffle/api/Assumption.d.ts'
import type { DynamicObject } from '../../../../../com/oracle/truffle/api/object/DynamicObject.d.ts'
import type { ExtLayout$LayoutInfo } from '../../../../../com/oracle/truffle/api/object/ExtLayout$LayoutInfo.d.ts'
import type { ExtLayoutStrategy } from '../../../../../com/oracle/truffle/api/object/ExtLayoutStrategy.d.ts'
import type { FieldInfo } from '../../../../../com/oracle/truffle/api/object/FieldInfo.d.ts'
import type { LayoutImpl } from '../../../../../com/oracle/truffle/api/object/LayoutImpl.d.ts'
import type { ShapeImpl } from '../../../../../com/oracle/truffle/api/object/ShapeImpl.d.ts'
import type { ShapeImpl$BaseAllocator } from '../../../../../com/oracle/truffle/api/object/ShapeImpl$BaseAllocator.d.ts'
import type { Class } from '../../../../../java/lang/Class.d.ts'
import type { Object } from '../../../../../java/lang/Object.d.ts'
export class ExtLayout extends LayoutImpl {
    static BooleanLocations: boolean;
    static DoubleLocations: boolean;
    static InObjectFields: boolean;
    static IntegerLocations: boolean;
    static LongLocations: boolean;
    static MaxMergeDepth: number;
    static MaxMergeDiff: number;
    static NewFinalSpeculation: boolean;
    static NewTypeSpeculation: boolean;
    static OPTION_PREFIX: string;
    static PrimitiveLocations: boolean;
    static TraceReshape: boolean;
    static UseVarHandle: boolean;
    constructor(dynamicObjectClass: Class<DynamicObject>, strategy: ExtLayoutStrategy, layoutInfo: ExtLayout$LayoutInfo, allowedImplicitCasts: number)
    // private objectFields: FieldInfo[];
    readonly primitiveFieldMaxSize: number;
    // private primitiveFields: FieldInfo[];
    readonly strategy: ExtLayoutStrategy;
    createAllocator(): ShapeImpl$BaseAllocator;
    getObjectField(index: number): FieldInfo;
    getObjectFieldCount(): number;
    getPrimitiveField(index: number): FieldInfo;
    getPrimitiveFieldCount(): number;
    getPrimitiveFieldMaxSize(): number;
    getStrategy(): ExtLayoutStrategy;
    hasObjectExtensionArray(): boolean;
    hasPrimitiveExtensionArray(): boolean;
    newShape(objectType: Object, sharedData: Object, flags: number, constantObjectAssumption: Assumption): ShapeImpl;
    toString(): string;
}