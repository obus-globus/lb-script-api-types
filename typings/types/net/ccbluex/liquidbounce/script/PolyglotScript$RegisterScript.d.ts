import type { Function } from '../../../../java/util/function/Function.d.ts'
import type { Object } from '../../../../java/lang/Object.d.ts'
import type { PolyglotScript } from '../../../../net/ccbluex/liquidbounce/script/PolyglotScript.d.ts'
export class PolyglotScript$RegisterScript extends Object implements Function< { [key: string]: Object }, PolyglotScript> {
    static identity<T extends unknown>(): (param0: T) => T;
    constructor(null_: PolyglotScript)
    andThen<V extends unknown>(arg0: (param0: PolyglotScript) => V): (param0: { [key: string]: Object }) => V;
    /**
     * Global function 'registerScript' which is called to register a script.
     *
     * @param scriptObject JavaScript object containing information about the script.
     * @returns The instance of this script.
     *
     * Source: {@link https://github.com/CCBlueX/LiquidBounce/blob/650f694b6a7a35f7b117bc6958055e8b541fc43e/src/main/kotlin/net/ccbluex/liquidbounce/script/PolyglotScript.kt#L194 | src/main/kotlin/net/ccbluex/liquidbounce/script/PolyglotScript.kt:194}
     */
    apply(scriptObject: { [key: string]: Object }): PolyglotScript;
    compose<V extends unknown>(arg0: (param0: V) => { [key: string]: Object }): (param0: V) => PolyglotScript;
}