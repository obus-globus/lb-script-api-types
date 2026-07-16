import type { Class } from '../../../../java/lang/Class.d.ts'
import type { Enum } from '../../../../java/lang/Enum.d.ts'
export class ProcessHandler$Redirect$Type extends Enum<ProcessHandler$Redirect$Type> {
    static INHERIT: ProcessHandler$Redirect$Type;
    static PIPE: ProcessHandler$Redirect$Type;
    static STREAM: ProcessHandler$Redirect$Type;
    static valueOf<T extends Enum<T>>(paramarg0: Class<T>, paramarg1: string): T;
    static valueOf(paramname: string): ProcessHandler$Redirect$Type;
    static values(): ProcessHandler$Redirect$Type[];
    private constructor()
    name(): "PIPE" | "INHERIT" | "STREAM";
}