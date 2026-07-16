import type { Class } from '../../../../../../java/lang/Class.d.ts'
import type { Enum } from '../../../../../../java/lang/Enum.d.ts'
export class ChunkType extends Enum<ChunkType> {
    static LEVELCHUNK: ChunkType;
    static PROTOCHUNK: ChunkType;
    static valueOf<T extends Enum<T>>(paramarg0: Class<T>, paramarg1: string): T;
    static valueOf(paramname: string): ChunkType;
    static values(): ChunkType[];
    private constructor()
    name(): "PROTOCHUNK" | "LEVELCHUNK";
}