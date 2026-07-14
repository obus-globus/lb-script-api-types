import type { Object } from '../../../../../../java/lang/Object.d.ts'
/**
 * The main hub of the ScriptAPI that provides access to a useful set of members.
 *
 * Source: {@link https://github.com/CCBlueX/LiquidBounce/blob/26472f4415000921e37ac654ef9e544e7d3750c9/src/main/kotlin/net/ccbluex/liquidbounce/script/bindings/api/ScriptContextProvider.kt#L38 | src/main/kotlin/net/ccbluex/liquidbounce/script/bindings/api/ScriptContextProvider.kt:38}
 */
export class ScriptContextProvider extends Object {
    static INSTANCE: ScriptContextProvider;
    // private localStorage: { [key: string]: Object };
    cleanup(): void;
}