import type { Class } from '../../../../java/lang/Class.d.ts'
import type { Object } from '../../../../java/lang/Object.d.ts'
import type { Enum } from '../../../../java/lang/Enum.d.ts'
export class AbstractConsecutiveExecutor$Status extends Enum<AbstractConsecutiveExecutor$Status> {
    static CLOSED: AbstractConsecutiveExecutor$Status;
    static RUNNING: AbstractConsecutiveExecutor$Status;
    static SLEEPING: AbstractConsecutiveExecutor$Status;
    static valueOf(paramarg0: Class<Object>, paramarg1: string): Object | null;
    static valueOf(paramname: string): AbstractConsecutiveExecutor$Status;
    static values(): AbstractConsecutiveExecutor$Status[];
    private constructor()
    name(): "SLEEPING" | "RUNNING" | "CLOSED";
}