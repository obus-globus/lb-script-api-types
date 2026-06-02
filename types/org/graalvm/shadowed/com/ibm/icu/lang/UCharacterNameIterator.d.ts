import type { Object } from '../../../../../../../java/lang/Object.d.ts'
import type { UCharacterName } from '../../../../../../../org/graalvm/shadowed/com/ibm/icu/impl/UCharacterName.d.ts'
import type { ValueIterator } from '../../../../../../../org/graalvm/shadowed/com/ibm/icu/util/ValueIterator.d.ts'
import type { ValueIterator$Element } from '../../../../../../../org/graalvm/shadowed/com/ibm/icu/util/ValueIterator$Element.d.ts'
export class UCharacterNameIterator extends Object implements ValueIterator {
    constructor(name: UCharacterName, choice: number)
    // private m_algorithmIndex_: number;
    // private m_choice_: number;
    // private m_current_: number;
    // private m_groupIndex_: number;
    // private m_limit_: number;
    // private m_name_: UCharacterName;
    // private m_start_: number;
    // private iterateExtended(result: ValueIterator$Element, limit: number): boolean;
    // private iterateGroup(result: ValueIterator$Element, limit: number): boolean;
    // private iterateSingleGroup(result: ValueIterator$Element, limit: number): boolean;
    next(element: ValueIterator$Element): boolean;
    reset(): void;
    setRange(start: number, limit: number): void;
}