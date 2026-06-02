import type { UCharacterName } from '../../../../com/ibm/icu/impl/UCharacterName.d.ts'
import type { ValueIterator } from '../../../../com/ibm/icu/util/ValueIterator.d.ts'
import type { ValueIterator$Element } from '../../../../com/ibm/icu/util/ValueIterator$Element.d.ts'
import type { Object } from '../../../../java/lang/Object.d.ts'
export class UCharacterNameIterator extends Object implements ValueIterator {
    constructor(arg0: UCharacterName, arg1: number)
    // private m_algorithmIndex_: number;
    // private m_choice_: number;
    // private m_current_: number;
    // private m_groupIndex_: number;
    // private m_limit_: number;
    // private m_name_: UCharacterName;
    // private m_start_: number;
    // private iterateExtended(arg0: ValueIterator$Element, arg1: number): boolean;
    // private iterateGroup(arg0: ValueIterator$Element, arg1: number): boolean;
    // private iterateSingleGroup(arg0: ValueIterator$Element, arg1: number): boolean;
    next(arg0: ValueIterator$Element): boolean;
    reset(): void;
    setRange(arg0: number, arg1: number): void;
}