import type { Class } from '../../../java/lang/Class.d.ts'
import type { Object } from '../../../java/lang/Object.d.ts'
import type { Enum } from '../../../java/lang/Enum.d.ts'
export class MemoryUtil$MemoryAllocationReport$Aggregate extends Enum<MemoryUtil$MemoryAllocationReport$Aggregate> {
    static ALL: MemoryUtil$MemoryAllocationReport$Aggregate;
    static GROUP_BY_METHOD: MemoryUtil$MemoryAllocationReport$Aggregate;
    static GROUP_BY_STACKTRACE: MemoryUtil$MemoryAllocationReport$Aggregate;
    static valueOf(paramarg0: Class<Object>, paramarg1: string): Object | null;
    static valueOf(paramarg0: string): MemoryUtil$MemoryAllocationReport$Aggregate;
    static values(): (Object | null)[];
    private constructor()
    name(): "ALL" | "GROUP_BY_METHOD" | "GROUP_BY_STACKTRACE";
}