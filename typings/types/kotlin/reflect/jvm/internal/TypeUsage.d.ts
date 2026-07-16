import type { Serializable } from '../../../../java/io/Serializable.d.ts'
import type { Class } from '../../../../java/lang/Class.d.ts'
import type { Enum } from '../../../../java/lang/Enum.d.ts'
export class TypeUsage extends Enum<TypeUsage> implements Serializable {
    static COMMON: TypeUsage;
    static SUPERTYPE: TypeUsage;
    static valueOf<T extends Enum<T>>(paramarg0: Class<T>, paramarg1: string): T;
    static valueOf(value: string): TypeUsage;
    static values(): TypeUsage[];
    private constructor()
    name(): "SUPERTYPE" | "COMMON";
}