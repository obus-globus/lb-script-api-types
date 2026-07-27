import type { JavaMap } from '../../../../../../../../../JavaMap.d.ts'
import type { JsonObject } from '../../../../../../../../../com/google/gson/JsonObject.d.ts'
import type { GpuDevice } from '../../../../../../../../../com/mojang/blaze3d/systems/GpuDevice.d.ts'
import type { Object } from '../../../../../../../../../java/lang/Object.d.ts'
import type { ClosedFloatingPointRange } from '../../../../../../../../../kotlin/ranges/ClosedFloatingPointRange.d.ts'
import type { MinecraftShortcuts } from '../../../../../../../../../net/ccbluex/liquidbounce/features/module/MinecraftShortcuts.d.ts'
import type { RangeValueGroup } from '../../../../../../../../../net/ccbluex/liquidbounce/utils/range/RangeValueGroup.d.ts'
import type { Minecraft } from '../../../../../../../../../net/minecraft/client/Minecraft.d.ts'
import type { ClientLevel } from '../../../../../../../../../net/minecraft/client/multiplayer/ClientLevel.d.ts'
import type { ClientPacketListener } from '../../../../../../../../../net/minecraft/client/multiplayer/ClientPacketListener.d.ts'
import type { MultiPlayerGameMode } from '../../../../../../../../../net/minecraft/client/multiplayer/MultiPlayerGameMode.d.ts'
import type { LocalPlayer } from '../../../../../../../../../net/minecraft/client/player/LocalPlayer.d.ts'
/**
 * Allows adjusting your attack range and scan range.
 *
 * Source: {@link https://github.com/CCBlueX/LiquidBounce/blob/c86714198f6c981b97c9965ca188b8b8598816e4/src/main/kotlin/net/ccbluex/liquidbounce/features/module/modules/combat/killaura/features/KillAuraRange.kt#L34 | src/main/kotlin/net/ccbluex/liquidbounce/features/module/modules/combat/killaura/features/KillAuraRange.kt:34}
 */
export class KillAuraRange extends RangeValueGroup implements MinecraftShortcuts {
    static INSTANCE: KillAuraRange;
    // private currentScanRangeAddition: number;
    readonly gpuDevice: GpuDevice;
    readonly interaction: MultiPlayerGameMode;
    readonly mc: Minecraft;
    readonly network: ClientPacketListener;
    readonly player: LocalPlayer;
    /*not mapped: */ getScanRange$net_ccbluex_liquidbounce(): number;
    // private scanRangeIncrease: ClosedFloatingPointRange<number>;
    // private /*not mapped: */ getScanRangeIncrease(): ClosedFloatingPointRange<number>;
    readonly world: ClientLevel;
    /**
     * Migrates the old values from the config.
     *
     * todo: remove this when no one uses the format anymore
     *
     * Source: {@link https://github.com/CCBlueX/LiquidBounce/blob/c86714198f6c981b97c9965ca188b8b8598816e4/src/main/kotlin/net/ccbluex/liquidbounce/features/module/modules/combat/killaura/features/KillAuraRange.kt#L58 | src/main/kotlin/net/ccbluex/liquidbounce/features/module/modules/combat/killaura/features/KillAuraRange.kt:58}
     */
    migrateFromValues(map: JavaMap<string, JsonObject[]>): void;
    update(): void;
    // private withDummy<T extends unknown>(name: string, jsonObject: JsonObject, value: T): T;
}