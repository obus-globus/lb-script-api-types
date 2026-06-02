import type { Class } from '../../../../../java/lang/Class.d.ts'
import type { Object } from '../../../../../java/lang/Object.d.ts'
import type { Enum } from '../../../../../java/lang/Enum.d.ts'
export class InjectionPoint$RestrictTargetLevel extends Enum<InjectionPoint$RestrictTargetLevel> {
    static ALLOW_ALL: InjectionPoint$RestrictTargetLevel;
    static CONSTRUCTORS_AFTER_DELEGATE: InjectionPoint$RestrictTargetLevel;
    static METHODS_ONLY: InjectionPoint$RestrictTargetLevel;
    static valueOf(paramarg0: Class<Object>, paramarg1: string): Object | null;
    static valueOf(paramarg0: string): InjectionPoint$RestrictTargetLevel;
    static values(): (Object | null)[];
    private constructor()
    name(): "METHODS_ONLY" | "CONSTRUCTORS_AFTER_DELEGATE" | "ALLOW_ALL";
}