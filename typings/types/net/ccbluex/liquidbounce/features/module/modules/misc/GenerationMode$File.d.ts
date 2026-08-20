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
     * Source: {@link https://github.com/CCBlueX/LiquidBounce/blob/a9cf2b145901ecd37d3f2a815c20cf0955e76853/src/main/kotlin/net/ccbluex/liquidbounce/features/module/modules/misc/ModuleBookBot.kt#L317 | src/main/kotlin/net/ccbluex/liquidbounce/features/module/modules/misc/ModuleBookBot.kt:317}
     */
    generate(): IntStream;
}