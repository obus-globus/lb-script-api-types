import type { Class } from '../../../../java/lang/Class.d.ts'
import type { Enum } from '../../../../java/lang/Enum.d.ts'
export class OriginType extends Enum<OriginType> {
    static ENV_VARIABLE: OriginType;
    static FILE: OriginType;
    static GENERIC: OriginType;
    static RESOURCE: OriginType;
    static URL: OriginType;
    static valueOf<T extends Enum<T>>(paramarg0: Class<T>, paramarg1: string): T;
    static valueOf(paramarg0: string): OriginType;
    static values(): OriginType[];
    private constructor()
    name(): "GENERIC" | "FILE" | "URL" | "RESOURCE" | "ENV_VARIABLE";
}