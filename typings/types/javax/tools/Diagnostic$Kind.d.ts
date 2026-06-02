import type { Class } from '../../java/lang/Class.d.ts'
import type { Object } from '../../java/lang/Object.d.ts'
import type { Enum } from '../../java/lang/Enum.d.ts'
export class Diagnostic$Kind extends Enum<Diagnostic$Kind> {
    static ERROR: Diagnostic$Kind;
    static MANDATORY_WARNING: Diagnostic$Kind;
    static NOTE: Diagnostic$Kind;
    static OTHER: Diagnostic$Kind;
    static WARNING: Diagnostic$Kind;
    static valueOf(paramarg0: Class<Object>, paramarg1: string): Object | null;
    static valueOf(paramarg0: string): Diagnostic$Kind;
    static values(): (Object | null)[];
    private constructor()
    name(): "ERROR" | "WARNING" | "MANDATORY_WARNING" | "NOTE" | "OTHER";
}