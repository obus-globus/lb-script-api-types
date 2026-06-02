import type { Class } from '../../../../../../java/lang/Class.d.ts'
import type { Object } from '../../../../../../java/lang/Object.d.ts'
import type { Enum } from '../../../../../../java/lang/Enum.d.ts'
export class IOWorker$Priority extends Enum<IOWorker$Priority> {
    static BACKGROUND: IOWorker$Priority;
    static FOREGROUND: IOWorker$Priority;
    static SHUTDOWN: IOWorker$Priority;
    static valueOf(paramarg0: Class<Object>, paramarg1: string): Object | null;
    static valueOf(paramname: string): IOWorker$Priority;
    static values(): (Object | null)[];
    private constructor()
    name(): "FOREGROUND" | "BACKGROUND" | "SHUTDOWN";
}