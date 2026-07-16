import type { Class } from '../../../../../../java/lang/Class.d.ts'
import type { Enum } from '../../../../../../java/lang/Enum.d.ts'
export class TruffleJSONParser$Mode extends Enum<TruffleJSONParser$Mode> {
    static RawJSON: TruffleJSONParser$Mode;
    static WithReviver: TruffleJSONParser$Mode;
    static WithReviverAndSource: TruffleJSONParser$Mode;
    static WithoutReviver: TruffleJSONParser$Mode;
    static valueOf<T extends Enum<T>>(paramarg0: Class<T>, paramarg1: string): T;
    static valueOf(paramname: string): TruffleJSONParser$Mode;
    static values(): TruffleJSONParser$Mode[];
    private constructor()
    name(): "RawJSON" | "WithoutReviver" | "WithReviver" | "WithReviverAndSource";
}