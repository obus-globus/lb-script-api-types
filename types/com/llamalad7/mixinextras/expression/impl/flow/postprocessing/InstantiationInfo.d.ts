import type { FlowValue } from '../../../../../../../com/llamalad7/mixinextras/expression/impl/flow/FlowValue.d.ts'
import type { Object } from '../../../../../../../java/lang/Object.d.ts'
import type { Type } from '../../../../../../../org/objectweb/asm/Type.d.ts'
export class InstantiationInfo extends Object {
    constructor(arg0: Type, arg1: FlowValue)
    initCall: FlowValue;
    type: Type;
}