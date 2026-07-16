import type { Class } from '../../../java/lang/Class.d.ts'
import type { Enum } from '../../../java/lang/Enum.d.ts'
export class Warning extends Enum<Warning> {
    static ENDIF_LABELS: Warning;
    static ERROR: Warning;
    static IMPORT: Warning;
    static TRIGRAPHS: Warning;
    static UNDEF: Warning;
    static UNUSED_MACROS: Warning;
    static valueOf<T extends Enum<T>>(paramarg0: Class<T>, paramarg1: string): T;
    static valueOf(paramarg0: string): Warning;
    static values(): Warning[];
    private constructor()
    name(): "TRIGRAPHS" | "IMPORT" | "UNDEF" | "UNUSED_MACROS" | "ENDIF_LABELS" | "ERROR";
}