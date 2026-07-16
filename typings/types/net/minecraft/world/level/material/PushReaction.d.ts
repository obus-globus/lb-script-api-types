import type { Class } from '../../../../../java/lang/Class.d.ts'
import type { Enum } from '../../../../../java/lang/Enum.d.ts'
export class PushReaction extends Enum<PushReaction> {
    static BLOCK: PushReaction;
    static DESTROY: PushReaction;
    static IGNORE: PushReaction;
    static NORMAL: PushReaction;
    static PUSH_ONLY: PushReaction;
    static valueOf<T extends Enum<T>>(paramarg0: Class<T>, paramarg1: string): T;
    static valueOf(paramname: string): PushReaction;
    static values(): PushReaction[];
    private constructor()
    name(): "NORMAL" | "DESTROY" | "BLOCK" | "IGNORE" | "PUSH_ONLY";
}