import type { Class } from '../../java/lang/Class.d.ts'
import type { Object } from '../../java/lang/Object.d.ts'
import type { Enum } from '../../java/lang/Enum.d.ts'
export class ProcessBuilder$Redirect$Type extends Enum<ProcessBuilder$Redirect$Type> {
    static APPEND: ProcessBuilder$Redirect$Type;
    static INHERIT: ProcessBuilder$Redirect$Type;
    static PIPE: ProcessBuilder$Redirect$Type;
    static READ: ProcessBuilder$Redirect$Type;
    static WRITE: ProcessBuilder$Redirect$Type;
    static valueOf(paramarg0: Class<Object>, paramarg1: string): Object | null;
    static valueOf(paramarg0: string): ProcessBuilder$Redirect$Type;
    static values(): (Object | null)[];
    private constructor()
    name(): "PIPE" | "INHERIT" | "READ" | "WRITE" | "APPEND";
}