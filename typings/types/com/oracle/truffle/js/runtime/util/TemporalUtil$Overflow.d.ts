import type { Class } from '../../../../../../java/lang/Class.d.ts'
import type { Object } from '../../../../../../java/lang/Object.d.ts'
import type { Enum } from '../../../../../../java/lang/Enum.d.ts'
export class TemporalUtil$Overflow extends Enum<TemporalUtil$Overflow> {
    static CONSTRAIN: TemporalUtil$Overflow;
    static REJECT: TemporalUtil$Overflow;
    static valueOf(paramarg0: Class<Object>, paramarg1: string): Object | null;
    static valueOf(paramname: string): TemporalUtil$Overflow;
    static values(): TemporalUtil$Overflow[];
    private constructor()
    name(): "CONSTRAIN" | "REJECT";
}