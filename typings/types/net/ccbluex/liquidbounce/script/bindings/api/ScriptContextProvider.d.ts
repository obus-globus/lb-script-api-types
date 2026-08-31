import type { JavaMap } from '../../../../../../JavaMap.d.ts'
import type { Object } from '../../../../../../java/lang/Object.d.ts'
/**
 * The main hub of the ScriptAPI that provides access to a useful set of members.
 *
 * Source: {@link https://github.com/CCBlueX/LiquidBounce/blob/e67fdf9b70131f478c5894cf9de1f2d4aa7a95ce/src/main/kotlin/net/ccbluex/liquidbounce/script/bindings/api/ScriptContextProvider.kt#L38 | src/main/kotlin/net/ccbluex/liquidbounce/script/bindings/api/ScriptContextProvider.kt:38}
 */
export class ScriptContextProvider extends Object {
    static INSTANCE: ScriptContextProvider;
    // private localStorage: JavaMap<string, Object>;
    cleanup(): void;
}