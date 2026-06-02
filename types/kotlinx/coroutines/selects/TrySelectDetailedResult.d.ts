import type { Class } from '../../../java/lang/Class.d.ts'
import type { Object } from '../../../java/lang/Object.d.ts'
import type { Enum } from '../../../java/lang/Enum.d.ts'
export class TrySelectDetailedResult extends Enum<TrySelectDetailedResult> {
    static ALREADY_SELECTED: TrySelectDetailedResult;
    static CANCELLED: TrySelectDetailedResult;
    static REREGISTER: TrySelectDetailedResult;
    static SUCCESSFUL: TrySelectDetailedResult;
    static getEntries(): TrySelectDetailedResult[];
    static valueOf(paramarg0: Class<Object>, paramarg1: string): Object | null;
    static valueOf(paramarg0: string): TrySelectDetailedResult;
    static values(): (Object | null)[];
    private constructor()
    name(): "SUCCESSFUL" | "REREGISTER" | "CANCELLED" | "ALREADY_SELECTED";
}