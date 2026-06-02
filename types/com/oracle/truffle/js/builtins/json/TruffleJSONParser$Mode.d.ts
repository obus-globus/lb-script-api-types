import type { Class } from '../../../../../../java/lang/Class.d.ts'
import type { Object } from '../../../../../../java/lang/Object.d.ts'
import type { Enum } from '../../../../../../java/lang/Enum.d.ts'
export class TruffleJSONParser$Mode extends Enum<TruffleJSONParser$Mode> {
    static RawJSON: TruffleJSONParser$Mode;
    static WithReviver: TruffleJSONParser$Mode;
    static WithReviverAndSource: TruffleJSONParser$Mode;
    static WithoutReviver: TruffleJSONParser$Mode;
    static valueOf(paramarg0: Class<Object>, paramarg1: string): Object | null;
    static valueOf(paramname: string): TruffleJSONParser$Mode;
    static values(): (Object | null)[];
    private constructor()
    name(): "RawJSON" | "WithoutReviver" | "WithReviver" | "WithReviverAndSource";
}