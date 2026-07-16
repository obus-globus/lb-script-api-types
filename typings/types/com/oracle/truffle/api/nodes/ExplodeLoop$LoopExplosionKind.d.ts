import type { Class } from '../../../../../java/lang/Class.d.ts'
import type { Enum } from '../../../../../java/lang/Enum.d.ts'
export class ExplodeLoop$LoopExplosionKind extends Enum<ExplodeLoop$LoopExplosionKind> {
    static FULL_EXPLODE: ExplodeLoop$LoopExplosionKind;
    static FULL_EXPLODE_UNTIL_RETURN: ExplodeLoop$LoopExplosionKind;
    static FULL_UNROLL: ExplodeLoop$LoopExplosionKind;
    static FULL_UNROLL_UNTIL_RETURN: ExplodeLoop$LoopExplosionKind;
    static MERGE_EXPLODE: ExplodeLoop$LoopExplosionKind;
    static valueOf<T extends Enum<T>>(paramarg0: Class<T>, paramarg1: string): T;
    static valueOf(paramname: string): ExplodeLoop$LoopExplosionKind;
    static values(): ExplodeLoop$LoopExplosionKind[];
    private constructor()
    name(): "FULL_UNROLL" | "FULL_UNROLL_UNTIL_RETURN" | "FULL_EXPLODE" | "FULL_EXPLODE_UNTIL_RETURN" | "MERGE_EXPLODE";
}