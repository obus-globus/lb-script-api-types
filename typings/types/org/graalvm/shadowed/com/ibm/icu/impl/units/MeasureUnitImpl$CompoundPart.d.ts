import type { Class } from '../../../../../../../../java/lang/Class.d.ts'
import type { Enum } from '../../../../../../../../java/lang/Enum.d.ts'
export class MeasureUnitImpl$CompoundPart extends Enum<MeasureUnitImpl$CompoundPart> {
    static AND: MeasureUnitImpl$CompoundPart;
    static PER: MeasureUnitImpl$CompoundPart;
    static TIMES: MeasureUnitImpl$CompoundPart;
    static getCompoundPartFromTrieIndex(paramtrieIndex: number): MeasureUnitImpl$CompoundPart;
    static valueOf<T extends Enum<T>>(paramarg0: Class<T>, paramarg1: string): T;
    static valueOf(paramname: string): MeasureUnitImpl$CompoundPart;
    static values(): MeasureUnitImpl$CompoundPart[];
    private constructor(index: number)
    // private index: number;
    getTrieIndex(): number;
    getValue(): number;
    name(): "PER" | "TIMES" | "AND";
}