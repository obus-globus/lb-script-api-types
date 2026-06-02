import type { Class } from '../../../../../../java/lang/Class.d.ts'
import type { Object } from '../../../../../../java/lang/Object.d.ts'
import type { Enum } from '../../../../../../java/lang/Enum.d.ts'
import type { FieldNamingStrategy } from '../../../../../../org/spongepowered/include/com/google/gson/FieldNamingStrategy.d.ts'
export class FieldNamingPolicy extends Enum<FieldNamingPolicy> implements FieldNamingStrategy {
    static IDENTITY: FieldNamingPolicy;
    static LOWER_CASE_WITH_DASHES: FieldNamingPolicy;
    static LOWER_CASE_WITH_UNDERSCORES: FieldNamingPolicy;
    static UPPER_CAMEL_CASE: FieldNamingPolicy;
    static UPPER_CAMEL_CASE_WITH_SPACES: FieldNamingPolicy;
    static valueOf(paramarg0: Class<Object>, paramarg1: string): Object | null;
    static valueOf(paramarg0: string): FieldNamingPolicy;
    static values(): (Object | null)[];
    private constructor()
    name(): "IDENTITY" | "UPPER_CAMEL_CASE" | "UPPER_CAMEL_CASE_WITH_SPACES" | "LOWER_CASE_WITH_UNDERSCORES" | "LOWER_CASE_WITH_DASHES";
}