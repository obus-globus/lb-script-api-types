import type { Class } from '../../../../../../java/lang/Class.d.ts'
import type { Object } from '../../../../../../java/lang/Object.d.ts'
import type { Enum } from '../../../../../../java/lang/Enum.d.ts'
export class TemporalUtil$MatchBehaviour extends Enum<TemporalUtil$MatchBehaviour> {
    static MATCH_EXACTLY: TemporalUtil$MatchBehaviour;
    static MATCH_MINUTES: TemporalUtil$MatchBehaviour;
    static valueOf(paramarg0: Class<Object>, paramarg1: string): Object | null;
    static valueOf(paramname: string): TemporalUtil$MatchBehaviour;
    static values(): TemporalUtil$MatchBehaviour[];
    private constructor()
    name(): "MATCH_EXACTLY" | "MATCH_MINUTES";
}