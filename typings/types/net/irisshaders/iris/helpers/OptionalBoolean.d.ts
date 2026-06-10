import type { Class } from '../../../../java/lang/Class.d.ts'
import type { BooleanSupplier } from '../../../../java/util/function/BooleanSupplier.d.ts'
import type { Object } from '../../../../java/lang/Object.d.ts'
import type { Enum } from '../../../../java/lang/Enum.d.ts'
export class OptionalBoolean extends Enum<OptionalBoolean> {
    static DEFAULT: OptionalBoolean;
    static FALSE: OptionalBoolean;
    static TRUE: OptionalBoolean;
    static valueOf(paramarg0: Class<Object>, paramarg1: string): Object | null;
    static valueOf(paramarg0: string): OptionalBoolean;
    static values(): (Object | null)[];
    private constructor()
    orElse(arg0: boolean): boolean;
    orElseGet(arg0: () => boolean): boolean;
    name(): "DEFAULT" | "FALSE" | "TRUE";
}