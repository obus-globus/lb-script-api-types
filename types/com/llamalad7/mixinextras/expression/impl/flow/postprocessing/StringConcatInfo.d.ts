import type { FlowValue } from '../../../../../../../com/llamalad7/mixinextras/expression/impl/flow/FlowValue.d.ts'
import type { Object } from '../../../../../../../java/lang/Object.d.ts'
export class StringConcatInfo extends Object {
    constructor(arg0: boolean, arg1: boolean, arg2: FlowValue, arg3: FlowValue)
    initialComponent: FlowValue;
    isBuilder: boolean;
    isFirstConcat: boolean;
    toStringCall: FlowValue;
}