import type { Class } from '../../../../../java/lang/Class.d.ts'
import type { Object } from '../../../../../java/lang/Object.d.ts'
import type { Enum } from '../../../../../java/lang/Enum.d.ts'
export class MeasureUnitImpl$PowerPart extends Enum<MeasureUnitImpl$PowerPart> {
    static P10: MeasureUnitImpl$PowerPart;
    static P11: MeasureUnitImpl$PowerPart;
    static P12: MeasureUnitImpl$PowerPart;
    static P13: MeasureUnitImpl$PowerPart;
    static P14: MeasureUnitImpl$PowerPart;
    static P15: MeasureUnitImpl$PowerPart;
    static P2: MeasureUnitImpl$PowerPart;
    static P3: MeasureUnitImpl$PowerPart;
    static P4: MeasureUnitImpl$PowerPart;
    static P5: MeasureUnitImpl$PowerPart;
    static P6: MeasureUnitImpl$PowerPart;
    static P7: MeasureUnitImpl$PowerPart;
    static P8: MeasureUnitImpl$PowerPart;
    static P9: MeasureUnitImpl$PowerPart;
    static getPowerFromTrieIndex(paramarg0: number): number;
    static valueOf(paramarg0: Class<Object>, paramarg1: string): Object | null;
    static valueOf(paramarg0: string): MeasureUnitImpl$PowerPart;
    static values(): (Object | null)[];
    private constructor(arg2: number)
    // private power: number;
    getTrieIndex(): number;
    getValue(): number;
    name(): "P2" | "P3" | "P4" | "P5" | "P6" | "P7" | "P8" | "P9" | "P10" | "P11" | "P12" | "P13" | "P14" | "P15";
}