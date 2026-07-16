import type { Class } from '../../../java/lang/Class.d.ts'
import type { Object } from '../../../java/lang/Object.d.ts'
import type { Enum } from '../../../java/lang/Enum.d.ts'
export class BufferOverflow extends Enum<BufferOverflow> {
    static DROP_LATEST: BufferOverflow;
    static DROP_OLDEST: BufferOverflow;
    static SUSPEND: BufferOverflow;
    static getEntries(): BufferOverflow[];
    static valueOf(paramarg0: Class<Object>, paramarg1: string): Object | null;
    static valueOf(paramarg0: string): BufferOverflow;
    static values(): BufferOverflow[];
    private constructor()
    name(): "SUSPEND" | "DROP_OLDEST" | "DROP_LATEST";
}