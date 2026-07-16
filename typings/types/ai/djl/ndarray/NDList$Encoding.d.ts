import type { Class } from '../../../java/lang/Class.d.ts'
import type { Enum } from '../../../java/lang/Enum.d.ts'
export class NDList$Encoding extends Enum<NDList$Encoding> {
    static ND_LIST: NDList$Encoding;
    static NPZ: NDList$Encoding;
    static SAFETENSORS: NDList$Encoding;
    static valueOf<T extends Enum<T>>(paramarg0: Class<T>, paramarg1: string): T;
    static valueOf(paramarg0: string): NDList$Encoding;
    static values(): NDList$Encoding[];
    private constructor()
    name(): "ND_LIST" | "NPZ" | "SAFETENSORS";
}