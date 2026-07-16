import type { Class } from '../../../../../../java/lang/Class.d.ts'
import type { Object } from '../../../../../../java/lang/Object.d.ts'
import type { Enum } from '../../../../../../java/lang/Enum.d.ts'
export class Behavior$Status extends Enum<Behavior$Status> {
    static RUNNING: Behavior$Status;
    static STOPPED: Behavior$Status;
    static valueOf(paramarg0: Class<Object>, paramarg1: string): Object | null;
    static valueOf(paramname: string): Behavior$Status;
    static values(): Behavior$Status[];
    private constructor()
    name(): "STOPPED" | "RUNNING";
}