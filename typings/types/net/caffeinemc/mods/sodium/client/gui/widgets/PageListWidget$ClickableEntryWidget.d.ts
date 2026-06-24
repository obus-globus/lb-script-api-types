import type { ColorTheme } from '../../../../../../../net/caffeinemc/mods/sodium/client/gui/ColorTheme.d.ts'
import type { PageListWidget } from '../../../../../../../net/caffeinemc/mods/sodium/client/gui/widgets/PageListWidget.d.ts'
import type { PageListWidget$EntryWidget } from '../../../../../../../net/caffeinemc/mods/sodium/client/gui/widgets/PageListWidget$EntryWidget.d.ts'
import type { Dim2i } from '../../../../../../../net/caffeinemc/mods/sodium/client/util/Dim2i.d.ts'
import type { GuiGraphicsExtractor } from '../../../../../../../net/minecraft/client/gui/GuiGraphicsExtractor.d.ts'
import type { Component } from '../../../../../../../net/minecraft/network/chat/Component.d.ts'
export abstract class PageListWidget$ClickableEntryWidget extends PageListWidget$EntryWidget {
    constructor(null_: PageListWidget, arg1: Dim2i, arg2: Component, arg3: boolean, arg4: ColorTheme)
    constructor(null_: PageListWidget, arg1: Dim2i, arg2: Component, arg3: Component, arg4: boolean, arg5: ColorTheme)
    extractRenderState(arg0: GuiGraphicsExtractor, arg1: number, arg2: number, arg3: number): void;
}