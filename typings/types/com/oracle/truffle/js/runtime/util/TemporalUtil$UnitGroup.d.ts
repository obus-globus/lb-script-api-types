import type { Class } from '../../../../../../java/lang/Class.d.ts'
import type { Enum } from '../../../../../../java/lang/Enum.d.ts'
export class TemporalUtil$UnitGroup extends Enum<TemporalUtil$UnitGroup> {
    static DATE: TemporalUtil$UnitGroup;
    static DATETIME: TemporalUtil$UnitGroup;
    static TIME: TemporalUtil$UnitGroup;
    static valueOf<T extends Enum<T>>(paramarg0: Class<T>, paramarg1: string): T;
    static valueOf(paramname: string): TemporalUtil$UnitGroup;
    static values(): TemporalUtil$UnitGroup[];
    private constructor()
    name(): "DATE" | "TIME" | "DATETIME";
}