import type { Object } from '../../../../../../../../../java/lang/Object.d.ts'
import type { NbsData } from '../../../../../../../../../net/ccbluex/liquidbounce/features/module/modules/fun/notebot/nbs/NbsData.d.ts'
import type { BufferedSource } from '../../../../../../../../../okio/BufferedSource.d.ts'
export class NbsKt extends Object {
    /**
     * https://opennbs.org/nbs
     *
     * Source: {@link https://github.com/CCBlueX/LiquidBounce/blob/64f9c02ca90d2728f0d1fffd459b622eb8239747/src/main/kotlin/net/ccbluex/liquidbounce/features/module/modules/fun/notebot/nbs/Nbs.kt#L28 | src/main/kotlin/net/ccbluex/liquidbounce/features/module/modules/fun/notebot/nbs/Nbs.kt:28}
     */
    static readNbsData(self: BufferedSource): NbsData;
}