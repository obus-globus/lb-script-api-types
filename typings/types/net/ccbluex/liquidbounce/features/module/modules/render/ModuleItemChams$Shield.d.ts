import type { ToggleableValueGroup } from '../../../../../../../net/ccbluex/liquidbounce/config/types/group/ToggleableValueGroup.d.ts'
import type { ModuleItemChams$ShieldTintMode } from '../../../../../../../net/ccbluex/liquidbounce/features/module/modules/render/ModuleItemChams$ShieldTintMode.d.ts'
import type { Color4b } from '../../../../../../../net/ccbluex/liquidbounce/render/engine/type/Color4b.d.ts'
export class ModuleItemChams$Shield extends ToggleableValueGroup {
    static INSTANCE: ModuleItemChams$Shield;
    // private tint: Color4b;
    // private /*not mapped: */ getTint(): Color4b;
    // private tintMode: ModuleItemChams$ShieldTintMode;
    // private /*not mapped: */ getTintMode(): ModuleItemChams$ShieldTintMode;
    applyTint(tintedColor: number): number;
    // private multiplyArgb(left: number, right: number): number;
    // private multiplyChannel(left: number, right: number): number;
    usesTranslucentTint(tintedColor: number): boolean;
}