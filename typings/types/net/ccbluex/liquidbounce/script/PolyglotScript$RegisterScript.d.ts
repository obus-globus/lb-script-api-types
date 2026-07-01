import type { Function } from '../../../../java/util/function/Function.d.ts'
import type { Object } from '../../../../java/lang/Object.d.ts'
import type { PolyglotScript } from '../../../../net/ccbluex/liquidbounce/script/PolyglotScript.d.ts'
export class PolyglotScript$RegisterScript extends Object implements Function< { [key: string]: Object }, PolyglotScript> {
    static identity(): (param0: Object | null) => Object | null;
    constructor(null_: PolyglotScript)
    andThen<V extends unknown>(arg0: (param0: PolyglotScript) => V): (param0: { [key: string]: Object }) => V;
    /**
     * Global function 'registerScript' which is called to register a script.
     *
     * @param scriptObject JavaScript object containing information about the script.
     * @returns The instance of this script.
     *
     * Source: {@link https://github.com/CCBlueX/LiquidBounce/blob/707b7339b27ee1da75cb769c96b0d9d292d0a8ad/src/main/kotlin/net/ccbluex/liquidbounce/script/PolyglotScript.kt#L194 | src/main/kotlin/net/ccbluex/liquidbounce/script/PolyglotScript.kt:194}
     */
    apply(scriptObject: { [key: string]: Object }): PolyglotScript;
    compose<V extends unknown>(arg0: (param0: V) => { [key: string]: Object }): (param0: V) => PolyglotScript;
}