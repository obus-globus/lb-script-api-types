import type { Object } from '../../../../../../java/lang/Object.d.ts'
import type { NanoClock } from '../../../../../../org/apache/logging/log4j/core/util/NanoClock.d.ts'
export class SystemNanoClock extends Object implements NanoClock {
    constructor()
    nanoTime(): number;
}