import type { Object } from '../../../../../../../../../java/lang/Object.d.ts'
import type { NbsData } from '../../../../../../../../../net/ccbluex/liquidbounce/features/module/modules/fun/notebot/nbs/NbsData.d.ts'
import type { BufferedSource } from '../../../../../../../../../okio/BufferedSource.d.ts'
export class NbsKt extends Object {
    /**
     * https://opennbs.org/nbs
     *
     * Source: {@link https://github.com/CCBlueX/LiquidBounce/blob/e67fdf9b70131f478c5894cf9de1f2d4aa7a95ce/src/main/kotlin/net/ccbluex/liquidbounce/features/module/modules/fun/notebot/nbs/Nbs.kt#L28 | src/main/kotlin/net/ccbluex/liquidbounce/features/module/modules/fun/notebot/nbs/Nbs.kt:28}
     */
    static readNbsData(self: BufferedSource): NbsData;
}