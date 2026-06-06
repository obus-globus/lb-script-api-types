import type { Object } from '../../../../../../java/lang/Object.d.ts'
/**
 * The main hub of the ScriptAPI that provides access to a useful set of members.
 *
 * Source: {@link https://github.com/CCBlueX/LiquidBounce/blob/b759cac57b26e54694d8c4d48af024a8fb598f62/src/main/kotlin/net/ccbluex/liquidbounce/script/bindings/api/ScriptContextProvider.kt#L35 | src/main/kotlin/net/ccbluex/liquidbounce/script/bindings/api/ScriptContextProvider.kt:35}
 */
export class ScriptContextProvider extends Object {
    static INSTANCE: ScriptContextProvider;
    // private localStorage: { [key: string]: Object };
    cleanup(): void;
}