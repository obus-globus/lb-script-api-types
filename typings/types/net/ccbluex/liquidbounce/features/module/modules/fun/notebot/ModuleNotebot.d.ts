import type { FileValue } from '../../../../../../../../net/ccbluex/liquidbounce/config/types/FileValue.d.ts'
import type { EventHook } from '../../../../../../../../net/ccbluex/liquidbounce/event/EventHook.d.ts'
import type { GameTickEvent } from '../../../../../../../../net/ccbluex/liquidbounce/event/events/GameTickEvent.d.ts'
import type { PacketEvent } from '../../../../../../../../net/ccbluex/liquidbounce/event/events/PacketEvent.d.ts'
import type { ClientModule } from '../../../../../../../../net/ccbluex/liquidbounce/features/module/ClientModule.d.ts'
import type { NoteBlockTracker } from '../../../../../../../../net/ccbluex/liquidbounce/features/module/modules/fun/notebot/NoteBlockTracker.d.ts'
import type { NotebotEngine } from '../../../../../../../../net/ccbluex/liquidbounce/features/module/modules/fun/notebot/NotebotEngine.d.ts'
import type { NotebotRenderer } from '../../../../../../../../net/ccbluex/liquidbounce/features/module/modules/fun/notebot/NotebotRenderer.d.ts'
import type { InstrumentNote } from '../../../../../../../../net/ccbluex/liquidbounce/features/module/modules/fun/notebot/nbs/InstrumentNote.d.ts'
import type { NbsNoteBlock } from '../../../../../../../../net/ccbluex/liquidbounce/features/module/modules/fun/notebot/nbs/NbsNoteBlock.d.ts'
import type { SongData } from '../../../../../../../../net/ccbluex/liquidbounce/features/module/modules/fun/notebot/nbs/SongData.d.ts'
import type { RotationsValueGroup } from '../../../../../../../../net/ccbluex/liquidbounce/utils/aiming/RotationsValueGroup.d.ts'
import type { MessageMetadata } from '../../../../../../../../net/ccbluex/liquidbounce/utils/client/MessageMetadata.d.ts'
import type { MutableComponent } from '../../../../../../../../net/minecraft/network/chat/MutableComponent.d.ts'
import type { NoteBlockInstrument } from '../../../../../../../../net/minecraft/world/level/block/state/properties/NoteBlockInstrument.d.ts'
/**
 * Notebot Module
 *
 * Automatically plays note block songs from NBS files.
 *
 * @author ccetl
 *
 * Source: {@link https://github.com/CCBlueX/LiquidBounce/blob/a70a63864fcba3b841f36d8b1ab0c71ea03e76f8/src/main/kotlin/net/ccbluex/liquidbounce/features/module/modules/fun/notebot/ModuleNotebot.kt#L58 | src/main/kotlin/net/ccbluex/liquidbounce/features/module/modules/fun/notebot/ModuleNotebot.kt:58}
 */
export class ModuleNotebot extends ClientModule {
    static INSTANCE: ModuleNotebot;
    readonly engine: NotebotEngine | null;
    readonly ignoreOpenInventory: boolean;
    // private packetHandler: EventHook<PacketEvent>;
    // private pianoOnly: boolean;
    // private /*not mapped: */ getPianoOnly(): boolean;
    // private progressMessageMetadata: MessageMetadata;
    readonly range: number;
    readonly renderer: NotebotRenderer;
    readonly reuseBlocks: boolean;
    readonly rotations: RotationsValueGroup;
    // private song: FileValue;
    // private tickHandler: EventHook<GameTickEvent>;
    // private checkRequirements(): boolean;
    enabledEffect(): void;
    getPlayedNote(note: NbsNoteBlock): InstrumentNote;
    getRequiredInstruments(songData: SongData): NoteBlockInstrument[];
    // private loadSongData(): SongData | null;
    onDisabled(): void;
    // private removeProgressMessage(): void;
    sendNewProgressMessage(name: MutableComponent, progress: number, total: number): void;
    setRenderedBlocks(blocks: NoteBlockTracker[]): void;
    // private showSongInfo(songData: SongData, messageMetadata: MessageMetadata): void;
}