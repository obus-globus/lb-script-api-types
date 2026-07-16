import type { Class } from '../../../../../../java/lang/Class.d.ts'
import type { Object } from '../../../../../../java/lang/Object.d.ts'
import type { Enum } from '../../../../../../java/lang/Enum.d.ts'
export class MoveControl$Operation extends Enum<MoveControl$Operation> {
    static JUMPING: MoveControl$Operation;
    static MOVE_TO: MoveControl$Operation;
    static STRAFE: MoveControl$Operation;
    static WAIT: MoveControl$Operation;
    static valueOf(paramarg0: Class<Object>, paramarg1: string): Object | null;
    static valueOf(paramname: string): MoveControl$Operation;
    static values(): MoveControl$Operation[];
    private constructor()
    name(): "WAIT" | "MOVE_TO" | "STRAFE" | "JUMPING";
}