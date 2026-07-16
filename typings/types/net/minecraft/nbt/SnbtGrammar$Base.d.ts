import type { Class } from '../../../java/lang/Class.d.ts'
import type { Enum } from '../../../java/lang/Enum.d.ts'
export class SnbtGrammar$Base extends Enum<SnbtGrammar$Base> {
    static BINARY: SnbtGrammar$Base;
    static DECIMAL: SnbtGrammar$Base;
    static HEX: SnbtGrammar$Base;
    static valueOf<T extends Enum<T>>(paramarg0: Class<T>, paramarg1: string): T;
    static valueOf(paramname: string): SnbtGrammar$Base;
    static values(): SnbtGrammar$Base[];
    private constructor()
    name(): "BINARY" | "DECIMAL" | "HEX";
}