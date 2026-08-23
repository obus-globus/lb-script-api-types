import type { ToggleableValueGroup } from '../../../../../../../net/ccbluex/liquidbounce/config/types/group/ToggleableValueGroup.d.ts'
import type { EventHook } from '../../../../../../../net/ccbluex/liquidbounce/event/EventHook.d.ts'
import type { WorldFeatureSubmitEvent } from '../../../../../../../net/ccbluex/liquidbounce/event/events/WorldFeatureSubmitEvent.d.ts'
import type { TimeUnit } from '../../../../../../../net/ccbluex/liquidbounce/features/module/modules/render/TimeUnit.d.ts'
import type { PrimedTnt } from '../../../../../../../net/minecraft/world/entity/item/PrimedTnt.d.ts'
export class ModuleTNTTimer$ShowTimer extends ToggleableValueGroup {
    static INSTANCE: ModuleTNTTimer$ShowTimer;
    // private ownerName: boolean;
    // private /*not mapped: */ getOwnerName(): boolean;
    // private renderHandler: EventHook<WorldFeatureSubmitEvent>;
    // private renderY: number;
    // private /*not mapped: */ getRenderY(): number;
    // private scale: number;
    // private /*not mapped: */ getScale(): number;
    // private timeUnit: TimeUnit;
    // private /*not mapped: */ getTimeUnit(): TimeUnit;
    // private tntEntities: PrimedTnt[];
    // private /*not mapped: */ getTntEntities(): PrimedTnt[];
    onDisabled(): void;
}