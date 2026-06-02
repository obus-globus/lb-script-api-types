import type { Assumption } from '../../../../../com/oracle/truffle/api/Assumption.d.ts'
import type { DynamicObject } from '../../../../../com/oracle/truffle/api/object/DynamicObject.d.ts'
import type { Shape } from '../../../../../com/oracle/truffle/api/object/Shape.d.ts'
import type { Shape$AbstractBuilder } from '../../../../../com/oracle/truffle/api/object/Shape$AbstractBuilder.d.ts'
import type { Class } from '../../../../../java/lang/Class.d.ts'
import type { MethodHandles$Lookup } from '../../../../../java/lang/invoke/MethodHandles$Lookup.d.ts'
import type { Object } from '../../../../../java/lang/Object.d.ts'
import type { EconomicMap } from '../../../../../org/graalvm/collections/EconomicMap.d.ts'
import type { Pair } from '../../../../../org/graalvm/collections/Pair.d.ts'
export class Shape$Builder extends Shape$AbstractBuilder<Shape$Builder> {
    constructor()
    // private allowImplicitCastIntToDouble: boolean;
    // private allowImplicitCastIntToLong: boolean;
    // private dynamicType: Object;
    // private layoutClass: Class<DynamicObject>;
    // private layoutLookup: MethodHandles$Lookup;
    // private properties: EconomicMap<Object, Pair<Object, number>>;
    // private propertyAssumptions: boolean;
    // private shapeFlags: number;
    // private shared: boolean;
    // private sharedData: Object;
    // private singleContextAssumption: Assumption;
    addConstantProperty(key: Object, value: Object, flags: number): Shape$Builder;
    allowImplicitCastIntToDouble(allow: boolean): Shape$Builder;
    allowImplicitCastIntToLong(allow: boolean): Shape$Builder;
    build(): Shape;
    dynamicType(dynamicType: Object): Shape$Builder;
    layout(layoutClass: Class<DynamicObject>): Shape$Builder;
    layout(layoutClass: Class<DynamicObject>, layoutClassLookup: MethodHandles$Lookup): Shape$Builder;
    propertyAssumptions(enable: boolean): Shape$Builder;
    shapeFlags(flags: number): Shape$Builder;
    shared(isShared: boolean): Shape$Builder;
    sharedData(sharedData: Object): Shape$Builder;
    singleContextAssumption(assumption: Assumption): Shape$Builder;
}