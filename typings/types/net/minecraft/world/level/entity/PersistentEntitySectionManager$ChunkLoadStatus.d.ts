import type { Class } from '../../../../../java/lang/Class.d.ts'
import type { Object } from '../../../../../java/lang/Object.d.ts'
import type { Enum } from '../../../../../java/lang/Enum.d.ts'
export class PersistentEntitySectionManager$ChunkLoadStatus extends Enum<PersistentEntitySectionManager$ChunkLoadStatus> {
    static FRESH: PersistentEntitySectionManager$ChunkLoadStatus;
    static LOADED: PersistentEntitySectionManager$ChunkLoadStatus;
    static PENDING: PersistentEntitySectionManager$ChunkLoadStatus;
    static valueOf(paramarg0: Class<Object>, paramarg1: string): Object | null;
    static valueOf(paramname: string): PersistentEntitySectionManager$ChunkLoadStatus;
    static values(): (Object | null)[];
    private constructor()
    name(): "FRESH" | "PENDING" | "LOADED";
}