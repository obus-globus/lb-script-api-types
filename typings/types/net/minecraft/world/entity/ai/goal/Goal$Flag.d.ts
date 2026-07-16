import type { Class } from '../../../../../../java/lang/Class.d.ts'
import type { Object } from '../../../../../../java/lang/Object.d.ts'
import type { Enum } from '../../../../../../java/lang/Enum.d.ts'
export class Goal$Flag extends Enum<Goal$Flag> {
    static JUMP: Goal$Flag;
    static LOOK: Goal$Flag;
    static MOVE: Goal$Flag;
    static TARGET: Goal$Flag;
    static valueOf(paramarg0: Class<Object>, paramarg1: string): Object | null;
    static valueOf(paramname: string): Goal$Flag;
    static values(): Goal$Flag[];
    private constructor()
    name(): "MOVE" | "LOOK" | "JUMP" | "TARGET";
}