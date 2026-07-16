import type { Class } from '../../../java/lang/Class.d.ts'
import type { Enum } from '../../../java/lang/Enum.d.ts'
export class SnbtGrammar$TypeSuffix extends Enum<SnbtGrammar$TypeSuffix> {
    static BYTE: SnbtGrammar$TypeSuffix;
    static DOUBLE: SnbtGrammar$TypeSuffix;
    static FLOAT: SnbtGrammar$TypeSuffix;
    static INT: SnbtGrammar$TypeSuffix;
    static LONG: SnbtGrammar$TypeSuffix;
    static SHORT: SnbtGrammar$TypeSuffix;
    static valueOf<T extends Enum<T>>(paramarg0: Class<T>, paramarg1: string): T;
    static valueOf(paramname: string): SnbtGrammar$TypeSuffix;
    static values(): SnbtGrammar$TypeSuffix[];
    private constructor()
    name(): "FLOAT" | "DOUBLE" | "BYTE" | "SHORT" | "INT" | "LONG";
}