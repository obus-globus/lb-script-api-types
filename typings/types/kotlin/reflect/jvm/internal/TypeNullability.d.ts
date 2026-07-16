import type { Serializable } from '../../../../java/io/Serializable.d.ts'
import type { Class } from '../../../../java/lang/Class.d.ts'
import type { Enum } from '../../../../java/lang/Enum.d.ts'
export class TypeNullability extends Enum<TypeNullability> implements Serializable {
    static FLEXIBLE: TypeNullability;
    static NOT_NULL: TypeNullability;
    static NULLABLE: TypeNullability;
    static valueOf<T extends Enum<T>>(paramarg0: Class<T>, paramarg1: string): T;
    static valueOf(value: string): TypeNullability;
    static values(): TypeNullability[];
    private constructor()
    name(): "NOT_NULL" | "NULLABLE" | "FLEXIBLE";
}