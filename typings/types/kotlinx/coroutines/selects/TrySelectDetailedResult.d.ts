import type { Class } from '../../../java/lang/Class.d.ts'
import type { Enum } from '../../../java/lang/Enum.d.ts'
export class TrySelectDetailedResult extends Enum<TrySelectDetailedResult> {
    static ALREADY_SELECTED: TrySelectDetailedResult;
    static CANCELLED: TrySelectDetailedResult;
    static REREGISTER: TrySelectDetailedResult;
    static SUCCESSFUL: TrySelectDetailedResult;
    static getEntries(): TrySelectDetailedResult[];
    static valueOf<T extends Enum<T>>(paramarg0: Class<T>, paramarg1: string): T;
    static valueOf(value: string): TrySelectDetailedResult;
    static values(): TrySelectDetailedResult[];
    private constructor()
    name(): "SUCCESSFUL" | "REREGISTER" | "CANCELLED" | "ALREADY_SELECTED";
}