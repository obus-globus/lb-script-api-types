import type { IntStream } from '../../../../../../../java/util/stream/IntStream.d.ts'
import type { FileValue } from '../../../../../../../net/ccbluex/liquidbounce/config/types/FileValue.d.ts'
import type { Tagged$Companion } from '../../../../../../../net/ccbluex/liquidbounce/config/types/list/Tagged$Companion.d.ts'
import type { GenerationMode } from '../../../../../../../net/ccbluex/liquidbounce/features/module/modules/misc/GenerationMode.d.ts'
export class GenerationMode$File extends GenerationMode {
    static Companion: Tagged$Companion;
    static INSTANCE: GenerationMode$File;
    // private MAX_CODE_POINTS: number;
    // private cyclic: boolean;
    // private /*not mapped: */ getCyclic(): boolean;
    // private source: FileValue;
    /**
     * @author sqlerrorthing, MukjepScarlet
     *
     * Source: {@link https://github.com/CCBlueX/LiquidBounce/blob/b7cc679e71b1bc95d19a1e1535f79a1c2164149e/src/main/kotlin/net/ccbluex/liquidbounce/features/module/modules/misc/ModuleBookBot.kt#L317 | src/main/kotlin/net/ccbluex/liquidbounce/features/module/modules/misc/ModuleBookBot.kt:317}
     */
    generate(): IntStream;
}