import type { Class } from '../../../java/lang/Class.d.ts'
import type { Object } from '../../../java/lang/Object.d.ts'
import type { Enum } from '../../../java/lang/Enum.d.ts'
export class EnvType extends Enum<EnvType> {
    static CLIENT: EnvType;
    static SERVER: EnvType;
    static valueOf(paramarg0: Class<Object>, paramarg1: string): Object | null;
    static valueOf(paramarg0: string): EnvType;
    static values(): EnvType[];
    private constructor()
    name(): "CLIENT" | "SERVER";
}