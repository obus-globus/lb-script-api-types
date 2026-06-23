import type { ToggleableValueGroup } from '../../../../../net/ccbluex/liquidbounce/config/types/group/ToggleableValueGroup.d.ts'
import type { EventListener } from '../../../../../net/ccbluex/liquidbounce/event/EventListener.d.ts'
import type { Filter } from '../../../../../net/ccbluex/liquidbounce/utils/collection/Filter.d.ts'
import type { AbstractContainerScreen } from '../../../../../net/minecraft/client/gui/screens/inventory/AbstractContainerScreen.d.ts'
import type { AbstractContainerMenu } from '../../../../../net/minecraft/world/inventory/AbstractContainerMenu.d.ts'
import type { MenuType } from '../../../../../net/minecraft/world/inventory/MenuType.d.ts'
export class CheckScreenHandlerTypeValueGroup extends ToggleableValueGroup {
    constructor(parent: EventListener)
    // private filter: Filter;
    // private /*not mapped: */ getFilter(): Filter;
    // private types: MenuType<AbstractContainerMenu>[];
    // private /*not mapped: */ getTypes(): MenuType<AbstractContainerMenu>[];
    isValid(screen: AbstractContainerScreen<any>): boolean;
}