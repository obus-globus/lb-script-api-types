import type { Object } from '../../../../../../../../java/lang/Object.d.ts'
import type { ModuleNotebot$NotebotStageHandler } from '../../../../../../../../net/ccbluex/liquidbounce/features/module/modules/fun/notebot/ModuleNotebot$NotebotStageHandler.d.ts'
import type { NoteBlockTracker } from '../../../../../../../../net/ccbluex/liquidbounce/features/module/modules/fun/notebot/NoteBlockTracker.d.ts'
import type { NotebotScanner$BlocksAndRequirements } from '../../../../../../../../net/ccbluex/liquidbounce/features/module/modules/fun/notebot/NotebotScanner$BlocksAndRequirements.d.ts'
import type { SongData } from '../../../../../../../../net/ccbluex/liquidbounce/features/module/modules/fun/notebot/nbs/SongData.d.ts'
import type { BlockPos } from '../../../../../../../../net/minecraft/core/BlockPos.d.ts'
import type { ClientboundSoundPacket } from '../../../../../../../../net/minecraft/network/protocol/game/ClientboundSoundPacket.d.ts'
export class NotebotEngine extends Object {
    constructor(songData: SongData, blocksAndRequirements: NotebotScanner$BlocksAndRequirements)
    readonly blocksAndRequirements: NotebotScanner$BlocksAndRequirements;
    // private currentStageHandler: ModuleNotebot$NotebotStageHandler;
    // private notebotTrackerMap: Map<BlockPos, NoteBlockTracker>;
    readonly songData: SongData;
    // private ticksToWait: number | null;
    changeStage(handler: ModuleNotebot$NotebotStageHandler): void;
    handleSoundPacket(packet: ClientboundSoundPacket): void;
    onTick(): void;
}