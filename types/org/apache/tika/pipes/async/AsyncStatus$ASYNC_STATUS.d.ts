import type { Class } from '../../../../../java/lang/Class.d.ts'
import type { Object } from '../../../../../java/lang/Object.d.ts'
import type { Enum } from '../../../../../java/lang/Enum.d.ts'
export class AsyncStatus$ASYNC_STATUS extends Enum<AsyncStatus$ASYNC_STATUS> {
    static COMPLETED: AsyncStatus$ASYNC_STATUS;
    static CRASHED: AsyncStatus$ASYNC_STATUS;
    static STARTED: AsyncStatus$ASYNC_STATUS;
    static valueOf(paramarg0: Class<Object>, paramarg1: string): Object | null;
    static valueOf(paramarg0: string): AsyncStatus$ASYNC_STATUS;
    static values(): (Object | null)[];
    private constructor()
    name(): "STARTED" | "COMPLETED" | "CRASHED";
}