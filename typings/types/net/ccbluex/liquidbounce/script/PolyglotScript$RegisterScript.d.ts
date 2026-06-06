import type { Function } from '../../../../java/util/function/Function.d.ts'
import type { Object } from '../../../../java/lang/Object.d.ts'
import type { PolyglotScript } from '../../../../net/ccbluex/liquidbounce/script/PolyglotScript.d.ts'
export class PolyglotScript$RegisterScript extends Object implements Function<{ [key: string]: Object }, PolyglotScript> {
    static identity(): (param0: Object | null) => Object | null;
    constructor(null_: PolyglotScript$RegisterScript)
    andThen(arg0: (param0: R) => V): (param0: T) => V;
    /**
     * Global function 'registerScript' which is called to register a script.
     *
     * @param scriptObject JavaScript object containing information about the script.
     * @returns The instance of this script.
     *
     * Source: {@link https://github.com/CCBlueX/LiquidBounce/blob/b759cac57b26e54694d8c4d48af024a8fb598f62/src/main/kotlin/net/ccbluex/liquidbounce/script/PolyglotScript.kt#L189 | src/main/kotlin/net/ccbluex/liquidbounce/script/PolyglotScript.kt:189}
     */
    apply(scriptObject: { [key: string]: Object }): PolyglotScript;
    compose(arg0: (param0: V) => T): (param0: V) => R;
}