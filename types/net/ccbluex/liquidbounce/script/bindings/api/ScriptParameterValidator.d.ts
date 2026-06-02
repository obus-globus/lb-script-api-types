import type { Object } from '../../../../../../java/lang/Object.d.ts'
import type { Parameter$Verificator } from '../../../../../../net/ccbluex/liquidbounce/features/command/Parameter$Verificator.d.ts'
import type { Value } from '../../../../../../org/graalvm/polyglot/Value.d.ts'
export class ScriptParameterValidator extends Object {
    constructor(bindings: Value)
    readonly bindings: Value;
    integer(param: string): Value;
    // private map(param: string, validator: Parameter$Verificator<Object>): Value;
    module(param: string): Value;
    positiveInteger(param: string): Value;
    string(param: string): Value;
}