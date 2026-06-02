import type { ToggleableValueGroup } from '../../../../../../../net/ccbluex/liquidbounce/config/types/group/ToggleableValueGroup.d.ts'
export class ModuleBetterInventory$ContainerItemView extends ToggleableValueGroup {
    static INSTANCE: ModuleBetterInventory$ContainerItemView;
    readonly relativeToMouse: boolean;
    readonly renderOffsetX: number;
    readonly renderOffsetY: number;
    readonly scale: number;
    readonly skipEmptyStack: boolean;
}