import type { Object } from '../../../../../../java/lang/Object.d.ts'
/**
 * The main hub of the ScriptAPI that provides access to a useful set of members.
 *
 * Source: {@link https://github.com/CCBlueX/LiquidBounce/blob/fac52d9c85c85141cb327e00599cdf8e0a7afc66/src/main/kotlin/net/ccbluex/liquidbounce/script/bindings/api/ScriptContextProvider.kt#L35 | src/main/kotlin/net/ccbluex/liquidbounce/script/bindings/api/ScriptContextProvider.kt:35}
 */
export class ScriptContextProvider extends Object {
    static INSTANCE: ScriptContextProvider;
    // private localStorage: { [key: string]: Object };
    cleanup(): void;
}