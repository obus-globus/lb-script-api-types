import type { Class } from '../../../java/lang/Class.d.ts'
import type { Object } from '../../../java/lang/Object.d.ts'
import type { Enum } from '../../../java/lang/Enum.d.ts'
export class SnbtGrammar$Base extends Enum<SnbtGrammar$Base> {
    static BINARY: SnbtGrammar$Base;
    static DECIMAL: SnbtGrammar$Base;
    static HEX: SnbtGrammar$Base;
    static valueOf(paramarg0: Class<Object>, paramarg1: string): Object | null;
    static valueOf(paramname: string): SnbtGrammar$Base;
    static values(): (Object | null)[];
    private constructor()
    name(): "BINARY" | "DECIMAL" | "HEX";
}