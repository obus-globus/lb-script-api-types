import type { Class } from '../../../../../java/lang/Class.d.ts'
import type { Enum } from '../../../../../java/lang/Enum.d.ts'
export class FrameInstance$FrameAccess extends Enum<FrameInstance$FrameAccess> {
    static MATERIALIZE: FrameInstance$FrameAccess;
    static READ_ONLY: FrameInstance$FrameAccess;
    static READ_WRITE: FrameInstance$FrameAccess;
    static valueOf<T extends Enum<T>>(paramarg0: Class<T>, paramarg1: string): T;
    static valueOf(paramname: string): FrameInstance$FrameAccess;
    static values(): FrameInstance$FrameAccess[];
    private constructor()
    name(): "READ_ONLY" | "READ_WRITE" | "MATERIALIZE";
}