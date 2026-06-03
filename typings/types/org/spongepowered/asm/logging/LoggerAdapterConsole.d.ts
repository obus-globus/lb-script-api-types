import type { PrintStream } from '../../../../java/io/PrintStream.d.ts'
import type { Object } from '../../../../java/lang/Object.d.ts'
import type { Throwable } from '../../../../java/lang/Throwable.d.ts'
import type { Level } from '../../../../org/spongepowered/asm/logging/Level.d.ts'
import type { LoggerAdapterAbstract } from '../../../../org/spongepowered/asm/logging/LoggerAdapterAbstract.d.ts'
export class LoggerAdapterConsole extends LoggerAdapterAbstract {
    constructor(arg0: string)
    // private debug: PrintStream;
    catching(arg0: Throwable): void;
    catching(arg0: Level, arg1: Throwable): void;
    // private getOutputStream(arg0: Level): PrintStream;
    getType(): string;
    log(arg0: Level, arg1: string, arg2: Object[]): void;
    log(arg0: Level, arg1: string, arg2: Throwable): void;
    setDebugStream(arg0: PrintStream): LoggerAdapterConsole;
    throwing<T extends Throwable>(arg0: T): T;
}