import type { Class } from '../../../java/lang/Class.d.ts'
import type { Object } from '../../../java/lang/Object.d.ts'
import type { Enum } from '../../../java/lang/Enum.d.ts'
export class InteractionResult$SwingSource extends Enum<InteractionResult$SwingSource> {
    static CLIENT: InteractionResult$SwingSource;
    static NONE: InteractionResult$SwingSource;
    static SERVER: InteractionResult$SwingSource;
    static valueOf(paramarg0: Class<Object>, paramarg1: string): Object | null;
    static valueOf(paramname: string): InteractionResult$SwingSource;
    static values(): InteractionResult$SwingSource[];
    private constructor()
    name(): "NONE" | "CLIENT" | "SERVER";
}