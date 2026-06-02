import type { Class } from '../../../../java/lang/Class.d.ts'
import type { Object } from '../../../../java/lang/Object.d.ts'
import type { Enum } from '../../../../java/lang/Enum.d.ts'
export class TruffleCompilerRuntime$LoopExplosionKind extends Enum<TruffleCompilerRuntime$LoopExplosionKind> {
    static FULL_EXPLODE: TruffleCompilerRuntime$LoopExplosionKind;
    static FULL_EXPLODE_UNTIL_RETURN: TruffleCompilerRuntime$LoopExplosionKind;
    static FULL_UNROLL: TruffleCompilerRuntime$LoopExplosionKind;
    static FULL_UNROLL_UNTIL_RETURN: TruffleCompilerRuntime$LoopExplosionKind;
    static MERGE_EXPLODE: TruffleCompilerRuntime$LoopExplosionKind;
    static NONE: TruffleCompilerRuntime$LoopExplosionKind;
    static valueOf(paramarg0: Class<Object>, paramarg1: string): Object | null;
    static valueOf(paramname: string): TruffleCompilerRuntime$LoopExplosionKind;
    static values(): (Object | null)[];
    private constructor()
    name(): "NONE" | "FULL_UNROLL" | "FULL_UNROLL_UNTIL_RETURN" | "FULL_EXPLODE" | "FULL_EXPLODE_UNTIL_RETURN" | "MERGE_EXPLODE";
}