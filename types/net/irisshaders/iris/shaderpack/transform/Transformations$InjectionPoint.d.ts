import type { Class } from '../../../../../java/lang/Class.d.ts'
import type { Object } from '../../../../../java/lang/Object.d.ts'
import type { Enum } from '../../../../../java/lang/Enum.d.ts'
export class Transformations$InjectionPoint extends Enum<Transformations$InjectionPoint> {
    static BEFORE_CODE: Transformations$InjectionPoint;
    static DEFINES: Transformations$InjectionPoint;
    static END: Transformations$InjectionPoint;
    static valueOf(paramarg0: Class<Object>, paramarg1: string): Object | null;
    static valueOf(paramarg0: string): Transformations$InjectionPoint;
    static values(): (Object | null)[];
    private constructor()
    name(): "DEFINES" | "BEFORE_CODE" | "END";
}