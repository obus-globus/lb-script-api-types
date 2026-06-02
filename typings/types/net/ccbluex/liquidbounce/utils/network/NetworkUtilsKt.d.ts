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
    static clickBlockWithSlot(paramarg0: LocalPlayer, paramarg1: BlockHitResult, paramarg2: number, paramarg3: SwingMode, paramarg4: SwitchMode, paramarg5: boolean): void;
    static handlePacket(paramarg0: Packet<Object>): Object;
    static releaseUsingItemInTickLoop(paramarg0: MultiPlayerGameMode): void;
    /**
     * Sends an open inventory packet with the help of ViaFabricPlus. This is only for older versions. (<= 1.11.2)
     *
     * Source: {@link https://github.com/CCBlueX/LiquidBounce/blob/fac52d9c85c85141cb327e00599cdf8e0a7afc66/src/main/kotlin/net/ccbluex/liquidbounce/utils/network/NetworkUtils.kt#L75 | src/main/kotlin/net/ccbluex/liquidbounce/utils/network/NetworkUtils.kt:75}
     */
    static send1_11_1OpenInventory(paramarg0: ClientCommonPacketListenerImpl): void;
    static send1_21_5StartSneaking(paramarg0: ClientCommonPacketListenerImpl): void;
    static send1_21_5StopSneaking(paramarg0: ClientCommonPacketListenerImpl): void;
    static sendChatOrCommand(paramarg0: ClientPacketListener, paramarg1: string): void;
    static sendCloseInventory(paramarg0: ClientCommonPacketListenerImpl): void;
    static sendHeldItemChange(paramarg0: ClientCommonPacketListenerImpl, paramarg1: number): void;
    static sendPacketSilently(paramarg0: Packet<Object>): void;
    static sendStartSprinting(paramarg0: ClientCommonPacketListenerImpl): void;
    static sendStopSprinting(paramarg0: ClientCommonPacketListenerImpl): void;
    static sendSwapItemWithOffhand(paramarg0: ClientCommonPacketListenerImpl): void;
    /**
     * {@link MultiPlayerGameMode.useItem} but with custom rotations.
     *
     * Source: {@link https://github.com/CCBlueX/LiquidBounce/blob/fac52d9c85c85141cb327e00599cdf8e0a7afc66/src/main/kotlin/net/ccbluex/liquidbounce/utils/network/NetworkUtils.kt#L187 | src/main/kotlin/net/ccbluex/liquidbounce/utils/network/NetworkUtils.kt:187}
     */
    static useItem(paramarg0: MultiPlayerGameMode, paramarg1: Player, paramarg2: InteractionHand, paramarg3: number, paramarg4: number): InteractionResult;
}