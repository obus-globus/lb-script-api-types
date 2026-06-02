import type { ValueGroup } from '../../../../../net/ccbluex/liquidbounce/config/types/group/ValueGroup.d.ts'
import type { MultiChoiceListValue } from '../../../../../net/ccbluex/liquidbounce/config/types/list/MultiChoiceListValue.d.ts'
import type { Targets } from '../../../../../net/ccbluex/liquidbounce/utils/combat/Targets.d.ts'
export class GlobalSettingsTarget extends ValueGroup {
    static INSTANCE: GlobalSettingsTarget;
    readonly combat: Targets[];
    readonly combatChoices: MultiChoiceListValue<Targets>;
    readonly visual: Targets[];
    readonly visualChoices: MultiChoiceListValue<Targets>;
}