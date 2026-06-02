import type { Class } from '../../../../../java/lang/Class.d.ts'
import type { Object } from '../../../../../java/lang/Object.d.ts'
import type { Enum } from '../../../../../java/lang/Enum.d.ts'
export class PushReaction extends Enum<PushReaction> {
    static BLOCK: PushReaction;
    static DESTROY: PushReaction;
    static IGNORE: PushReaction;
    static NORMAL: PushReaction;
    static PUSH_ONLY: PushReaction;
    static valueOf(paramarg0: Class<Object>, paramarg1: string): Object | null;
    static valueOf(paramname: string): PushReaction;
    static values(): (Object | null)[];
    private constructor()
    name(): "NORMAL" | "DESTROY" | "BLOCK" | "IGNORE" | "PUSH_ONLY";
}