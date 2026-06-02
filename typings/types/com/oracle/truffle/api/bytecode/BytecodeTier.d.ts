import type { Class } from '../../../../../java/lang/Class.d.ts'
import type { Object } from '../../../../../java/lang/Object.d.ts'
import type { Enum } from '../../../../../java/lang/Enum.d.ts'
export class BytecodeTier extends Enum<BytecodeTier> {
    static CACHED: BytecodeTier;
    static UNCACHED: BytecodeTier;
    static valueOf(paramarg0: Class<Object>, paramarg1: string): Object | null;
    static valueOf(paramname: string): BytecodeTier;
    static values(): (Object | null)[];
    private constructor()
    name(): "UNCACHED" | "CACHED";
}