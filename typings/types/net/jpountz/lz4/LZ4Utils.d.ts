import type { Class } from '../../../java/lang/Class.d.ts'
import type { Enum } from '../../../java/lang/Enum.d.ts'
export class LZ4Utils extends Enum<LZ4Utils> {
    static valueOf<T extends Enum<T>>(paramarg0: Class<T>, paramarg1: string): T;
    static valueOf(paramarg0: string): LZ4Utils;
    static values(): LZ4Utils[];
    private constructor()
}