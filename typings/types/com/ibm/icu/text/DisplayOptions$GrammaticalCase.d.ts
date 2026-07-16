import type { Class } from '../../../../java/lang/Class.d.ts'
import type { Enum } from '../../../../java/lang/Enum.d.ts'
export class DisplayOptions$GrammaticalCase extends Enum<DisplayOptions$GrammaticalCase> {
    static ABLATIVE: DisplayOptions$GrammaticalCase;
    static ACCUSATIVE: DisplayOptions$GrammaticalCase;
    static COMITATIVE: DisplayOptions$GrammaticalCase;
    static DATIVE: DisplayOptions$GrammaticalCase;
    static ERGATIVE: DisplayOptions$GrammaticalCase;
    static GENITIVE: DisplayOptions$GrammaticalCase;
    static INSTRUMENTAL: DisplayOptions$GrammaticalCase;
    static LOCATIVE: DisplayOptions$GrammaticalCase;
    static LOCATIVE_COPULATIVE: DisplayOptions$GrammaticalCase;
    static NOMINATIVE: DisplayOptions$GrammaticalCase;
    static OBLIQUE: DisplayOptions$GrammaticalCase;
    static PREPOSITIONAL: DisplayOptions$GrammaticalCase;
    static SOCIATIVE: DisplayOptions$GrammaticalCase;
    static UNDEFINED: DisplayOptions$GrammaticalCase;
    static VALUES: DisplayOptions$GrammaticalCase[];
    static VOCATIVE: DisplayOptions$GrammaticalCase;
    static fromIdentifier(paramarg0: string): DisplayOptions$GrammaticalCase;
    static valueOf<T extends Enum<T>>(paramarg0: Class<T>, paramarg1: string): T;
    static valueOf(paramarg0: string): DisplayOptions$GrammaticalCase;
    static values(): DisplayOptions$GrammaticalCase[];
    private constructor(arg2: string)
    readonly identifier: string;
    getIdentifier(): string;
    name(): "UNDEFINED" | "ABLATIVE" | "ACCUSATIVE" | "COMITATIVE" | "DATIVE" | "ERGATIVE" | "GENITIVE" | "INSTRUMENTAL" | "LOCATIVE" | "LOCATIVE_COPULATIVE" | "NOMINATIVE" | "OBLIQUE" | "PREPOSITIONAL" | "SOCIATIVE" | "VOCATIVE";
}