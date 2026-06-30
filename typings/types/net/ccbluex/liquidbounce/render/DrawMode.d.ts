import type { Class } from '../../../../java/lang/Class.d.ts'
import type { Object } from '../../../../java/lang/Object.d.ts'
import type { Enum } from '../../../../java/lang/Enum.d.ts'
/**
 * Submission strategy for geometry started in {@link WorldRenderEnvironment}.
 *
 * Source: {@link https://github.com/CCBlueX/LiquidBounce/blob/553a3caf47807e98e69ea3ce0e17bcd9e52eeb71/src/main/kotlin/net/ccbluex/liquidbounce/render/Render3D.kt#L95 | src/main/kotlin/net/ccbluex/liquidbounce/render/Render3D.kt:95}
 */
export class DrawMode extends Enum<DrawMode> {
    static BATCH: DrawMode;
    static IMMEDIATE: DrawMode;
    static getEntries(): DrawMode[];
    static valueOf(paramarg0: Class<Object>, paramarg1: string): Object | null;
    static valueOf(paramarg0: string): DrawMode;
    static values(): (Object | null)[];
    private constructor()
    name(): "IMMEDIATE" | "BATCH";
}