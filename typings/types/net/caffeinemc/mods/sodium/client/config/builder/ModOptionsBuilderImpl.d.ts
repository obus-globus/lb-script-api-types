import type { BiConsumer } from '../../../../../../../java/util/function/BiConsumer.d.ts'
import type { Function } from '../../../../../../../java/util/function/Function.d.ts'
import type { Object } from '../../../../../../../java/lang/Object.d.ts'
import type { ConfigState } from '../../../../../../../net/caffeinemc/mods/sodium/api/config/ConfigState.d.ts'
import type { FlagHook } from '../../../../../../../net/caffeinemc/mods/sodium/api/config/option/FlagHook.d.ts'
import type { ColorThemeBuilder } from '../../../../../../../net/caffeinemc/mods/sodium/api/config/structure/ColorThemeBuilder.d.ts'
import type { ModOptionsBuilder } from '../../../../../../../net/caffeinemc/mods/sodium/api/config/structure/ModOptionsBuilder.d.ts'
import type { OptionBuilder } from '../../../../../../../net/caffeinemc/mods/sodium/api/config/structure/OptionBuilder.d.ts'
import type { PageBuilder } from '../../../../../../../net/caffeinemc/mods/sodium/api/config/structure/PageBuilder.d.ts'
import type { ModOptions } from '../../../../../../../net/caffeinemc/mods/sodium/client/config/structure/ModOptions.d.ts'
import type { OptionOverlay } from '../../../../../../../net/caffeinemc/mods/sodium/client/config/structure/OptionOverlay.d.ts'
import type { OptionOverride } from '../../../../../../../net/caffeinemc/mods/sodium/client/config/structure/OptionOverride.d.ts'
import type { Page } from '../../../../../../../net/caffeinemc/mods/sodium/client/config/structure/Page.d.ts'
import type { ColorTheme } from '../../../../../../../net/caffeinemc/mods/sodium/client/gui/ColorTheme.d.ts'
import type { Identifier } from '../../../../../../../net/minecraft/resources/Identifier.d.ts'
export class ModOptionsBuilderImpl extends Object implements ModOptionsBuilder {
    constructor(arg0: string, arg1: string, arg2: string)
    // private configId: string;
    // private flagHooks: FlagHook[];
    // private icon: Identifier;
    // private iconMonochrome: boolean;
    // private name: string;
    // private optionOverlays: OptionOverlay[];
    // private optionOverrides: OptionOverride[];
    // private pages: Page[];
    // private theme: ColorTheme;
    // private version: string;
    addPage(arg0: PageBuilder): ModOptionsBuilder;
    build(): ModOptions;
    formatVersion(arg0: (param0: string) => string): ModOptionsBuilder;
    registerFlagHook(arg0: (param0: Identifier[], param1: ConfigState) => void, arg1: Identifier[]): ModOptionsBuilder;
    registerFlagHook(arg0: FlagHook): ModOptionsBuilder;
    registerOptionOverlay(arg0: Identifier, arg1: OptionBuilder): ModOptionsBuilder;
    registerOptionReplacement(arg0: Identifier, arg1: OptionBuilder): ModOptionsBuilder;
    setColorTheme(arg0: ColorThemeBuilder): ModOptionsBuilder;
    setIcon(arg0: Identifier): ModOptionsBuilder;
    setName(arg0: string): ModOptionsBuilder;
    setNonTintedIcon(arg0: Identifier): ModOptionsBuilder;
    setVersion(arg0: string): ModOptionsBuilder;
}