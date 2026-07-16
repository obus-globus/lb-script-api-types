import type { Class } from '../../../../../../java/lang/Class.d.ts'
import type { Object } from '../../../../../../java/lang/Object.d.ts'
import type { Enum } from '../../../../../../java/lang/Enum.d.ts'
export class ChunkType extends Enum<ChunkType> {
    static LEVELCHUNK: ChunkType;
    static PROTOCHUNK: ChunkType;
    static valueOf(paramarg0: Class<Object>, paramarg1: string): Object | null;
    static valueOf(paramname: string): ChunkType;
    static values(): ChunkType[];
    private constructor()
    name(): "PROTOCHUNK" | "LEVELCHUNK";
}