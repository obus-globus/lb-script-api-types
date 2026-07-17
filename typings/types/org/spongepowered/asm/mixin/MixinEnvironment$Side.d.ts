import type { Class } from '../../../../java/lang/Class.d.ts'
import type { Enum } from '../../../../java/lang/Enum.d.ts'
export class MixinEnvironment$Side extends Enum<MixinEnvironment$Side> {
    static CLIENT: MixinEnvironment$Side;
    static SERVER: MixinEnvironment$Side;
    static UNKNOWN: MixinEnvironment$Side;
    static valueOf<T extends Enum<T>>(paramarg0: Class<T>, paramarg1: string): T;
    static valueOf(paramarg0: string): MixinEnvironment$Side;
    static values(): MixinEnvironment$Side[];
    private constructor()
    detect(): boolean;
    name(): "UNKNOWN" | "CLIENT" | "SERVER";
}