import type { Object } from '../../../../../../java/lang/Object.d.ts'
import type { ConfigEntryPoint } from '../../../../../../net/caffeinemc/mods/sodium/api/config/ConfigEntryPoint.d.ts'
import type { ConfigBuilder } from '../../../../../../net/caffeinemc/mods/sodium/api/config/structure/ConfigBuilder.d.ts'
import type { OptionBuilder } from '../../../../../../net/caffeinemc/mods/sodium/api/config/structure/OptionBuilder.d.ts'
import type { PageBuilder } from '../../../../../../net/caffeinemc/mods/sodium/api/config/structure/PageBuilder.d.ts'
import type { Identifier } from '../../../../../../net/minecraft/resources/Identifier.d.ts'
export class IrisConfig extends Object implements ConfigEntryPoint {
    static COLOR: Identifier;
    static MONO: Identifier;
    constructor()
    // private createColorSpaceOption(arg0: ConfigBuilder): OptionBuilder;
    // private createSettingsPage(arg0: ConfigBuilder): PageBuilder;
    // private createShadowDistanceOption(arg0: ConfigBuilder): OptionBuilder;
    registerConfigEarly(arg0: ConfigBuilder): void;
    registerConfigLate(arg0: ConfigBuilder): void;
}