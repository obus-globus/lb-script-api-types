import type { TextSource } from '../../../../../../../net/caffeinemc/mods/sodium/client/config/search/TextSource.d.ts'
import type { ModOptions } from '../../../../../../../net/caffeinemc/mods/sodium/client/config/structure/ModOptions.d.ts'
import type { Option } from '../../../../../../../net/caffeinemc/mods/sodium/client/config/structure/Option.d.ts'
import type { OptionGroup } from '../../../../../../../net/caffeinemc/mods/sodium/client/config/structure/OptionGroup.d.ts'
import type { OptionPage } from '../../../../../../../net/caffeinemc/mods/sodium/client/config/structure/OptionPage.d.ts'
export class Option$OptionNameSource extends TextSource {
    constructor(null_: Option$OptionNameSource, arg1: ModOptions, arg2: OptionPage, arg3: OptionGroup)
    readonly modOptions: ModOptions;
    readonly optionGroup: OptionGroup;
    readonly page: OptionPage;
    getModOptions(): ModOptions;
    getOption(): Option;
    getOptionGroup(): OptionGroup;
    getPage(): OptionPage;
    getTextFromSource(): string;
    toString(): string;
}