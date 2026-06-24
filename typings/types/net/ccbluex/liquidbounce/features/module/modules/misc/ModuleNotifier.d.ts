import type { UUID } from '../../../../../../../java/util/UUID.d.ts'
import type { EventHook } from '../../../../../../../net/ccbluex/liquidbounce/event/EventHook.d.ts'
import type { PacketEvent } from '../../../../../../../net/ccbluex/liquidbounce/event/events/PacketEvent.d.ts'
import type { PlayerTickEvent } from '../../../../../../../net/ccbluex/liquidbounce/event/events/PlayerTickEvent.d.ts'
import type { WorldChangeEvent } from '../../../../../../../net/ccbluex/liquidbounce/event/events/WorldChangeEvent.d.ts'
import type { ClientModule } from '../../../../../../../net/ccbluex/liquidbounce/features/module/ClientModule.d.ts'
import type { ModuleNotifier$HeldItemState } from '../../../../../../../net/ccbluex/liquidbounce/features/module/modules/misc/ModuleNotifier$HeldItemState.d.ts'
import type { ModuleNotifier$ItemConsumptionState } from '../../../../../../../net/ccbluex/liquidbounce/features/module/modules/misc/ModuleNotifier$ItemConsumptionState.d.ts'
import type { RemotePlayer } from '../../../../../../../net/minecraft/client/player/RemotePlayer.d.ts'
import type { ClientboundPlayerInfoUpdatePacket$Entry } from '../../../../../../../net/minecraft/network/protocol/game/ClientboundPlayerInfoUpdatePacket$Entry.d.ts'
import type { InteractionHand } from '../../../../../../../net/minecraft/world/InteractionHand.d.ts'
import type { Item } from '../../../../../../../net/minecraft/world/item/Item.d.ts'
import type { ItemStack } from '../../../../../../../net/minecraft/world/item/ItemStack.d.ts'
import type { GameType } from '../../../../../../../net/minecraft/world/level/GameType.d.ts'
/**
 * Notifier module
 *
 * Notifies you about all kinds of events.
 *
 * Source: {@link https://github.com/CCBlueX/LiquidBounce/blob/5f1d924995c7360e0ec79e16298d37205eea4da3/src/main/kotlin/net/ccbluex/liquidbounce/features/module/modules/misc/ModuleNotifier.kt#L43 | src/main/kotlin/net/ccbluex/liquidbounce/features/module/modules/misc/ModuleNotifier.kt:43}
 */
export class ModuleNotifier extends ClientModule {
    static INSTANCE: ModuleNotifier;
    // private gameModeMessageFormat: string;
    // private /*not mapped: */ getGameModeMessageFormat(): string;
    // private gameModeMessages: boolean;
    // private /*not mapped: */ getGameModeMessages(): boolean;
    // private heldItemCache: Map<UUID, ModuleNotifier$HeldItemState>;
    // private heldItemMessageFormat: string;
    // private /*not mapped: */ getHeldItemMessageFormat(): string;
    // private heldItemMessages: boolean;
    // private /*not mapped: */ getHeldItemMessages(): boolean;
    // private heldItems: Item[];
    // private /*not mapped: */ getHeldItems(): Item[];
    // private itemConsumptionCache: Map<UUID, ModuleNotifier$ItemConsumptionState>;
    // private itemConsumptionMessageFormat: string;
    // private /*not mapped: */ getItemConsumptionMessageFormat(): string;
    // private itemConsumptionMessages: boolean;
    // private /*not mapped: */ getItemConsumptionMessages(): boolean;
    // private joinMessageFormat: string;
    // private /*not mapped: */ getJoinMessageFormat(): string;
    // private joinMessages: boolean;
    // private /*not mapped: */ getJoinMessages(): boolean;
    // private leaveMessageFormat: string;
    // private /*not mapped: */ getLeaveMessageFormat(): string;
    // private leaveMessages: boolean;
    // private /*not mapped: */ getLeaveMessages(): boolean;
    // private observedPlayers: UUID[];
    readonly packetHandler: EventHook<PacketEvent>;
    // private tickHandler: EventHook<PlayerTickEvent>;
    // private totemPopCounter: { [key: string]: any };
    // private totemPopMessageFormat: string;
    // private /*not mapped: */ getTotemPopMessageFormat(): string;
    // private totemPopMessages: boolean;
    // private /*not mapped: */ getTotemPopMessages(): boolean;
    // private useNotification: boolean;
    // private /*not mapped: */ getUseNotification(): boolean;
    // private uuidGameModeCache: Map<UUID, GameType>;
    // private uuidNameCache: Map<UUID, string>;
    // private worldChangeHandler: EventHook<WorldChangeEvent>;
    // private handleGameModeUpdate(entry: ClientboundPlayerInfoUpdatePacket$Entry, isInitializing: boolean): void;
    // private handleHeldItems(player: RemotePlayer): void;
    // private handleItemConsumption(player: RemotePlayer): void;
    // private handlePlayerAdd(entry: ClientboundPlayerInfoUpdatePacket$Entry): void;
    onDisabled(): void;
    onEnabled(): void;
    // private sendHeldItemMessage(player: RemotePlayer, itemStack: ItemStack, hand: InteractionHand): void;
    // private sendNotifierMessage(message: string): void;
}