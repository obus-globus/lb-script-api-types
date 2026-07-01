import type { Object } from '../../../../../../java/lang/Object.d.ts'
import type { Parameter$Verificator } from '../../../../../../net/ccbluex/liquidbounce/features/command/Parameter$Verificator.d.ts'
import type { Value } from '../../../../../../org/graalvm/polyglot/Value.d.ts'
/**
 * Validates and parses command-parameter strings, returning an object with either an accepted value or an error (the `ParameterValidator` global).
 */
export class ScriptParameterValidator extends Object {
    constructor(bindings: Value)
    readonly bindings: Value;
    /**
     * Validates and parses the parameter as an integer.
     *
     * @param param the raw parameter string
     */
    integer(param: string): Value;
    // private map(param: string, validator: Parameter$Verificator<Object>): Value;
    /**
     * Validates the parameter as an existing module name.
     *
     * @param param the raw parameter string
     */
    module(param: string): Value;
    /**
     * Validates and parses the parameter as a positive integer.
     *
     * @param param the raw parameter string
     */
    positiveInteger(param: string): Value;
    /**
     * Validates the parameter as a string.
     *
     * @param param the raw parameter string
     */
    string(param: string): Value;
}