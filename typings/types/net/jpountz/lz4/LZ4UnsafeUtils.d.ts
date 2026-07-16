import type { Class } from '../../../java/lang/Class.d.ts'
import type { Enum } from '../../../java/lang/Enum.d.ts'
export class LZ4UnsafeUtils extends Enum<LZ4UnsafeUtils> {
    static valueOf<T extends Enum<T>>(paramarg0: Class<T>, paramarg1: string): T;
    static valueOf(paramarg0: string): LZ4UnsafeUtils;
    static values(): LZ4UnsafeUtils[];
    private constructor()
}