import type { FlowValue } from '../../../../../../../com/llamalad7/mixinextras/expression/impl/flow/FlowValue.d.ts'
import type { InsnReference } from '../../../../../../../com/llamalad7/mixinextras/expression/impl/flow/utils/InsnReference.d.ts'
import type { Object } from '../../../../../../../java/lang/Object.d.ts'
export class ArrayCreationInfo extends Object {
    constructor(arg0: FlowValue)
    initialized: InsnReference;
}