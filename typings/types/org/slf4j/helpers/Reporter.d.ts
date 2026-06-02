import type { Object } from '../../../java/lang/Object.d.ts'
import type { Throwable } from '../../../java/lang/Throwable.d.ts'
export class Reporter extends Object {
    static SLF4J_INTERNAL_REPORT_STREAM_KEY: string;
    static SLF4J_INTERNAL_VERBOSITY_KEY: string;
    static debug(paramarg0: string): void;
    static error(paramarg0: string): void;
    static error(paramarg0: string, paramarg1: Throwable): void;
    static info(paramarg0: string): void;
    static warn(paramarg0: string): void;
    constructor()
}