import type { Serializable } from '../../java/io/Serializable.d.ts'
import type { Class } from '../../java/lang/Class.d.ts'
import type { Enum } from '../../java/lang/Enum.d.ts'
import type { FlagEnum } from '../../kotlin/text/FlagEnum.d.ts'
export class RegexOption extends Enum<RegexOption> implements Serializable, FlagEnum {
    static CANON_EQ: RegexOption;
    static COMMENTS: RegexOption;
    static DOT_MATCHES_ALL: RegexOption;
    static IGNORE_CASE: RegexOption;
    static LITERAL: RegexOption;
    static MULTILINE: RegexOption;
    static UNIX_LINES: RegexOption;
    static getEntries(): RegexOption[];
    static valueOf<T extends Enum<T>>(paramarg0: Class<T>, paramarg1: string): T;
    static valueOf(value: string): RegexOption;
    static values(): RegexOption[];
    private constructor(value: number, mask: number)
    readonly mask: number;
    readonly value: number;
    name(): "IGNORE_CASE" | "MULTILINE" | "LITERAL" | "UNIX_LINES" | "COMMENTS" | "DOT_MATCHES_ALL" | "CANON_EQ";
}