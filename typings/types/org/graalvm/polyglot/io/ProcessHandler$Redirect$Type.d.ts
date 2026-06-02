import type { Class } from '../../../../java/lang/Class.d.ts'
import type { Object } from '../../../../java/lang/Object.d.ts'
import type { Enum } from '../../../../java/lang/Enum.d.ts'
export class ProcessHandler$Redirect$Type extends Enum<ProcessHandler$Redirect$Type> {
    static INHERIT: ProcessHandler$Redirect$Type;
    static PIPE: ProcessHandler$Redirect$Type;
    static STREAM: ProcessHandler$Redirect$Type;
    static valueOf(paramarg0: Class<Object>, paramarg1: string): Object | null;
    static valueOf(paramname: string): ProcessHandler$Redirect$Type;
    static values(): (Object | null)[];
    private constructor()
    name(): "PIPE" | "INHERIT" | "STREAM";
}