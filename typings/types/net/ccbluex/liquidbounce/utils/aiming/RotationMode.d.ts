import type { GpuDevice } from '../../../../../com/mojang/blaze3d/systems/GpuDevice.d.ts'
import type { Runnable } from '../../../../../java/lang/Runnable.d.ts'
import type { BooleanSupplier } from '../../../../../java/util/function/BooleanSupplier.d.ts'
import type { Mode } from '../../../../../net/ccbluex/liquidbounce/config/types/group/Mode.d.ts'
import type { ModeValueGroup } from '../../../../../net/ccbluex/liquidbounce/config/types/group/ModeValueGroup.d.ts'
import type { Tagged$Companion } from '../../../../../net/ccbluex/liquidbounce/config/types/list/Tagged$Companion.d.ts'
import type { ClientModule } from '../../../../../net/ccbluex/liquidbounce/features/module/ClientModule.d.ts'
import type { MinecraftShortcuts } from '../../../../../net/ccbluex/liquidbounce/features/module/MinecraftShortcuts.d.ts'
import type { Rotation } from '../../../../../net/ccbluex/liquidbounce/utils/aiming/data/Rotation.d.ts'
import type { Minecraft } from '../../../../../net/minecraft/client/Minecraft.d.ts'
import type { ClientLevel } from '../../../../../net/minecraft/client/multiplayer/ClientLevel.d.ts'
import type { ClientPacketListener } from '../../../../../net/minecraft/client/multiplayer/ClientPacketListener.d.ts'
import type { MultiPlayerGameMode } from '../../../../../net/minecraft/client/multiplayer/MultiPlayerGameMode.d.ts'
import type { LocalPlayer } from '../../../../../net/minecraft/client/player/LocalPlayer.d.ts'
export class RotationMode extends Mode implements MinecraftShortcuts {
    static Companion: Tagged$Companion;
    protected constructor(name: string, modeValueGroup: ModeValueGroup<RotationMode>, module: ClientModule)
    readonly gpuDevice: GpuDevice;
    /**
     * Instantly sends the action if possible.
     * This does not account for packet order and might flag on some anti-cheats.
     *
     * PostMove might be irrelevant if this is enabled.
     *
     * Source: {@link https://github.com/CCBlueX/LiquidBounce/blob/567a259aa7f4250a1b2911700de4282fe934a3d9/src/main/kotlin/net/ccbluex/liquidbounce/utils/aiming/RotationModes.kt#L51 | src/main/kotlin/net/ccbluex/liquidbounce/utils/aiming/RotationModes.kt:51}
     */
    readonly instant: boolean;
    readonly interaction: MultiPlayerGameMode;
    readonly mc: Minecraft;
    // private modeValueGroup: ModeValueGroup<RotationMode>;
    readonly module: ClientModule;
    readonly network: ClientPacketListener;
    readonly parent: ModeValueGroup<any>;
    readonly player: LocalPlayer;
    /**
     * Already sends the packet on post-move.
     * This might get us a little advantage because the packets are added a little bit earlier to the server tick queue.
     *
     * The downside is that it is not legit and will flag post-rotation checks on some anti-cheats.
     *
     * Source: {@link https://github.com/CCBlueX/LiquidBounce/blob/567a259aa7f4250a1b2911700de4282fe934a3d9/src/main/kotlin/net/ccbluex/liquidbounce/utils/aiming/RotationModes.kt#L43 | src/main/kotlin/net/ccbluex/liquidbounce/utils/aiming/RotationModes.kt:43}
     */
    readonly postMove: boolean;
    readonly world: ClientLevel;
    rotate(rotation: Rotation, isFinished: () => boolean, onFinished: () => void): void;
}