import type { Class } from '../../../../../java/lang/Class.d.ts'
import type { Enum } from '../../../../../java/lang/Enum.d.ts'
export class GameProvider$BuiltinTransform extends Enum<GameProvider$BuiltinTransform> {
    static CLASS_TWEAKS: GameProvider$BuiltinTransform;
    static STRIP_ENVIRONMENT: GameProvider$BuiltinTransform;
    static WIDEN_ALL_PACKAGE_ACCESS: GameProvider$BuiltinTransform;
    static valueOf<T extends Enum<T>>(paramarg0: Class<T>, paramarg1: string): T;
    static valueOf(paramarg0: string): GameProvider$BuiltinTransform;
    static values(): GameProvider$BuiltinTransform[];
    private constructor()
    name(): "STRIP_ENVIRONMENT" | "WIDEN_ALL_PACKAGE_ACCESS" | "CLASS_TWEAKS";
}