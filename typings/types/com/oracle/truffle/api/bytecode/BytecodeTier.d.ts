import type { Class } from '../../../../../java/lang/Class.d.ts'
import type { Enum } from '../../../../../java/lang/Enum.d.ts'
export class BytecodeTier extends Enum<BytecodeTier> {
    static CACHED: BytecodeTier;
    static UNCACHED: BytecodeTier;
    static valueOf<T extends Enum<T>>(paramarg0: Class<T>, paramarg1: string): T;
    static valueOf(paramname: string): BytecodeTier;
    static values(): BytecodeTier[];
    private constructor()
    name(): "UNCACHED" | "CACHED";
}