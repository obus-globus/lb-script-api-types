import type { Function } from '../../../../../../java/util/function/Function.d.ts'
import type { Supplier } from '../../../../../../java/util/function/Supplier.d.ts'
import type { Object } from '../../../../../../java/lang/Object.d.ts'
import type { ConfigEntryPoint } from '../../../../../../net/caffeinemc/mods/sodium/api/config/ConfigEntryPoint.d.ts'
import type { ConfigManager$ModMetadata } from '../../../../../../net/caffeinemc/mods/sodium/client/config/ConfigManager$ModMetadata.d.ts'
import type { Config } from '../../../../../../net/caffeinemc/mods/sodium/client/config/structure/Config.d.ts'
export class ConfigManager extends Object {
    static CONFIG: Config;
    static CONFIG_ENTRY_POINT_KEY: string;
    static registerConfigEntryPoint(paramarg0: string, paramarg1: string): void;
    static registerConfigEntryPoint(paramarg0: () => ConfigEntryPoint, paramarg1: string): void;
    static registerConfigsEarly(): void;
    static registerConfigsLate(): void;
    static setModInfoFunction(paramarg0: (param0: string) => ConfigManager$ModMetadata): void;
    constructor()
}