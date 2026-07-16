import type { Class } from '../../../java/lang/Class.d.ts'
import type { Enum } from '../../../java/lang/Enum.d.ts'
export class AbortableIterationConsumer$Continuation extends Enum<AbortableIterationConsumer$Continuation> {
    static ABORT: AbortableIterationConsumer$Continuation;
    static CONTINUE: AbortableIterationConsumer$Continuation;
    static valueOf<T extends Enum<T>>(paramarg0: Class<T>, paramarg1: string): T;
    static valueOf(paramname: string): AbortableIterationConsumer$Continuation;
    static values(): AbortableIterationConsumer$Continuation[];
    private constructor()
    shouldAbort(): boolean;
    name(): "CONTINUE" | "ABORT";
}