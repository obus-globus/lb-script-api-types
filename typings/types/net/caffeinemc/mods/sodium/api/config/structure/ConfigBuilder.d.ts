import type { Class } from '../../../../../../../java/lang/Class.d.ts'
import type { Object } from '../../../../../../../java/lang/Object.d.ts'
import type { Enum } from '../../../../../../../java/lang/Enum.d.ts'
import type { BooleanOptionBuilder } from '../../../../../../../net/caffeinemc/mods/sodium/api/config/structure/BooleanOptionBuilder.d.ts'
import type { ColorThemeBuilder } from '../../../../../../../net/caffeinemc/mods/sodium/api/config/structure/ColorThemeBuilder.d.ts'
import type { EnumOptionBuilder } from '../../../../../../../net/caffeinemc/mods/sodium/api/config/structure/EnumOptionBuilder.d.ts'
import type { ExternalButtonOptionBuilder } from '../../../../../../../net/caffeinemc/mods/sodium/api/config/structure/ExternalButtonOptionBuilder.d.ts'
import type { ExternalPageBuilder } from '../../../../../../../net/caffeinemc/mods/sodium/api/config/structure/ExternalPageBuilder.d.ts'
import type { IntegerOptionBuilder } from '../../../../../../../net/caffeinemc/mods/sodium/api/config/structure/IntegerOptionBuilder.d.ts'
import type { ModOptionsBuilder } from '../../../../../../../net/caffeinemc/mods/sodium/api/config/structure/ModOptionsBuilder.d.ts'
import type { OptionGroupBuilder } from '../../../../../../../net/caffeinemc/mods/sodium/api/config/structure/OptionGroupBuilder.d.ts'
import type { OptionPageBuilder } from '../../../../../../../net/caffeinemc/mods/sodium/api/config/structure/OptionPageBuilder.d.ts'
import type { Identifier } from '../../../../../../../net/minecraft/resources/Identifier.d.ts'
export interface ConfigBuilder extends Object{
    createBooleanOption(arg0: Identifier): BooleanOptionBuilder;
    createColorTheme(): ColorThemeBuilder;
    createEnumOption<E extends Enum<E>>(arg0: Identifier, arg1: Class<E>): EnumOptionBuilder<E>;
    createExternalButtonOption(arg0: Identifier): ExternalButtonOptionBuilder;
    createExternalPage(): ExternalPageBuilder;
    createIntegerOption(arg0: Identifier): IntegerOptionBuilder;
    createOptionGroup(): OptionGroupBuilder;
    createOptionPage(): OptionPageBuilder;
    registerModOptions(arg0: string): ModOptionsBuilder;
    registerModOptions(arg0: string, arg1: string, arg2: string): ModOptionsBuilder;
    registerOwnModOptions(): ModOptionsBuilder;
}