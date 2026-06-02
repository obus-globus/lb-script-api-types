import type { UUID } from '../../../../../../../../../java/util/UUID.d.ts'
import type { Tagged$Companion } from '../../../../../../../../../net/ccbluex/liquidbounce/config/types/list/Tagged$Companion.d.ts'
import type { EventHook } from '../../../../../../../../../net/ccbluex/liquidbounce/event/EventHook.d.ts'
import type { GameTickEvent } from '../../../../../../../../../net/ccbluex/liquidbounce/event/events/GameTickEvent.d.ts'
import type { PacketEvent } from '../../../../../../../../../net/ccbluex/liquidbounce/event/events/PacketEvent.d.ts'
import type { AntiBotMode } from '../../../../../../../../../net/ccbluex/liquidbounce/features/module/modules/misc/antibot/modes/AntiBotMode.d.ts'
import type { Player } from '../../../../../../../../../net/minecraft/world/entity/player/Player.d.ts'
import type { ItemStack } from '../../../../../../../../../net/minecraft/world/item/ItemStack.d.ts'
export class MatrixAntiBotMode extends AntiBotMode {
    static Companion: Tagged$Companion;
    static INSTANCE: MatrixAntiBotMode;
    // private botList: UUID[];
    readonly packetHandler: EventHook<PacketEvent>;
    readonly repeatable: EventHook<GameTickEvent>;
    // private suspectList: UUID[];
    isBot(entity: Player): boolean;
    // private isFullyArmored(entity: Player): boolean;
    reset(): void;
    // private updatesArmor(entity: Player, prevArmor: ItemStack[] | null): boolean;
}