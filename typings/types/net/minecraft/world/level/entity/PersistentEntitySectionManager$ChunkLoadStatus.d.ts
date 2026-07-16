import type { Class } from '../../../../../java/lang/Class.d.ts'
import type { Enum } from '../../../../../java/lang/Enum.d.ts'
export class PersistentEntitySectionManager$ChunkLoadStatus extends Enum<PersistentEntitySectionManager$ChunkLoadStatus> {
    static FRESH: PersistentEntitySectionManager$ChunkLoadStatus;
    static LOADED: PersistentEntitySectionManager$ChunkLoadStatus;
    static PENDING: PersistentEntitySectionManager$ChunkLoadStatus;
    static valueOf<T extends Enum<T>>(paramarg0: Class<T>, paramarg1: string): T;
    static valueOf(paramname: string): PersistentEntitySectionManager$ChunkLoadStatus;
    static values(): PersistentEntitySectionManager$ChunkLoadStatus[];
    private constructor()
    name(): "FRESH" | "PENDING" | "LOADED";
}