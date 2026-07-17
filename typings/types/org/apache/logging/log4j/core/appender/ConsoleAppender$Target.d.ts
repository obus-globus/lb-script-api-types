import type { Class } from '../../../../../../java/lang/Class.d.ts'
import type { Charset } from '../../../../../../java/nio/charset/Charset.d.ts'
import type { Enum } from '../../../../../../java/lang/Enum.d.ts'
export class ConsoleAppender$Target extends Enum<ConsoleAppender$Target> {
    static SYSTEM_ERR: ConsoleAppender$Target;
    static SYSTEM_OUT: ConsoleAppender$Target;
    static valueOf<T extends Enum<T>>(paramarg0: Class<T>, paramarg1: string): T;
    static valueOf(paramname: string): ConsoleAppender$Target;
    static values(): ConsoleAppender$Target[];
    private constructor()
    getCharset(property: string, defaultCharset: Charset): Charset;
    getDefaultCharset(): Charset;
    name(): "SYSTEM_OUT" | "SYSTEM_ERR";
}