import type { Class } from '../../../../../../java/lang/Class.d.ts'
import type { Enum } from '../../../../../../java/lang/Enum.d.ts'
import type { MixinEnvironment } from '../../../../../../org/spongepowered/asm/mixin/MixinEnvironment.d.ts'
export class Initialiser$InjectionMode extends Enum<Initialiser$InjectionMode> {
    static DEFAULT: Initialiser$InjectionMode;
    static SAFE: Initialiser$InjectionMode;
    static ofEnvironment(paramarg0: MixinEnvironment): Initialiser$InjectionMode;
    static valueOf<T extends Enum<T>>(paramarg0: Class<T>, paramarg1: string): T;
    static valueOf(paramarg0: string): Initialiser$InjectionMode;
    static values(): Initialiser$InjectionMode[];
    private constructor()
    name(): "DEFAULT" | "SAFE";
}