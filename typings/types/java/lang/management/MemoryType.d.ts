import type { Class } from '../../../java/lang/Class.d.ts'
import type { Enum } from '../../../java/lang/Enum.d.ts'
export class MemoryType extends Enum<MemoryType> {
    static HEAP: MemoryType;
    static NON_HEAP: MemoryType;
    static valueOf<T extends Enum<T>>(paramarg0: Class<T>, paramarg1: string): T;
    static valueOf(paramarg0: string): MemoryType;
    static values(): MemoryType[];
    private constructor(arg2: string)
    // private description: string;
    toString(): string;
    name(): "HEAP" | "NON_HEAP";
}