import type { Class } from '../../../../../java/lang/Class.d.ts'
import type { Enum } from '../../../../../java/lang/Enum.d.ts'
export class Breakpoint$Kind extends Enum<Breakpoint$Kind> {
    static EXCEPTION: Breakpoint$Kind;
    static HALT_INSTRUCTION: Breakpoint$Kind;
    static SOURCE_LOCATION: Breakpoint$Kind;
    static valueOf<T extends Enum<T>>(paramarg0: Class<T>, paramarg1: string): T;
    static valueOf(paramname: string): Breakpoint$Kind;
    static values(): Breakpoint$Kind[];
    private constructor()
    name(): "HALT_INSTRUCTION" | "SOURCE_LOCATION" | "EXCEPTION";
}