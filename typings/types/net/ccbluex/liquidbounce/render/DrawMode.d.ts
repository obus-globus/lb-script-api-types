import type { Class } from '../../../../java/lang/Class.d.ts'
import type { Object } from '../../../../java/lang/Object.d.ts'
import type { Enum } from '../../../../java/lang/Enum.d.ts'
/**
 * Submission strategy for geometry started in {@link WorldRenderEnvironment}.
 *
 * Source: {@link https://github.com/CCBlueX/LiquidBounce/blob/b759cac57b26e54694d8c4d48af024a8fb598f62/src/main/kotlin/net/ccbluex/liquidbounce/render/Render3D.kt#L92 | src/main/kotlin/net/ccbluex/liquidbounce/render/Render3D.kt:92}
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