import type { Class } from '../../../java/lang/Class.d.ts'
import type { Enum } from '../../../java/lang/Enum.d.ts'
export class EnvType extends Enum<EnvType> {
    static CLIENT: EnvType;
    static SERVER: EnvType;
    static valueOf<T extends Enum<T>>(paramarg0: Class<T>, paramarg1: string): T;
    static valueOf(paramarg0: string): EnvType;
    static values(): EnvType[];
    private constructor()
    name(): "CLIENT" | "SERVER";
}