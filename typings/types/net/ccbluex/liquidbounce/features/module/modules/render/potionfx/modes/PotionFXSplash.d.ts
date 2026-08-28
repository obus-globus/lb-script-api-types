import type { ToggleableValueGroup } from '../../../../../../../../../net/ccbluex/liquidbounce/config/types/group/ToggleableValueGroup.d.ts'
import type { EventHook } from '../../../../../../../../../net/ccbluex/liquidbounce/event/EventHook.d.ts'
import type { PacketEvent } from '../../../../../../../../../net/ccbluex/liquidbounce/event/events/PacketEvent.d.ts'
import type { WorldRenderEvent } from '../../../../../../../../../net/ccbluex/liquidbounce/event/events/WorldRenderEvent.d.ts'
import type { PotionFXSplash$SplashData } from '../../../../../../../../../net/ccbluex/liquidbounce/features/module/modules/render/potionfx/modes/PotionFXSplash$SplashData.d.ts'
export class PotionFXSplash extends ToggleableValueGroup {
    static INSTANCE: PotionFXSplash;
    // private canBeCovered: boolean;
    // private /*not mapped: */ getCanBeCovered(): boolean;
    // private renderHandler: EventHook<WorldRenderEvent>;
    // private splashHandler: EventHook<PacketEvent>;
    // private splashes: PotionFXSplash$SplashData[];
    onDisabled(): void;
}