import type { JavaMap } from '../../../../JavaMap.d.ts'
import type { Function } from '../../../../java/util/function/Function.d.ts'
import type { Object } from '../../../../java/lang/Object.d.ts'
import type { PolyglotScript } from '../../../../net/ccbluex/liquidbounce/script/PolyglotScript.d.ts'
export class PolyglotScript$RegisterScript extends Object implements Function<JavaMap<string, Object>, PolyglotScript> {
    constructor(null_: PolyglotScript)
    andThen<V extends unknown>(arg0: (param0: PolyglotScript) => V): (param0: JavaMap<string, Object>) => V;
    /**
     * Global function 'registerScript' which is called to register a script.
     *
     * @param scriptObject JavaScript object containing information about the script.
     * @returns The instance of this script.
     *
     * Source: {@link https://github.com/CCBlueX/LiquidBounce/blob/a459e42039d5ec52f278233774c8880408bcf2a6/src/main/kotlin/net/ccbluex/liquidbounce/script/PolyglotScript.kt#L194 | src/main/kotlin/net/ccbluex/liquidbounce/script/PolyglotScript.kt:194}
     */
    apply(scriptObject: JavaMap<string, Object>): PolyglotScript;
    compose<V extends unknown>(arg0: (param0: V) => JavaMap<string, Object>): (param0: V) => PolyglotScript;
}