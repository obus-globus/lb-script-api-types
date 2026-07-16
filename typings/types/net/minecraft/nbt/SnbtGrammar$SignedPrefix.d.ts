import type { Class } from '../../../java/lang/Class.d.ts'
import type { Object } from '../../../java/lang/Object.d.ts'
import type { Enum } from '../../../java/lang/Enum.d.ts'
export class SnbtGrammar$SignedPrefix extends Enum<SnbtGrammar$SignedPrefix> {
    static SIGNED: SnbtGrammar$SignedPrefix;
    static UNSIGNED: SnbtGrammar$SignedPrefix;
    static valueOf(paramarg0: Class<Object>, paramarg1: string): Object | null;
    static valueOf(paramname: string): SnbtGrammar$SignedPrefix;
    static values(): SnbtGrammar$SignedPrefix[];
    private constructor()
    name(): "SIGNED" | "UNSIGNED";
}