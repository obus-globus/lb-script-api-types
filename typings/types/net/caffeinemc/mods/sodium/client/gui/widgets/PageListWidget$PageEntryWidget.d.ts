import type { Page } from '../../../../../../../net/caffeinemc/mods/sodium/client/config/structure/Page.d.ts'
import type { ColorTheme } from '../../../../../../../net/caffeinemc/mods/sodium/client/gui/ColorTheme.d.ts'
import type { PageListWidget } from '../../../../../../../net/caffeinemc/mods/sodium/client/gui/widgets/PageListWidget.d.ts'
import type { PageListWidget$ClickableEntryWidget } from '../../../../../../../net/caffeinemc/mods/sodium/client/gui/widgets/PageListWidget$ClickableEntryWidget.d.ts'
import type { Dim2i } from '../../../../../../../net/caffeinemc/mods/sodium/client/util/Dim2i.d.ts'
import type { Component } from '../../../../../../../net/minecraft/network/chat/Component.d.ts'
export abstract class PageListWidget$PageEntryWidget<P extends Page> extends PageListWidget$ClickableEntryWidget {
    constructor(null_: PageListWidget, arg1: Dim2i, arg2: P, arg3: Component, arg4: ColorTheme, arg5: number)
    // private page: P;
    readonly scrollTargetStart: number;
}