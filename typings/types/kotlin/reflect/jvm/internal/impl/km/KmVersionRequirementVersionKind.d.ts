import type { Class } from '../../../../../../java/lang/Class.d.ts'
import type { Object } from '../../../../../../java/lang/Object.d.ts'
import type { Enum } from '../../../../../../java/lang/Enum.d.ts'
export class KmVersionRequirementVersionKind extends Enum<KmVersionRequirementVersionKind> {
    static API_VERSION: KmVersionRequirementVersionKind;
    static COMPILER_VERSION: KmVersionRequirementVersionKind;
    static LANGUAGE_VERSION: KmVersionRequirementVersionKind;
    static UNKNOWN: KmVersionRequirementVersionKind;
    static valueOf(paramarg0: Class<Object>, paramarg1: string): Object | null;
    static valueOf(paramarg0: string): KmVersionRequirementVersionKind;
    static values(): KmVersionRequirementVersionKind[];
    private constructor()
    name(): "LANGUAGE_VERSION" | "COMPILER_VERSION" | "API_VERSION" | "UNKNOWN";
}