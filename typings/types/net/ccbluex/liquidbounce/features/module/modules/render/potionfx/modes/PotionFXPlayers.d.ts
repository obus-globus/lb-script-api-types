import type { ToggleableValueGroup } from '../../../../../../../../../net/ccbluex/liquidbounce/config/types/group/ToggleableValueGroup.d.ts'
import type { EventHook } from '../../../../../../../../../net/ccbluex/liquidbounce/event/EventHook.d.ts'
import type { WorldRenderEvent } from '../../../../../../../../../net/ccbluex/liquidbounce/event/events/WorldRenderEvent.d.ts'
import type { Player } from '../../../../../../../../../net/minecraft/world/entity/player/Player.d.ts'
export class PotionFXPlayers extends ToggleableValueGroup {
    static INSTANCE: PotionFXPlayers;
    // private canBeCovered: boolean;
    // private /*not mapped: */ getCanBeCovered(): boolean;
    // private players: Player[];
    // private /*not mapped: */ getPlayers(): Player[];
    // private renderHandler: EventHook<WorldRenderEvent>;
    onDisabled(): void;
}