import type { Class } from '../../../../../../java/lang/Class.d.ts'
import type { Enum } from '../../../../../../java/lang/Enum.d.ts'
export class TemporalUtil$Disambiguation extends Enum<TemporalUtil$Disambiguation> {
    static COMPATIBLE: TemporalUtil$Disambiguation;
    static EARLIER: TemporalUtil$Disambiguation;
    static LATER: TemporalUtil$Disambiguation;
    static REJECT: TemporalUtil$Disambiguation;
    static valueOf<T extends Enum<T>>(paramarg0: Class<T>, paramarg1: string): T;
    static valueOf(paramname: string): TemporalUtil$Disambiguation;
    static values(): TemporalUtil$Disambiguation[];
    private constructor()
    name(): "EARLIER" | "LATER" | "COMPATIBLE" | "REJECT";
}