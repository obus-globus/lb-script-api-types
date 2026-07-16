import type { Class } from '../../../java/lang/Class.d.ts'
import type { Enum } from '../../../java/lang/Enum.d.ts'
export class LZ4Constants extends Enum<LZ4Constants> {
    static valueOf<T extends Enum<T>>(paramarg0: Class<T>, paramarg1: string): T;
    static valueOf(paramarg0: string): LZ4Constants;
    static values(): LZ4Constants[];
    private constructor()
}