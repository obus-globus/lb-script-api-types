import type { FieldNamingStrategy } from '../../../../../com/viaversion/viaversion/libs/gson/FieldNamingStrategy.d.ts'
import type { Class } from '../../../../../java/lang/Class.d.ts'
import type { Field } from '../../../../../java/lang/reflect/Field.d.ts'
import type { Enum } from '../../../../../java/lang/Enum.d.ts'
export class FieldNamingPolicy extends Enum<FieldNamingPolicy> implements FieldNamingStrategy {
    static IDENTITY: FieldNamingPolicy;
    static LOWER_CASE_WITH_DASHES: FieldNamingPolicy;
    static LOWER_CASE_WITH_DOTS: FieldNamingPolicy;
    static LOWER_CASE_WITH_UNDERSCORES: FieldNamingPolicy;
    static UPPER_CAMEL_CASE: FieldNamingPolicy;
    static UPPER_CAMEL_CASE_WITH_SPACES: FieldNamingPolicy;
    static UPPER_CASE_WITH_UNDERSCORES: FieldNamingPolicy;
    static valueOf<T extends Enum<T>>(paramarg0: Class<T>, paramarg1: string): T;
    static valueOf(paramarg0: string): FieldNamingPolicy;
    static values(): FieldNamingPolicy[];
    private constructor()
    alternateNames(arg0: Field): string[];
    translateName(arg0: Field): string;
    name(): "IDENTITY" | "UPPER_CAMEL_CASE" | "UPPER_CAMEL_CASE_WITH_SPACES" | "UPPER_CASE_WITH_UNDERSCORES" | "LOWER_CASE_WITH_UNDERSCORES" | "LOWER_CASE_WITH_DASHES" | "LOWER_CASE_WITH_DOTS";
}