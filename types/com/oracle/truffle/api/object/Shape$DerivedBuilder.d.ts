import type { Shape } from '../../../../../com/oracle/truffle/api/object/Shape.d.ts'
import type { Shape$AbstractBuilder } from '../../../../../com/oracle/truffle/api/object/Shape$AbstractBuilder.d.ts'
import type { Object } from '../../../../../java/lang/Object.d.ts'
import type { EconomicMap } from '../../../../../org/graalvm/collections/EconomicMap.d.ts'
import type { Pair } from '../../../../../org/graalvm/collections/Pair.d.ts'
export class Shape$DerivedBuilder extends Shape$AbstractBuilder<Shape$DerivedBuilder> {
    constructor(baseShape: Shape)
    // private baseShape: Shape;
    // private dynamicType: Object;
    // private properties: EconomicMap<Object, Pair<Object, number>>;
    // private shapeFlags: number;
    addConstantProperty(key: Object, value: Object, flags: number): Shape$DerivedBuilder;
    build(): Shape;
    dynamicType(dynamicType: Object): Shape$DerivedBuilder;
    shapeFlags(flags: number): Shape$DerivedBuilder;
}