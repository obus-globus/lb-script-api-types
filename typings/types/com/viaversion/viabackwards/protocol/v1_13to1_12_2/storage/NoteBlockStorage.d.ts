import type { StorableObject } from '../../../../../../com/viaversion/viaversion/api/connection/StorableObject.d.ts'
import type { BlockPosition } from '../../../../../../com/viaversion/viaversion/api/minecraft/BlockPosition.d.ts'
import type { Pair } from '../../../../../../com/viaversion/viaversion/util/Pair.d.ts'
import type { Object } from '../../../../../../java/lang/Object.d.ts'
export class NoteBlockStorage extends Object implements StorableObject {
    constructor()
    // private noteBlockUpdates: { [key: string]: any };
    clear(): void;
    getNoteBlockUpdate(arg0: BlockPosition): Pair<number, number>;
    onRemove(): void;
    storeNoteBlockUpdate(arg0: BlockPosition, arg1: number): void;
}