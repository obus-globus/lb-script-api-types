import type { ConsoleAppender$1 } from '../../../../../../com/google/gson/LongSerializationPolicy$1.d.ts'
import type { Class } from '../../../../../../java/lang/Class.d.ts'
import type { Charset } from '../../../../../../java/nio/charset/Charset.d.ts'
import type { Object } from '../../../../../../java/lang/Object.d.ts'
import type { Enum } from '../../../../../../java/lang/Enum.d.ts'
export class ConsoleAppender$Target extends Enum<ConsoleAppender$Target> {
    static SYSTEM_ERR: ConsoleAppender$Target;
    static SYSTEM_OUT: ConsoleAppender$Target;
    static valueOf(paramarg0: Class<Object>, paramarg1: string): Object | null;
    static valueOf(paramname: string): ConsoleAppender$Target;
    static values(): (Object | null)[];
    private constructor()
    constructor(arg2: ConsoleAppender$1)
    getCharset(property: string, defaultCharset: Charset): Charset;
    getDefaultCharset(): Charset;
    name(): "SYSTEM_OUT" | "SYSTEM_ERR";
}