import type { Class } from '../../../java/lang/Class.d.ts'
import type { Enum } from '../../../java/lang/Enum.d.ts'
export class BufferOverflow extends Enum<BufferOverflow> {
    static DROP_LATEST: BufferOverflow;
    static DROP_OLDEST: BufferOverflow;
    static SUSPEND: BufferOverflow;
    static getEntries(): BufferOverflow[];
    static valueOf<T extends Enum<T>>(paramarg0: Class<T>, paramarg1: string): T;
    static valueOf(value: string): BufferOverflow;
    static values(): BufferOverflow[];
    private constructor()
    name(): "SUSPEND" | "DROP_OLDEST" | "DROP_LATEST";
}