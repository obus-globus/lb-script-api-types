import type { Class } from '../../../../../../java/lang/Class.d.ts'
import type { Object } from '../../../../../../java/lang/Object.d.ts'
import type { Enum } from '../../../../../../java/lang/Enum.d.ts'
export class MemoryStatus extends Enum<MemoryStatus> {
    static REGISTERED: MemoryStatus;
    static VALUE_ABSENT: MemoryStatus;
    static VALUE_PRESENT: MemoryStatus;
    static valueOf(paramarg0: Class<Object>, paramarg1: string): Object | null;
    static valueOf(paramname: string): MemoryStatus;
    static values(): MemoryStatus[];
    private constructor()
    name(): "VALUE_PRESENT" | "VALUE_ABSENT" | "REGISTERED";
}