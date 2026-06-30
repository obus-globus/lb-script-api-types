import type { IntStream } from '../../../../../../../java/util/stream/IntStream.d.ts'
import type { Tagged$Companion } from '../../../../../../../net/ccbluex/liquidbounce/config/types/list/Tagged$Companion.d.ts'
import type { GenerationMode } from '../../../../../../../net/ccbluex/liquidbounce/features/module/modules/misc/GenerationMode.d.ts'
export class GenerationMode$Random extends GenerationMode {
    static Companion: Tagged$Companion;
    static INSTANCE: GenerationMode$Random;
    // private allowSpace: boolean;
    // private /*not mapped: */ getAllowSpace(): boolean;
    // private asciiOnly: boolean;
    // private /*not mapped: */ getAsciiOnly(): boolean;
    generate(): IntStream;
}