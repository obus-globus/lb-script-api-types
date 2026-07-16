import type { Class } from '../../../java/lang/Class.d.ts'
import type { Enum } from '../../../java/lang/Enum.d.ts'
export class InteractionResult$SwingSource extends Enum<InteractionResult$SwingSource> {
    static CLIENT: InteractionResult$SwingSource;
    static NONE: InteractionResult$SwingSource;
    static SERVER: InteractionResult$SwingSource;
    static valueOf<T extends Enum<T>>(paramarg0: Class<T>, paramarg1: string): T;
    static valueOf(paramname: string): InteractionResult$SwingSource;
    static values(): InteractionResult$SwingSource[];
    private constructor()
    name(): "NONE" | "CLIENT" | "SERVER";
}