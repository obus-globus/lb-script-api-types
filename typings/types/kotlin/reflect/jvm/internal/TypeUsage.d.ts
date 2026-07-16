import type { Serializable } from '../../../../java/io/Serializable.d.ts'
import type { Class } from '../../../../java/lang/Class.d.ts'
import type { Object } from '../../../../java/lang/Object.d.ts'
import type { Enum } from '../../../../java/lang/Enum.d.ts'
export class TypeUsage extends Enum<TypeUsage> implements Serializable {
    static COMMON: TypeUsage;
    static SUPERTYPE: TypeUsage;
    static valueOf(paramarg0: Class<Object>, paramarg1: string): Object | null;
    static valueOf(paramarg0: string): TypeUsage;
    static values(): TypeUsage[];
    private constructor()
    name(): "SUPERTYPE" | "COMMON";
}