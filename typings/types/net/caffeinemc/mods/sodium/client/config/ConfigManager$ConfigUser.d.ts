import type { Record } from '../../../../../../java/lang/Record.d.ts'
import type { Supplier } from '../../../../../../java/util/function/Supplier.d.ts'
import type { Object } from '../../../../../../java/lang/Object.d.ts'
import type { ConfigEntryPoint } from '../../../../../../net/caffeinemc/mods/sodium/api/config/ConfigEntryPoint.d.ts'
export class ConfigManager$ConfigUser extends Record {
    private constructor(configEntrypoint: () => ConfigEntryPoint, modId: string)
    // private configEntrypoint: () => ConfigEntryPoint;
    // private modId: string;
    configEntrypoint(): () => ConfigEntryPoint;
    equals(arg0: Object | null): boolean;
    hashCode(): number;
    modId(): string;
    toString(): string;
}