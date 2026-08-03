import type { Tagged$Companion } from '../../../../../../../../../net/ccbluex/liquidbounce/config/types/list/Tagged$Companion.d.ts'
import type { HatsMode } from '../../../../../../../../../net/ccbluex/liquidbounce/features/module/modules/render/hats/HatsMode.d.ts'
import type { Color4b } from '../../../../../../../../../net/ccbluex/liquidbounce/render/engine/type/Color4b.d.ts'
/**
 * @author minecrrrr
 *
 * Source: {@link https://github.com/CCBlueX/LiquidBounce/blob/a0e57b28307a88c68b5bf7b52a54201b8a15cec8/src/main/kotlin/net/ccbluex/liquidbounce/features/module/modules/render/hats/modes/HatsOrbs.kt#L38 | src/main/kotlin/net/ccbluex/liquidbounce/features/module/modules/render/hats/modes/HatsOrbs.kt:38}
 */
export class HatsOrbs extends HatsMode {
    static Companion: Tagged$Companion;
    static INSTANCE: HatsOrbs;
    readonly color: Color4b;
    getColor(): Color4b;
    // private getPointX(angle: number, radius: number): number;
    // private getPointZ(angle: number, radius: number): number;
}