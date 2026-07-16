import type { GpuDevice } from '../../../../../../../../../com/mojang/blaze3d/systems/GpuDevice.d.ts'
import type { Object } from '../../../../../../../../../java/lang/Object.d.ts'
import type { MinecraftShortcuts } from '../../../../../../../../../net/ccbluex/liquidbounce/features/module/MinecraftShortcuts.d.ts'
import type { PlacementCondition } from '../../../../../../../../../net/ccbluex/liquidbounce/features/module/modules/combat/crystalaura/place/PlacementCondition.d.ts'
import type { PlacementPositionCandidate } from '../../../../../../../../../net/ccbluex/liquidbounce/features/module/modules/combat/crystalaura/place/PlacementPositionCandidate.d.ts'
import type { Minecraft } from '../../../../../../../../../net/minecraft/client/Minecraft.d.ts'
import type { ClientLevel } from '../../../../../../../../../net/minecraft/client/multiplayer/ClientLevel.d.ts'
import type { ClientPacketListener } from '../../../../../../../../../net/minecraft/client/multiplayer/ClientPacketListener.d.ts'
import type { MultiPlayerGameMode } from '../../../../../../../../../net/minecraft/client/multiplayer/MultiPlayerGameMode.d.ts'
import type { LocalPlayer } from '../../../../../../../../../net/minecraft/client/player/LocalPlayer.d.ts'
import type { BlockPos } from '../../../../../../../../../net/minecraft/core/BlockPos.d.ts'
export class CrystalAuraPlaceTargetFactory extends Object implements MinecraftShortcuts {
    static INSTANCE: CrystalAuraPlaceTargetFactory;
    // private conditionChain: PlacementCondition[];
    readonly gpuDevice: GpuDevice;
    readonly interaction: MultiPlayerGameMode;
    readonly mc: Minecraft;
    readonly network: ClientPacketListener;
    placementTarget: BlockPos | null;
    readonly player: LocalPlayer;
    previousTarget: BlockPos | null;
    // private sphere: BlockPos[];
    readonly world: ClientLevel;
    // private evaluateCandidatePositions(basePlace: boolean, excludeIds: number[] | null, positions: PlacementPositionCandidate[]): boolean;
    // private selectOptimalCandidate(finalPositions: PlacementPositionCandidate[], currentBasePlaceTarget: PlacementPositionCandidate | null): PlacementPositionCandidate | null;
    updateSphere(): void;
    updateTarget(excludeIds: number[] | null): void;
}