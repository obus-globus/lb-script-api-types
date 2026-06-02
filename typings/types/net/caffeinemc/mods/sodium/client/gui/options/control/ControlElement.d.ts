import type { Option } from '../../../../../../../../net/caffeinemc/mods/sodium/client/config/structure/Option.d.ts'
import type { ColorTheme } from '../../../../../../../../net/caffeinemc/mods/sodium/client/gui/ColorTheme.d.ts'
import type { AbstractOptionList } from '../../../../../../../../net/caffeinemc/mods/sodium/client/gui/options/control/AbstractOptionList.d.ts'
import type { AbstractWidget } from '../../../../../../../../net/caffeinemc/mods/sodium/client/gui/widgets/AbstractWidget.d.ts'
import type { Dim2i } from '../../../../../../../../net/caffeinemc/mods/sodium/client/util/Dim2i.d.ts'
import type { ComponentPath } from '../../../../../../../../net/minecraft/client/gui/ComponentPath.d.ts'
import type { GuiGraphicsExtractor } from '../../../../../../../../net/minecraft/client/gui/GuiGraphicsExtractor.d.ts'
import type { FocusNavigationEvent } from '../../../../../../../../net/minecraft/client/gui/navigation/FocusNavigationEvent.d.ts'
import type { Component } from '../../../../../../../../net/minecraft/network/chat/Component.d.ts'
import type { MutableComponent } from '../../../../../../../../net/minecraft/network/chat/MutableComponent.d.ts'
export abstract class ControlElement extends AbstractWidget {
    constructor(arg0: AbstractOptionList, arg1: Dim2i, arg2: ColorTheme)
    // private list: AbstractOptionList;
    // private theme: ColorTheme;
    extractRenderState(arg0: GuiGraphicsExtractor, arg1: number, arg2: number, arg3: number): void;
    formatDisabledControlValue(arg0: Component): MutableComponent;
    getContentWidth(): number;
    getOption(): Option;
    getY(): number;
    nextFocusPath(arg0: FocusNavigationEvent): ComponentPath;
    truncateLabelToFit(arg0: string): string;
}