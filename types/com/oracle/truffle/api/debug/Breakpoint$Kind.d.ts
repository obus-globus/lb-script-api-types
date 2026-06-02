import type { Class } from '../../../../../java/lang/Class.d.ts'
import type { Object } from '../../../../../java/lang/Object.d.ts'
import type { Enum } from '../../../../../java/lang/Enum.d.ts'
export class Breakpoint$Kind extends Enum<Breakpoint$Kind> {
    static EXCEPTION: Breakpoint$Kind;
    static HALT_INSTRUCTION: Breakpoint$Kind;
    static SOURCE_LOCATION: Breakpoint$Kind;
    static valueOf(paramarg0: Class<Object>, paramarg1: string): Object | null;
    static valueOf(paramname: string): Breakpoint$Kind;
    static values(): (Object | null)[];
    private constructor()
    name(): "HALT_INSTRUCTION" | "SOURCE_LOCATION" | "EXCEPTION";
}