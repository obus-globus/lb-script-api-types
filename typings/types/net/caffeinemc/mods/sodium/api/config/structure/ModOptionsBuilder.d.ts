import type { BiConsumer } from '../../../../../../../java/util/function/BiConsumer.d.ts'
import type { Function } from '../../../../../../../java/util/function/Function.d.ts'
import type { Object } from '../../../../../../../java/lang/Object.d.ts'
import type { ConfigState } from '../../../../../../../net/caffeinemc/mods/sodium/api/config/ConfigState.d.ts'
import type { FlagHook } from '../../../../../../../net/caffeinemc/mods/sodium/api/config/option/FlagHook.d.ts'
import type { ColorThemeBuilder } from '../../../../../../../net/caffeinemc/mods/sodium/api/config/structure/ColorThemeBuilder.d.ts'
import type { OptionBuilder } from '../../../../../../../net/caffeinemc/mods/sodium/api/config/structure/OptionBuilder.d.ts'
import type { PageBuilder } from '../../../../../../../net/caffeinemc/mods/sodium/api/config/structure/PageBuilder.d.ts'
import type { Identifier } from '../../../../../../../net/minecraft/resources/Identifier.d.ts'
export interface ModOptionsBuilder extends Object {
    addPage(arg0: PageBuilder): ModOptionsBuilder;
    formatVersion(arg0: (param0: string) => string): ModOptionsBuilder;
    registerFlagHook(arg0: (param0: Identifier[], param1: ConfigState) => void, ...arg1: Identifier[]): ModOptionsBuilder;
    registerFlagHook(arg0: FlagHook): ModOptionsBuilder;
    registerOptionOverlay(arg0: Identifier, arg1: OptionBuilder): ModOptionsBuilder;
    registerOptionReplacement(arg0: Identifier, arg1: OptionBuilder): ModOptionsBuilder;
    setColorTheme(arg0: ColorThemeBuilder): ModOptionsBuilder;
    setIcon(arg0: Identifier): ModOptionsBuilder;
    setName(arg0: string): ModOptionsBuilder;
    setNonTintedIcon(arg0: Identifier): ModOptionsBuilder;
    setVersion(arg0: string): ModOptionsBuilder;
}