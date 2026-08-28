import type { ToggleableValueGroup } from '../../../../../../../../../net/ccbluex/liquidbounce/config/types/group/ToggleableValueGroup.d.ts'
import type { EventHook } from '../../../../../../../../../net/ccbluex/liquidbounce/event/EventHook.d.ts'
import type { WorldRenderEvent } from '../../../../../../../../../net/ccbluex/liquidbounce/event/events/WorldRenderEvent.d.ts'
import type { AreaEffectCloud } from '../../../../../../../../../net/minecraft/world/entity/AreaEffectCloud.d.ts'
export class PotionFXLingering extends ToggleableValueGroup {
    static INSTANCE: PotionFXLingering;
    // private canBeCovered: boolean;
    // private /*not mapped: */ getCanBeCovered(): boolean;
    // private cloudEntities: AreaEffectCloud[];
    // private /*not mapped: */ getCloudEntities(): AreaEffectCloud[];
    // private renderHandler: EventHook<WorldRenderEvent>;
    onDisabled(): void;
}