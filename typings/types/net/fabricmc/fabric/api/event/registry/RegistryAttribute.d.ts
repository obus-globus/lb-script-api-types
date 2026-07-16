import type { Class } from '../../../../../../java/lang/Class.d.ts'
import type { Object } from '../../../../../../java/lang/Object.d.ts'
import type { Enum } from '../../../../../../java/lang/Enum.d.ts'
export class RegistryAttribute extends Enum<RegistryAttribute> {
    static MODDED: RegistryAttribute;
    static OPTIONAL: RegistryAttribute;
    static SYNCED: RegistryAttribute;
    static valueOf(paramarg0: Class<Object>, paramarg1: string): Object | null;
    static valueOf(paramarg0: string): RegistryAttribute;
    static values(): RegistryAttribute[];
    private constructor()
    name(): "SYNCED" | "MODDED" | "OPTIONAL";
}