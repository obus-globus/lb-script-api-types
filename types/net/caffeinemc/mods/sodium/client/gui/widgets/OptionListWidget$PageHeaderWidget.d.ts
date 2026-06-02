import type { Runnable } from '../../../../../../../java/lang/Runnable.d.ts'
import type { Page } from '../../../../../../../net/caffeinemc/mods/sodium/client/config/structure/Page.d.ts'
import type { ColorTheme } from '../../../../../../../net/caffeinemc/mods/sodium/client/gui/ColorTheme.d.ts'
import type { AbstractOptionList } from '../../../../../../../net/caffeinemc/mods/sodium/client/gui/options/control/AbstractOptionList.d.ts'
import type { OptionListWidget$HeaderWidget } from '../../../../../../../net/caffeinemc/mods/sodium/client/gui/widgets/OptionListWidget$HeaderWidget.d.ts'
import type { Dim2i } from '../../../../../../../net/caffeinemc/mods/sodium/client/util/Dim2i.d.ts'
export class OptionListWidget$PageHeaderWidget extends OptionListWidget$HeaderWidget {
    constructor(arg0: AbstractOptionList, arg1: Dim2i, arg2: string, arg3: string, arg4: ColorTheme, arg5: () => void)
    constructor(arg0: AbstractOptionList, arg1: Dim2i, arg2: Page, arg3: ColorTheme)
}