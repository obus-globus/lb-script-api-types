import type { ToggleableValueGroup } from '../../../../../../../net/ccbluex/liquidbounce/config/types/group/ToggleableValueGroup.d.ts'
export class ModuleItemESP$ShowArrows extends ToggleableValueGroup {
    static INSTANCE: ModuleItemESP$ShowArrows;
    readonly arrowsWithEffects: boolean;
    readonly regularArrows: boolean;
    readonly spectralArrows: boolean;
}