import type { Class } from '../../../../java/lang/Class.d.ts'
import type { Enum } from '../../../../java/lang/Enum.d.ts'
export class ContextChain$Stage extends Enum<ContextChain$Stage> {
    static EXECUTE: ContextChain$Stage;
    static MODIFY: ContextChain$Stage;
    static valueOf<T extends Enum<T>>(paramarg0: Class<T>, paramarg1: string): T;
    static valueOf(paramarg0: string): ContextChain$Stage;
    static values(): ContextChain$Stage[];
    private constructor()
    name(): "MODIFY" | "EXECUTE";
}