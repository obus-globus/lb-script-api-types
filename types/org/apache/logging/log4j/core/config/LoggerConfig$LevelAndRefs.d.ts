import type { Object } from '../../../../../../java/lang/Object.d.ts'
import type { Level } from '../../../../../../org/apache/logging/log4j/Level.d.ts'
import type { AppenderRef } from '../../../../../../org/apache/logging/log4j/core/config/AppenderRef.d.ts'
export class LoggerConfig$LevelAndRefs extends Object {
    constructor()
    level: Level;
    refs: AppenderRef[];
}