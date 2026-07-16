import type { Class } from '../../../../../../../../java/lang/Class.d.ts'
import type { Enum } from '../../../../../../../../java/lang/Enum.d.ts'
export class CullType extends Enum<CullType> {
    static LOCAL: CullType;
    static NARROW_TO_WIDE: CullType[];
    static REGULAR: CullType;
    static WIDE: CullType;
    static valueOf<T extends Enum<T>>(paramarg0: Class<T>, paramarg1: string): T;
    static valueOf(paramarg0: string): CullType;
    static values(): CullType[];
    private constructor(arg2: string, arg3: number, arg4: boolean, arg5: boolean)
    abbreviation: string;
    bfsWidth: number;
    isFogCulled: boolean;
    isFrustumTested: boolean;
    name(): "WIDE" | "REGULAR" | "LOCAL";
}