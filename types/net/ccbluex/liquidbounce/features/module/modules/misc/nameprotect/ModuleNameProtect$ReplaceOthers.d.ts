import type { ModeValueGroup } from '../../../../../../../../net/ccbluex/liquidbounce/config/types/group/ModeValueGroup.d.ts'
import type { ToggleableValueGroup } from '../../../../../../../../net/ccbluex/liquidbounce/config/types/group/ToggleableValueGroup.d.ts'
import type { GenericColorMode } from '../../../../../../../../net/ccbluex/liquidbounce/render/GenericColorMode.d.ts'
export class ModuleNameProtect$ReplaceOthers extends ToggleableValueGroup {
    static INSTANCE: ModuleNameProtect$ReplaceOthers;
    readonly colorMode: ModeValueGroup<GenericColorMode<void>>;
}