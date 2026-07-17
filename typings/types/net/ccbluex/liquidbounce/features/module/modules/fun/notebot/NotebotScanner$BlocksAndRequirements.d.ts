import type { JavaMap } from '../../../../../../../../JavaMap.d.ts'
import type { Object } from '../../../../../../../../java/lang/Object.d.ts'
import type { NoteBlockTracker } from '../../../../../../../../net/ccbluex/liquidbounce/features/module/modules/fun/notebot/NoteBlockTracker.d.ts'
import type { NoteBlockInstrument } from '../../../../../../../../net/minecraft/world/level/block/state/properties/NoteBlockInstrument.d.ts'
export class NotebotScanner$BlocksAndRequirements extends Object {
    constructor(availableBlocks: JavaMap<NoteBlockInstrument, NoteBlockTracker[]>, requirements: JavaMap<any, any>)
    readonly availableBlocks: JavaMap<NoteBlockInstrument, NoteBlockTracker[]>;
    readonly requirements: JavaMap<any, any>;
    printRequirements(): void;
    validateRequirements(): boolean;
}