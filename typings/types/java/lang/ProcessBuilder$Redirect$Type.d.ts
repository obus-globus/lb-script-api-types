import type { Class } from '../../java/lang/Class.d.ts'
import type { Enum } from '../../java/lang/Enum.d.ts'
export class ProcessBuilder$Redirect$Type extends Enum<ProcessBuilder$Redirect$Type> {
    static APPEND: ProcessBuilder$Redirect$Type;
    static INHERIT: ProcessBuilder$Redirect$Type;
    static PIPE: ProcessBuilder$Redirect$Type;
    static READ: ProcessBuilder$Redirect$Type;
    static WRITE: ProcessBuilder$Redirect$Type;
    static valueOf<T extends Enum<T>>(paramarg0: Class<T>, paramarg1: string): T;
    static valueOf(paramarg0: string): ProcessBuilder$Redirect$Type;
    static values(): ProcessBuilder$Redirect$Type[];
    private constructor()
    name(): "PIPE" | "INHERIT" | "READ" | "WRITE" | "APPEND";
}