import type { Class } from '../../../java/lang/Class.d.ts'
import type { Enum } from '../../../java/lang/Enum.d.ts'
export class WhenToOutput extends Enum<WhenToOutput> {
    static ALWAYS: WhenToOutput;
    static IF_NONZERO: WhenToOutput;
    static NEVER: WhenToOutput;
    static getEntries(): WhenToOutput[];
    static valueOf<T extends Enum<T>>(paramarg0: Class<T>, paramarg1: string): T;
    static valueOf(value: string): WhenToOutput;
    static values(): WhenToOutput[];
    private constructor()
    name(): "NEVER" | "IF_NONZERO" | "ALWAYS";
}