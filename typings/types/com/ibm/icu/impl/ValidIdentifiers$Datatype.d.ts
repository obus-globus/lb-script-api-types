import type { Class } from '../../../../java/lang/Class.d.ts'
import type { Object } from '../../../../java/lang/Object.d.ts'
import type { Enum } from '../../../../java/lang/Enum.d.ts'
export class ValidIdentifiers$Datatype extends Enum<ValidIdentifiers$Datatype> {
    static currency: ValidIdentifiers$Datatype;
    static illegal: ValidIdentifiers$Datatype;
    static language: ValidIdentifiers$Datatype;
    static region: ValidIdentifiers$Datatype;
    static script: ValidIdentifiers$Datatype;
    static subdivision: ValidIdentifiers$Datatype;
    static t: ValidIdentifiers$Datatype;
    static u: ValidIdentifiers$Datatype;
    static unit: ValidIdentifiers$Datatype;
    static variant: ValidIdentifiers$Datatype;
    static x: ValidIdentifiers$Datatype;
    static valueOf(paramarg0: Class<Object>, paramarg1: string): Object | null;
    static valueOf(paramarg0: string): ValidIdentifiers$Datatype;
    static values(): (Object | null)[];
    private constructor()
    name(): "currency" | "language" | "region" | "script" | "subdivision" | "unit" | "variant" | "u" | "t" | "x" | "illegal";
}