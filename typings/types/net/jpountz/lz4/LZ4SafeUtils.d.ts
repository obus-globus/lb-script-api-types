import type { Class } from '../../../java/lang/Class.d.ts'
import type { Enum } from '../../../java/lang/Enum.d.ts'
export class LZ4SafeUtils extends Enum<LZ4SafeUtils> {
    static valueOf<T extends Enum<T>>(paramarg0: Class<T>, paramarg1: string): T;
    static valueOf(paramarg0: string): LZ4SafeUtils;
    static values(): LZ4SafeUtils[];
    private constructor()
}