import type { Class } from '../../../java/lang/Class.d.ts'
import type { Object } from '../../../java/lang/Object.d.ts'
import type { Enum } from '../../../java/lang/Enum.d.ts'
export class Pattern$Qtype extends Enum<Pattern$Qtype> {
    static GREEDY: Pattern$Qtype;
    static INDEPENDENT: Pattern$Qtype;
    static LAZY: Pattern$Qtype;
    static POSSESSIVE: Pattern$Qtype;
    static valueOf(paramarg0: Class<Object>, paramarg1: string): Object | null;
    static valueOf(paramarg0: string): Pattern$Qtype;
    static values(): (Object | null)[];
    private constructor()
    name(): "GREEDY" | "LAZY" | "POSSESSIVE" | "INDEPENDENT";
}