import type { Class } from '../../../../java/lang/Class.d.ts'
import type { Enum } from '../../../../java/lang/Enum.d.ts'
export class FullChunkStatus extends Enum<FullChunkStatus> {
    static BLOCK_TICKING: FullChunkStatus;
    static ENTITY_TICKING: FullChunkStatus;
    static FULL: FullChunkStatus;
    static INACCESSIBLE: FullChunkStatus;
    static valueOf<T extends Enum<T>>(paramarg0: Class<T>, paramarg1: string): T;
    static valueOf(paramname: string): FullChunkStatus;
    static values(): FullChunkStatus[];
    private constructor()
    isOrAfter(step: FullChunkStatus): boolean;
    name(): "INACCESSIBLE" | "FULL" | "BLOCK_TICKING" | "ENTITY_TICKING";
}