import type { Object } from '../../../../../../../../../java/lang/Object.d.ts'
import type { NbsData } from '../../../../../../../../../net/ccbluex/liquidbounce/features/module/modules/fun/notebot/nbs/NbsData.d.ts'
import type { BufferedSource } from '../../../../../../../../../okio/BufferedSource.d.ts'
export class NbsKt extends Object {
    /**
     * https://opennbs.org/nbs
     *
     * Source: {@link https://github.com/CCBlueX/LiquidBounce/blob/b759cac57b26e54694d8c4d48af024a8fb598f62/src/main/kotlin/net/ccbluex/liquidbounce/features/module/modules/fun/notebot/nbs/Nbs.kt#L24 | src/main/kotlin/net/ccbluex/liquidbounce/features/module/modules/fun/notebot/nbs/Nbs.kt:24}
     */
    static readNbsData(bufferedSource: BufferedSource): NbsData;
}