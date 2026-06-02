import type { Class } from '../../../java/lang/Class.d.ts'
import type { Object } from '../../../java/lang/Object.d.ts'
import type { Enum } from '../../../java/lang/Enum.d.ts'
export class AbortableIterationConsumer$Continuation extends Enum<AbortableIterationConsumer$Continuation> {
    static ABORT: AbortableIterationConsumer$Continuation;
    static CONTINUE: AbortableIterationConsumer$Continuation;
    static valueOf(paramarg0: Class<Object>, paramarg1: string): Object | null;
    static valueOf(paramname: string): AbortableIterationConsumer$Continuation;
    static values(): (Object | null)[];
    private constructor()
    shouldAbort(): boolean;
    name(): "CONTINUE" | "ABORT";
}