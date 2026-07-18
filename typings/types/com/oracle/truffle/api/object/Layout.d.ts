import type { Assumption } from '../../../../../com/oracle/truffle/api/Assumption.d.ts'
import type { DynamicObject } from '../../../../../com/oracle/truffle/api/object/DynamicObject.d.ts'
import type { Shape } from '../../../../../com/oracle/truffle/api/object/Shape.d.ts'
import type { Class } from '../../../../../java/lang/Class.d.ts'
import type { Object } from '../../../../../java/lang/Object.d.ts'
export abstract class Layout extends Object {
    static OPTION_PREFIX: string;
    constructor()
    buildShape(dynamicType: Object, sharedData: Object, flags: number, singleContextAssumption: Assumption): Shape;
    getType(): Class<DynamicObject>;
}