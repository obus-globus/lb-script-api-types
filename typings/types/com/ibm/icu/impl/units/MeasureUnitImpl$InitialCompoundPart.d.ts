import type { Class } from '../../../../../java/lang/Class.d.ts'
import type { Enum } from '../../../../../java/lang/Enum.d.ts'
export class MeasureUnitImpl$InitialCompoundPart extends Enum<MeasureUnitImpl$InitialCompoundPart> {
    static INITIAL_COMPOUND_PART_PER: MeasureUnitImpl$InitialCompoundPart;
    static getInitialCompoundPartFromTrieIndex(paramarg0: number): MeasureUnitImpl$InitialCompoundPart;
    static valueOf<T extends Enum<T>>(paramarg0: Class<T>, paramarg1: string): T;
    static valueOf(paramarg0: string): MeasureUnitImpl$InitialCompoundPart;
    static values(): MeasureUnitImpl$InitialCompoundPart[];
    private constructor(arg2: number)
    // private index: number;
    getTrieIndex(): number;
    getValue(): number;
    name(): "INITIAL_COMPOUND_PART_PER";
}