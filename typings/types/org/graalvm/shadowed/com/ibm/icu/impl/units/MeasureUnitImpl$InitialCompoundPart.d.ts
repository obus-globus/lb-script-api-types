import type { Class } from '../../../../../../../../java/lang/Class.d.ts'
import type { Object } from '../../../../../../../../java/lang/Object.d.ts'
import type { Enum } from '../../../../../../../../java/lang/Enum.d.ts'
export class MeasureUnitImpl$InitialCompoundPart extends Enum<MeasureUnitImpl$InitialCompoundPart> {
    static INITIAL_COMPOUND_PART_PER: MeasureUnitImpl$InitialCompoundPart;
    static getInitialCompoundPartFromTrieIndex(paramtrieIndex: number): MeasureUnitImpl$InitialCompoundPart;
    static valueOf(paramarg0: Class<Object>, paramarg1: string): Object | null;
    static valueOf(paramname: string): MeasureUnitImpl$InitialCompoundPart;
    static values(): (Object | null)[];
    private constructor(powerIndex: number)
    // private index: number;
    getTrieIndex(): number;
    getValue(): number;
    name(): "INITIAL_COMPOUND_PART_PER";
}