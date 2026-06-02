import type { Level } from '../../../../../../java/util/logging/Level.d.ts'
import type { Object } from '../../../../../../java/lang/Object.d.ts'
import type { Throwable } from '../../../../../../java/lang/Throwable.d.ts'
export interface LanguageServer$LoggerProxy extends Object{
    isLoggable(level: Level): boolean;
    log(level: Level, msg: string): void;
    log(level: Level, msg: string, thrown: Throwable): void;
}