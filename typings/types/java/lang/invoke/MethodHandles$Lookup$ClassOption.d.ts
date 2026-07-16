import type { Class } from '../../../java/lang/Class.d.ts'
import type { Object } from '../../../java/lang/Object.d.ts'
import type { Enum } from '../../../java/lang/Enum.d.ts'
export class MethodHandles$Lookup$ClassOption extends Enum<MethodHandles$Lookup$ClassOption> {
    static NESTMATE: MethodHandles$Lookup$ClassOption;
    static STRONG: MethodHandles$Lookup$ClassOption;
    static valueOf(paramarg0: Class<Object>, paramarg1: string): Object | null;
    static valueOf(paramarg0: string): MethodHandles$Lookup$ClassOption;
    static values(): MethodHandles$Lookup$ClassOption[];
    private constructor(arg2: number)
    // private flag: number;
    name(): "NESTMATE" | "STRONG";
}