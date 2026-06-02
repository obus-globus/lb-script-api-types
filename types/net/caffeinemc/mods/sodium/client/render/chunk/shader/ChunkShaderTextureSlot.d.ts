import type { Class } from '../../../../../../../../java/lang/Class.d.ts'
import type { Object } from '../../../../../../../../java/lang/Object.d.ts'
import type { Enum } from '../../../../../../../../java/lang/Enum.d.ts'
export class ChunkShaderTextureSlot extends Enum<ChunkShaderTextureSlot> {
    static BLOCK: ChunkShaderTextureSlot;
    static LIGHT: ChunkShaderTextureSlot;
    static VALUES: (Object | null)[];
    static valueOf(paramarg0: Class<Object>, paramarg1: string): Object | null;
    static valueOf(paramarg0: string): ChunkShaderTextureSlot;
    static values(): (Object | null)[];
    private constructor()
    name(): "BLOCK" | "LIGHT";
}