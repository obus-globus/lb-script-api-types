import type { Class } from '../../../../../../java/lang/Class.d.ts'
import type { Enum } from '../../../../../../java/lang/Enum.d.ts'
export class TemporalUtil$OffsetOption extends Enum<TemporalUtil$OffsetOption> {
    static IGNORE: TemporalUtil$OffsetOption;
    static PREFER: TemporalUtil$OffsetOption;
    static REJECT: TemporalUtil$OffsetOption;
    static USE: TemporalUtil$OffsetOption;
    static valueOf<T extends Enum<T>>(paramarg0: Class<T>, paramarg1: string): T;
    static valueOf(paramname: string): TemporalUtil$OffsetOption;
    static values(): TemporalUtil$OffsetOption[];
    private constructor()
    name(): "USE" | "IGNORE" | "PREFER" | "REJECT";
}