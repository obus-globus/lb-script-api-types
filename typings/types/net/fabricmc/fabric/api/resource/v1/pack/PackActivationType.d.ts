import type { Class } from '../../../../../../../java/lang/Class.d.ts'
import type { Object } from '../../../../../../../java/lang/Object.d.ts'
import type { Enum } from '../../../../../../../java/lang/Enum.d.ts'
export class PackActivationType extends Enum<PackActivationType> {
    static ALWAYS_ENABLED: PackActivationType;
    static DEFAULT_ENABLED: PackActivationType;
    static NORMAL: PackActivationType;
    static valueOf(paramarg0: Class<Object>, paramarg1: string): Object | null;
    static valueOf(paramarg0: string): PackActivationType;
    static values(): PackActivationType[];
    private constructor()
    isEnabledByDefault(): boolean;
    name(): "NORMAL" | "DEFAULT_ENABLED" | "ALWAYS_ENABLED";
}