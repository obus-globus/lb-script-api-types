import type { Object } from '../../../../../../java/lang/Object.d.ts'
import type { Pair } from '../../../../../../kotlin/Pair.d.ts'
import type { Value } from '../../../../../../org/graalvm/polyglot/Value.d.ts'
/**
 * Validation helpers exposed to scripts as `ParameterValidator`.
 *
 * Each function returns a `{ accept: boolean, value?: any, error?: string }` object,
 * mirroring the contract expected by the `validate` field of script command parameters
 * (see {@link net.ccbluex.liquidbounce.script.bindings.features.ScriptCommandBuilder}).
 *
 * Source: {@link https://github.com/CCBlueX/LiquidBounce/blob/cc3ab309a7c1e7125c4a36b872e8efed54294ecc/src/main/kotlin/net/ccbluex/liquidbounce/script/bindings/api/ScriptParameterValidator.kt#L32 | src/main/kotlin/net/ccbluex/liquidbounce/script/bindings/api/ScriptParameterValidator.kt:32}
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
    // private map(param: string, parse: (param0: string) => Pair<Object, string>): Value;
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