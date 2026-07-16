import type { Serializable } from '../../java/io/Serializable.d.ts'
import type { Class } from '../../java/lang/Class.d.ts'
import type { Enum } from '../../java/lang/Enum.d.ts'
export class RequireKotlinVersionKind extends Enum<RequireKotlinVersionKind> implements Serializable {
    static API_VERSION: RequireKotlinVersionKind;
    static COMPILER_VERSION: RequireKotlinVersionKind;
    static LANGUAGE_VERSION: RequireKotlinVersionKind;
    static getEntries(): RequireKotlinVersionKind[];
    static valueOf<T extends Enum<T>>(paramarg0: Class<T>, paramarg1: string): T;
    static valueOf(value: string): RequireKotlinVersionKind;
    static values(): RequireKotlinVersionKind[];
    private constructor()
    name(): "LANGUAGE_VERSION" | "COMPILER_VERSION" | "API_VERSION";
}