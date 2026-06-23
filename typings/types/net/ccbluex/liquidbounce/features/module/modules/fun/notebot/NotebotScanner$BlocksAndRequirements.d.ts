import type { Object } from '../../../../../../../../java/lang/Object.d.ts'
import type { NoteBlockTracker } from '../../../../../../../../net/ccbluex/liquidbounce/features/module/modules/fun/notebot/NoteBlockTracker.d.ts'
import type { NoteBlockInstrument } from '../../../../../../../../net/minecraft/world/level/block/state/properties/NoteBlockInstrument.d.ts'
export class NotebotScanner$BlocksAndRequirements extends Object {
    constructor(availableBlocks: { [key in NoteBlockInstrument]: NoteBlockTracker[] }, requirements: { [key: string]: any })
    readonly availableBlocks: { [key in NoteBlockInstrument]: NoteBlockTracker[] };
    readonly requirements: { [key: string]: any };
    printRequirements(): void;
    validateRequirements(): boolean;
}