import type { Class } from '../../../../../../../java/lang/Class.d.ts'
import type { Object } from '../../../../../../../java/lang/Object.d.ts'
import type { Enum } from '../../../../../../../java/lang/Enum.d.ts'
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
    static fromIdentifier(paramidentifier: string): DisplayOptions$GrammaticalCase;
    static valueOf(paramarg0: Class<Object>, paramarg1: string): Object | null;
    static valueOf(paramname: string): DisplayOptions$GrammaticalCase;
    static values(): (Object | null)[];
    private constructor(identifier: string)
    readonly identifier: string;
    getIdentifier(): string;
    name(): "UNDEFINED" | "ABLATIVE" | "ACCUSATIVE" | "COMITATIVE" | "DATIVE" | "ERGATIVE" | "GENITIVE" | "INSTRUMENTAL" | "LOCATIVE" | "LOCATIVE_COPULATIVE" | "NOMINATIVE" | "OBLIQUE" | "PREPOSITIONAL" | "SOCIATIVE" | "VOCATIVE";
}