import type { Class } from '../../../../../../java/lang/Class.d.ts'
import type { Enum } from '../../../../../../java/lang/Enum.d.ts'
export class IOWorker$Priority extends Enum<IOWorker$Priority> {
    static BACKGROUND: IOWorker$Priority;
    static FOREGROUND: IOWorker$Priority;
    static SHUTDOWN: IOWorker$Priority;
    static valueOf<T extends Enum<T>>(paramarg0: Class<T>, paramarg1: string): T;
    static valueOf(paramname: string): IOWorker$Priority;
    static values(): IOWorker$Priority[];
    private constructor()
    name(): "FOREGROUND" | "BACKGROUND" | "SHUTDOWN";
}