import type { Serializable } from '../../java/io/Serializable.d.ts'
import type { Class } from '../../java/lang/Class.d.ts'
import type { Object } from '../../java/lang/Object.d.ts'
import type { Enum } from '../../java/lang/Enum.d.ts'
export class RequireKotlinVersionKind extends Enum<RequireKotlinVersionKind> implements Serializable {
    static API_VERSION: RequireKotlinVersionKind;
    static COMPILER_VERSION: RequireKotlinVersionKind;
    static LANGUAGE_VERSION: RequireKotlinVersionKind;
    static getEntries(): RequireKotlinVersionKind[];
    static valueOf(paramarg0: Class<Object>, paramarg1: string): Object | null;
    static valueOf(paramarg0: string): RequireKotlinVersionKind;
    static values(): (Object | null)[];
    private constructor()
    name(): "LANGUAGE_VERSION" | "COMPILER_VERSION" | "API_VERSION";
}