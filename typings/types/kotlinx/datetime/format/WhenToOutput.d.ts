import type { Class } from '../../../java/lang/Class.d.ts'
import type { Object } from '../../../java/lang/Object.d.ts'
import type { Enum } from '../../../java/lang/Enum.d.ts'
export class WhenToOutput extends Enum<WhenToOutput> {
    static ALWAYS: WhenToOutput;
    static IF_NONZERO: WhenToOutput;
    static NEVER: WhenToOutput;
    static getEntries(): WhenToOutput[];
    static valueOf(paramarg0: Class<Object>, paramarg1: string): Object | null;
    static valueOf(paramarg0: string): WhenToOutput;
    static values(): WhenToOutput[];
    private constructor()
    name(): "NEVER" | "IF_NONZERO" | "ALWAYS";
}