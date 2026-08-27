import type { JavaMap } from '../../../../../../JavaMap.d.ts'
import type { BlockPosition } from '../../../../../../com/viaversion/viaversion/api/minecraft/BlockPosition.d.ts'
import type { Pair } from '../../../../../../com/viaversion/viaversion/util/Pair.d.ts'
import type { Object } from '../../../../../../java/lang/Object.d.ts'
export class NoteBlockStorage extends Object {
    constructor()
    // private noteBlockUpdates: JavaMap<any, any>;
    clear(): void;
    getNoteBlockUpdate(arg0: BlockPosition): Pair<number, number>;
    storeNoteBlockUpdate(arg0: BlockPosition, arg1: number): void;
}