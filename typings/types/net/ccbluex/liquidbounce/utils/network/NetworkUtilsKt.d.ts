import type { Object } from '../../../../../java/lang/Object.d.ts'
import type { SwitchMode } from '../../../../../net/ccbluex/liquidbounce/features/module/modules/combat/crystalaura/SwitchMode.d.ts'
import type { SwingMode } from '../../../../../net/ccbluex/liquidbounce/utils/block/SwingMode.d.ts'
import type { ClientCommonPacketListenerImpl } from '../../../../../net/minecraft/client/multiplayer/ClientCommonPacketListenerImpl.d.ts'
import type { ClientPacketListener } from '../../../../../net/minecraft/client/multiplayer/ClientPacketListener.d.ts'
import type { MultiPlayerGameMode } from '../../../../../net/minecraft/client/multiplayer/MultiPlayerGameMode.d.ts'
import type { LocalPlayer } from '../../../../../net/minecraft/client/player/LocalPlayer.d.ts'
import type { Packet } from '../../../../../net/minecraft/network/protocol/Packet.d.ts'
import type { InteractionHand } from '../../../../../net/minecraft/world/InteractionHand.d.ts'
import type { InteractionResult } from '../../../../../net/minecraft/world/InteractionResult.d.ts'
import type { Player } from '../../../../../net/minecraft/world/entity/player/Player.d.ts'
import type { BlockHitResult } from '../../../../../net/minecraft/world/phys/BlockHitResult.d.ts'
export class NetworkUtilsKt extends Object {
    static clickBlockWithSlot(localPlayer: LocalPlayer, rayTraceResult: BlockHitResult, slot: number, swingMode: SwingMode, switchMode: SwitchMode, sequenced: boolean): void;
    static handlePacket(packet: Packet<any>): Object;
    static releaseUsingItemInTickLoop(multiPlayerGameMode: MultiPlayerGameMode): void;
    /**
     * Sends an open inventory packet with the help of ViaFabricPlus. This is only for older versions. (<= 1.11.2)
     *
     * Source: {@link https://github.com/CCBlueX/LiquidBounce/blob/3bc82a3329f49d9150e48b299ce4a5e8571a038d/src/main/kotlin/net/ccbluex/liquidbounce/utils/network/NetworkUtils.kt#L78 | src/main/kotlin/net/ccbluex/liquidbounce/utils/network/NetworkUtils.kt:78}
     */
    static send1_11_1OpenInventory(clientCommonPacketListenerImpl: ClientCommonPacketListenerImpl): void;
    static send1_21_5StartSneaking(clientCommonPacketListenerImpl: ClientCommonPacketListenerImpl): void;
    static send1_21_5StopSneaking(clientCommonPacketListenerImpl: ClientCommonPacketListenerImpl): void;
    static sendChatOrCommand(clientPacketListener: ClientPacketListener, message: string): void;
    static sendCloseInventory(clientCommonPacketListenerImpl: ClientCommonPacketListenerImpl): void;
    static sendHeldItemChange(clientCommonPacketListenerImpl: ClientCommonPacketListenerImpl, slot: number): void;
    static sendPacketSilently(packet: Packet<any>): void;
    static sendStartSprinting(clientCommonPacketListenerImpl: ClientCommonPacketListenerImpl): void;
    static sendStopSprinting(clientCommonPacketListenerImpl: ClientCommonPacketListenerImpl): void;
    static sendSwapItemWithOffhand(clientCommonPacketListenerImpl: ClientCommonPacketListenerImpl): void;
    /**
     * {@link MultiPlayerGameMode.useItem} but with custom rotations.
     *
     * Source: {@link https://github.com/CCBlueX/LiquidBounce/blob/3bc82a3329f49d9150e48b299ce4a5e8571a038d/src/main/kotlin/net/ccbluex/liquidbounce/utils/network/NetworkUtils.kt#L190 | src/main/kotlin/net/ccbluex/liquidbounce/utils/network/NetworkUtils.kt:190}
     */
    static useItem(multiPlayerGameMode: MultiPlayerGameMode, player: Player, hand: InteractionHand, yRot: number, xRot: number): InteractionResult;
}