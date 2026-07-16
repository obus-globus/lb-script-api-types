import type { Class } from '../../../../../java/lang/Class.d.ts'
import type { Object } from '../../../../../java/lang/Object.d.ts'
import type { Enum } from '../../../../../java/lang/Enum.d.ts'
export class TotalCountResult$STATUS extends Enum<TotalCountResult$STATUS> {
    static COMPLETED: TotalCountResult$STATUS;
    static EXCEPTION: TotalCountResult$STATUS;
    static NOT_COMPLETED: TotalCountResult$STATUS;
    static UNSUPPORTED: TotalCountResult$STATUS;
    static valueOf(paramarg0: Class<Object>, paramarg1: string): Object | null;
    static valueOf(paramarg0: string): TotalCountResult$STATUS;
    static values(): TotalCountResult$STATUS[];
    private constructor()
    name(): "UNSUPPORTED" | "EXCEPTION" | "NOT_COMPLETED" | "COMPLETED";
}