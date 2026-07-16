import type { Class } from '../../../java/lang/Class.d.ts'
import type { StringBuilder } from '../../../java/lang/StringBuilder.d.ts'
import type { Object } from '../../../java/lang/Object.d.ts'
import type { Enum } from '../../../java/lang/Enum.d.ts'
export class SnbtGrammar$Sign extends Enum<SnbtGrammar$Sign> {
    static MINUS: SnbtGrammar$Sign;
    static PLUS: SnbtGrammar$Sign;
    static valueOf(paramarg0: Class<Object>, paramarg1: string): Object | null;
    static valueOf(paramname: string): SnbtGrammar$Sign;
    static values(): SnbtGrammar$Sign[];
    private constructor()
    append(output: StringBuilder): void;
    name(): "PLUS" | "MINUS";
}