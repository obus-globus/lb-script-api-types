import type { Class } from '../../../../../java/lang/Class.d.ts'
import type { Enum } from '../../../../../java/lang/Enum.d.ts'
export class AsyncStatus$ASYNC_STATUS extends Enum<AsyncStatus$ASYNC_STATUS> {
    static COMPLETED: AsyncStatus$ASYNC_STATUS;
    static CRASHED: AsyncStatus$ASYNC_STATUS;
    static STARTED: AsyncStatus$ASYNC_STATUS;
    static valueOf<T extends Enum<T>>(paramarg0: Class<T>, paramarg1: string): T;
    static valueOf(paramarg0: string): AsyncStatus$ASYNC_STATUS;
    static values(): AsyncStatus$ASYNC_STATUS[];
    private constructor()
    name(): "STARTED" | "COMPLETED" | "CRASHED";
}