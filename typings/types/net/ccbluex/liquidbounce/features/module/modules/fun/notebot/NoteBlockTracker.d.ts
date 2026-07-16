import type { GpuDevice } from '../../../../../../../../com/mojang/blaze3d/systems/GpuDevice.d.ts'
import type { Object } from '../../../../../../../../java/lang/Object.d.ts'
import type { MinecraftShortcuts } from '../../../../../../../../net/ccbluex/liquidbounce/features/module/MinecraftShortcuts.d.ts'
import type { Chronometer } from '../../../../../../../../net/ccbluex/liquidbounce/utils/client/Chronometer.d.ts'
import type { Minecraft } from '../../../../../../../../net/minecraft/client/Minecraft.d.ts'
import type { ClientLevel } from '../../../../../../../../net/minecraft/client/multiplayer/ClientLevel.d.ts'
import type { ClientPacketListener } from '../../../../../../../../net/minecraft/client/multiplayer/ClientPacketListener.d.ts'
import type { MultiPlayerGameMode } from '../../../../../../../../net/minecraft/client/multiplayer/MultiPlayerGameMode.d.ts'
import type { LocalPlayer } from '../../../../../../../../net/minecraft/client/player/LocalPlayer.d.ts'
import type { BlockPos } from '../../../../../../../../net/minecraft/core/BlockPos.d.ts'
export class NoteBlockTracker extends Object implements MinecraftShortcuts {
    constructor(pos: BlockPos)
    readonly currentNote: number | null;
    readonly gpuDevice: GpuDevice;
    readonly interaction: MultiPlayerGameMode;
    readonly mc: Minecraft;
    readonly network: ClientPacketListener;
    readonly player: LocalPlayer;
    readonly pos: BlockPos;
    // private testTimeout: Chronometer;
    // private tuneTimeout: Chronometer;
    readonly world: ClientLevel;
    canTestRightNow(): boolean;
    canTuneRightNow(): boolean;
    click(): void;
    equals(other: Object | null): boolean;
    hashCode(): number;
    // private interact(): void;
    setObservedNote(note: number): void;
    testOnce(): void;
    tuneOnce(): void;
}