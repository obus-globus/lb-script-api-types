import type { Class } from '../../../../../java/lang/Class.d.ts'
import type { Object } from '../../../../../java/lang/Object.d.ts'
import type { Enum } from '../../../../../java/lang/Enum.d.ts'
import type { EnvType } from '../../../../../net/fabricmc/api/EnvType.d.ts'
export class ModEnvironment extends Enum<ModEnvironment> {
    static CLIENT: ModEnvironment;
    static SERVER: ModEnvironment;
    static UNIVERSAL: ModEnvironment;
    static valueOf(paramarg0: Class<Object>, paramarg1: string): Object | null;
    static valueOf(paramarg0: string): ModEnvironment;
    static values(): ModEnvironment[];
    private constructor()
    matches(arg0: EnvType): boolean;
    name(): "CLIENT" | "SERVER" | "UNIVERSAL";
}