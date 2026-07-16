import type { Class } from '../../../../java/lang/Class.d.ts'
import type { Object } from '../../../../java/lang/Object.d.ts'
import type { Enum } from '../../../../java/lang/Enum.d.ts'
export class SuppressedBy extends Enum<SuppressedBy> {
    static CONSTRAINTS: SuppressedBy;
    static DEFAULT_PACKAGE: SuppressedBy;
    static MAPPING: SuppressedBy;
    static OVERWRITE: SuppressedBy;
    static PUBLIC_TARGET: SuppressedBy;
    static RAW_TYPES: SuppressedBy;
    static TARGET: SuppressedBy;
    static UNRESOLVABLE_TARGET: SuppressedBy;
    static VISIBILITY: SuppressedBy;
    static valueOf(paramarg0: Class<Object>, paramarg1: string): Object | null;
    static valueOf(paramarg0: string): SuppressedBy;
    static values(): SuppressedBy[];
    private constructor(arg2: string)
    readonly token: string;
    getToken(): string;
    name(): "CONSTRAINTS" | "VISIBILITY" | "TARGET" | "MAPPING" | "OVERWRITE" | "DEFAULT_PACKAGE" | "PUBLIC_TARGET" | "UNRESOLVABLE_TARGET" | "RAW_TYPES";
}