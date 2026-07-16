import type { Class } from '../../../../../java/lang/Class.d.ts'
import type { Object } from '../../../../../java/lang/Object.d.ts'
import type { Enum } from '../../../../../java/lang/Enum.d.ts'
export class StopWatch$SplitState extends Enum<StopWatch$SplitState> {
    static SPLIT: StopWatch$SplitState;
    static UNSPLIT: StopWatch$SplitState;
    static valueOf(paramarg0: Class<Object>, paramarg1: string): Object | null;
    static valueOf(paramarg0: string): StopWatch$SplitState;
    static values(): StopWatch$SplitState[];
    private constructor()
    name(): "SPLIT" | "UNSPLIT";
}