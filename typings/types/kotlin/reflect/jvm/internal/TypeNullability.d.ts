import type { Serializable } from '../../../../java/io/Serializable.d.ts'
import type { Class } from '../../../../java/lang/Class.d.ts'
import type { Object } from '../../../../java/lang/Object.d.ts'
import type { Enum } from '../../../../java/lang/Enum.d.ts'
export class TypeNullability extends Enum<TypeNullability> implements Serializable {
    static FLEXIBLE: TypeNullability;
    static NOT_NULL: TypeNullability;
    static NULLABLE: TypeNullability;
    static valueOf(paramarg0: Class<Object>, paramarg1: string): Object | null;
    static valueOf(paramarg0: string): TypeNullability;
    static values(): (Object | null)[];
    private constructor()
    name(): "NOT_NULL" | "NULLABLE" | "FLEXIBLE";
}