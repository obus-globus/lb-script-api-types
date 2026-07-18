import type { Class } from '../../../../java/lang/Class.d.ts'
import type { Enum } from '../../../../java/lang/Enum.d.ts'
export class HeaderValueEncoding extends Enum<HeaderValueEncoding> {
    static QUOTED_ALWAYS: HeaderValueEncoding;
    static QUOTED_WHEN_REQUIRED: HeaderValueEncoding;
    static URI_ENCODE: HeaderValueEncoding;
    static getEntries(): HeaderValueEncoding[];
    static valueOf<T extends Enum<T>>(paramarg0: Class<T>, paramarg1: string): T;
    static valueOf(value: string): HeaderValueEncoding;
    static values(): HeaderValueEncoding[];
    private constructor()
    name(): "QUOTED_WHEN_REQUIRED" | "QUOTED_ALWAYS" | "URI_ENCODE";
}