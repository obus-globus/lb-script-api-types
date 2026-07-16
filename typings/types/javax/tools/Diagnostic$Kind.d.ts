import type { Class } from '../../java/lang/Class.d.ts'
import type { Enum } from '../../java/lang/Enum.d.ts'
export class Diagnostic$Kind extends Enum<Diagnostic$Kind> {
    static ERROR: Diagnostic$Kind;
    static MANDATORY_WARNING: Diagnostic$Kind;
    static NOTE: Diagnostic$Kind;
    static OTHER: Diagnostic$Kind;
    static WARNING: Diagnostic$Kind;
    static valueOf<T extends Enum<T>>(paramarg0: Class<T>, paramarg1: string): T;
    static valueOf(paramarg0: string): Diagnostic$Kind;
    static values(): Diagnostic$Kind[];
    private constructor()
    name(): "ERROR" | "WARNING" | "MANDATORY_WARNING" | "NOTE" | "OTHER";
}