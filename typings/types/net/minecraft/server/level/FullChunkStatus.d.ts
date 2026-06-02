import type { Class } from '../../../../java/lang/Class.d.ts'
import type { Object } from '../../../../java/lang/Object.d.ts'
import type { Enum } from '../../../../java/lang/Enum.d.ts'
export class FullChunkStatus extends Enum<FullChunkStatus> {
    static BLOCK_TICKING: FullChunkStatus;
    static ENTITY_TICKING: FullChunkStatus;
    static FULL: FullChunkStatus;
    static INACCESSIBLE: FullChunkStatus;
    static valueOf(paramarg0: Class<Object>, paramarg1: string): Object | null;
    static valueOf(paramname: string): FullChunkStatus;
    static values(): (Object | null)[];
    private constructor()
    isOrAfter(step: FullChunkStatus): boolean;
    name(): "INACCESSIBLE" | "FULL" | "BLOCK_TICKING" | "ENTITY_TICKING";
}