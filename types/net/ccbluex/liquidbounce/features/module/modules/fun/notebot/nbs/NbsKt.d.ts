import type { Object } from '../../../../../../../../../java/lang/Object.d.ts'
import type { NbsData } from '../../../../../../../../../net/ccbluex/liquidbounce/features/module/modules/fun/notebot/nbs/NbsData.d.ts'
import type { BufferedSource } from '../../../../../../../../../okio/BufferedSource.d.ts'
export class NbsKt extends Object {
    /**
     * https://opennbs.org/nbs
     *
     * Source: {@link https://github.com/CCBlueX/LiquidBounce/blob/fac52d9c85c85141cb327e00599cdf8e0a7afc66/src/main/kotlin/net/ccbluex/liquidbounce/features/module/modules/fun/notebot/nbs/Nbs.kt#L24 | src/main/kotlin/net/ccbluex/liquidbounce/features/module/modules/fun/notebot/nbs/Nbs.kt:24}
     */
    static readNbsData(paramarg0: BufferedSource): NbsData;
}