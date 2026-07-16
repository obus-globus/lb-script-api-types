import type { Class } from '../../../java/lang/Class.d.ts'
import type { Enum } from '../../../java/lang/Enum.d.ts'
export class LZ4JNI extends Enum<LZ4JNI> {
    static valueOf<T extends Enum<T>>(paramarg0: Class<T>, paramarg1: string): T;
    static valueOf(paramarg0: string): LZ4JNI;
    static values(): LZ4JNI[];
    private constructor()
}