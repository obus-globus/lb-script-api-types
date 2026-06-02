import type { Random } from '../../../../../../../java/util/Random.d.ts'
import type { IntStream } from '../../../../../../../java/util/stream/IntStream.d.ts'
import type { Object } from '../../../../../../../java/lang/Object.d.ts'
import type { Mode } from '../../../../../../../net/ccbluex/liquidbounce/config/types/group/Mode.d.ts'
import type { ModeValueGroup } from '../../../../../../../net/ccbluex/liquidbounce/config/types/group/ModeValueGroup.d.ts'
import type { Tagged$Companion } from '../../../../../../../net/ccbluex/liquidbounce/config/types/list/Tagged$Companion.d.ts'
export class GenerationMode extends Mode {
    static Companion: Tagged$Companion;
    protected constructor(name: string)
    readonly pages: number;
    readonly parent: ModeValueGroup<Object>;
    // private random: Random;
    /*not mapped: */ getRandom$liquidbounce(): Random;
    generate(): IntStream;
}