import type { Object } from '../../../../../../java/lang/Object.d.ts'
import type { ConfigBuilder } from '../../../../../../net/caffeinemc/mods/sodium/api/config/structure/ConfigBuilder.d.ts'
export interface ConfigEntryPoint extends Object{
    registerConfigEarly(arg0: ConfigBuilder): void;
    registerConfigLate(arg0: ConfigBuilder): void;
}