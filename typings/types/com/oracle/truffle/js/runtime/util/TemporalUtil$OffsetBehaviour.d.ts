import type { Class } from '../../../../../../java/lang/Class.d.ts'
import type { Enum } from '../../../../../../java/lang/Enum.d.ts'
export class TemporalUtil$OffsetBehaviour extends Enum<TemporalUtil$OffsetBehaviour> {
    static EXACT: TemporalUtil$OffsetBehaviour;
    static OPTION: TemporalUtil$OffsetBehaviour;
    static WALL: TemporalUtil$OffsetBehaviour;
    static valueOf<T extends Enum<T>>(paramarg0: Class<T>, paramarg1: string): T;
    static valueOf(paramname: string): TemporalUtil$OffsetBehaviour;
    static values(): TemporalUtil$OffsetBehaviour[];
    private constructor()
    name(): "OPTION" | "WALL" | "EXACT";
}