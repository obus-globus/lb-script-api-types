import type { ModeValueGroup } from '../../../../../../../../net/ccbluex/liquidbounce/config/types/group/ModeValueGroup.d.ts'
import type { EventHook } from '../../../../../../../../net/ccbluex/liquidbounce/event/EventHook.d.ts'
import type { PacketEvent } from '../../../../../../../../net/ccbluex/liquidbounce/event/events/PacketEvent.d.ts'
import type { TagEntityEvent } from '../../../../../../../../net/ccbluex/liquidbounce/event/events/TagEntityEvent.d.ts'
import type { WorldChangeEvent } from '../../../../../../../../net/ccbluex/liquidbounce/event/events/WorldChangeEvent.d.ts'
import type { WorldRenderEvent } from '../../../../../../../../net/ccbluex/liquidbounce/event/events/WorldRenderEvent.d.ts'
import type { ClientModule } from '../../../../../../../../net/ccbluex/liquidbounce/features/module/ClientModule.d.ts'
import type { MurderMysteryMode } from '../../../../../../../../net/ccbluex/liquidbounce/features/module/modules/render/murdermystery/MurderMysteryMode.d.ts'
import type { AbstractClientPlayer } from '../../../../../../../../net/minecraft/client/player/AbstractClientPlayer.d.ts'
import type { Entity } from '../../../../../../../../net/minecraft/world/entity/Entity.d.ts'
import type { ItemStack } from '../../../../../../../../net/minecraft/world/item/ItemStack.d.ts'
export class ModuleMurderMystery extends ClientModule {
    static INSTANCE: ModuleMurderMystery;
    // private /*not mapped: */ getCurrentMode(): MurderMysteryMode;
    readonly modes: ModeValueGroup<MurderMysteryMode>;
    readonly packetHandler: EventHook<PacketEvent>;
    playBow: boolean;
    playHurt: boolean;
    readonly renderHandler: EventHook<WorldRenderEvent>;
    // private setTeamPrefix: boolean;
    // private /*not mapped: */ getSetTeamPrefix(): boolean;
    readonly tagHandler: EventHook<TagEntityEvent>;
    readonly worldChangeHandler: EventHook<WorldChangeEvent>;
    disallowsArrowDodge(): boolean;
    // private handleItem(itemStack: ItemStack, entity: Entity | null): void;
    onDisabled(): void;
    // private reset(): void;
    // private resetModeState(): void;
    // private shouldAttack(entityPlayer: AbstractClientPlayer): boolean;
}