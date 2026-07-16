import type { Class } from '../../../../../java/lang/Class.d.ts'
import type { Enum } from '../../../../../java/lang/Enum.d.ts'
export class InjectionPoint$Specifier extends Enum<InjectionPoint$Specifier> {
    static ALL: InjectionPoint$Specifier;
    static DEFAULT: InjectionPoint$Specifier;
    static FIRST: InjectionPoint$Specifier;
    static LAST: InjectionPoint$Specifier;
    static ONE: InjectionPoint$Specifier;
    static valueOf<T extends Enum<T>>(paramarg0: Class<T>, paramarg1: string): T;
    static valueOf(paramarg0: string): InjectionPoint$Specifier;
    static values(): InjectionPoint$Specifier[];
    private constructor()
    name(): "ALL" | "FIRST" | "LAST" | "ONE" | "DEFAULT";
}