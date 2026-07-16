import type { Class } from '../../../java/lang/Class.d.ts'
import type { Enum } from '../../../java/lang/Enum.d.ts'
export class Pattern$Qtype extends Enum<Pattern$Qtype> {
    static GREEDY: Pattern$Qtype;
    static INDEPENDENT: Pattern$Qtype;
    static LAZY: Pattern$Qtype;
    static POSSESSIVE: Pattern$Qtype;
    static valueOf<T extends Enum<T>>(paramarg0: Class<T>, paramarg1: string): T;
    static valueOf(paramarg0: string): Pattern$Qtype;
    static values(): Pattern$Qtype[];
    private constructor()
    name(): "GREEDY" | "LAZY" | "POSSESSIVE" | "INDEPENDENT";
}