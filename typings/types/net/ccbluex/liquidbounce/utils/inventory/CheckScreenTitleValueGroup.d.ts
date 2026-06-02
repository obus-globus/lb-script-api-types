import type { ToggleableValueGroup } from '../../../../../net/ccbluex/liquidbounce/config/types/group/ToggleableValueGroup.d.ts'
import type { EventListener } from '../../../../../net/ccbluex/liquidbounce/event/EventListener.d.ts'
import type { Filter } from '../../../../../net/ccbluex/liquidbounce/utils/collection/Filter.d.ts'
import type { CheckScreenTitleValueGroup$ContainerTitle } from '../../../../../net/ccbluex/liquidbounce/utils/inventory/CheckScreenTitleValueGroup$ContainerTitle.d.ts'
import type { Screen } from '../../../../../net/minecraft/client/gui/screens/Screen.d.ts'
export class CheckScreenTitleValueGroup extends ToggleableValueGroup {
    constructor(parent: EventListener)
    // private customTitles: string[];
    // private /*not mapped: */ getCustomTitles(): string[];
    // private filter: Filter;
    // private /*not mapped: */ getFilter(): Filter;
    // private titles: CheckScreenTitleValueGroup$ContainerTitle[];
    // private /*not mapped: */ getTitles(): CheckScreenTitleValueGroup$ContainerTitle[];
    isValid(screen: Screen): boolean;
}