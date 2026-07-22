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
     * Source: {@link https://github.com/CCBlueX/LiquidBounce/blob/8e0e9ae29646a28b89fab862af8179223121e5bd/src/main/kotlin/net/ccbluex/liquidbounce/features/module/modules/misc/ModuleBookBot.kt#L317 | src/main/kotlin/net/ccbluex/liquidbounce/features/module/modules/misc/ModuleBookBot.kt:317}
     */
    generate(): IntStream;
}