import type { Class } from '../../../../../java/lang/Class.d.ts'
import type { Object } from '../../../../../java/lang/Object.d.ts'
import type { Enum } from '../../../../../java/lang/Enum.d.ts'
export class FrameInstance$FrameAccess extends Enum<FrameInstance$FrameAccess> {
    static MATERIALIZE: FrameInstance$FrameAccess;
    static READ_ONLY: FrameInstance$FrameAccess;
    static READ_WRITE: FrameInstance$FrameAccess;
    static valueOf(paramarg0: Class<Object>, paramarg1: string): Object | null;
    static valueOf(paramname: string): FrameInstance$FrameAccess;
    static values(): (Object | null)[];
    private constructor()
    name(): "READ_ONLY" | "READ_WRITE" | "MATERIALIZE";
}