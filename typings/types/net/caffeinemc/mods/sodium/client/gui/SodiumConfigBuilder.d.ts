import type { Monitor } from '../../../../../../com/mojang/blaze3d/platform/Monitor.d.ts'
import type { Window } from '../../../../../../com/mojang/blaze3d/platform/Window.d.ts'
import type { Object } from '../../../../../../java/lang/Object.d.ts'
import type { ConfigEntryPoint } from '../../../../../../net/caffeinemc/mods/sodium/api/config/ConfigEntryPoint.d.ts'
import type { StorageEventHandler } from '../../../../../../net/caffeinemc/mods/sodium/api/config/StorageEventHandler.d.ts'
import type { ConfigBuilder } from '../../../../../../net/caffeinemc/mods/sodium/api/config/structure/ConfigBuilder.d.ts'
import type { OptionBuilder } from '../../../../../../net/caffeinemc/mods/sodium/api/config/structure/OptionBuilder.d.ts'
import type { OptionPageBuilder } from '../../../../../../net/caffeinemc/mods/sodium/api/config/structure/OptionPageBuilder.d.ts'
import type { SodiumOptions } from '../../../../../../net/caffeinemc/mods/sodium/client/gui/SodiumOptions.d.ts'
import type { Options } from '../../../../../../net/minecraft/client/Options.d.ts'
import type { TextureManager } from '../../../../../../net/minecraft/client/renderer/texture/TextureManager.d.ts'
export class SodiumConfigBuilder extends Object implements ConfigEntryPoint {
    static registerIcon(paramarg0: TextureManager): void;
    constructor()
    // private sodiumOpts: SodiumOptions;
    // private sodiumStorage: () => void;
    // private vanillaOpts: Options;
    // private vanillaStorage: () => void;
    // private window: Window;
    // private buildAdvancedPage(arg0: ConfigBuilder): OptionPageBuilder;
    // private buildEarlyConfig(arg0: ConfigBuilder): void;
    // private buildFullConfig(arg0: ConfigBuilder): void;
    // private buildGeneralPage(arg0: ConfigBuilder): OptionPageBuilder;
    // private buildNoErrorContextOption(arg0: ConfigBuilder): OptionBuilder;
    // private buildPerformancePage(arg0: ConfigBuilder): OptionPageBuilder;
    // private buildQualityPage(arg0: ConfigBuilder): OptionPageBuilder;
    // private getMonitor(): Monitor;
    registerConfigEarly(arg0: ConfigBuilder): void;
    registerConfigLate(arg0: ConfigBuilder): void;
}