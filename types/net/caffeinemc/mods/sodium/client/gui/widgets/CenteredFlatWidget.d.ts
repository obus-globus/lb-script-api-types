import type { ButtonTheme } from '../../../../../../../net/caffeinemc/mods/sodium/client/gui/ButtonTheme.d.ts'
import type { ColorTheme } from '../../../../../../../net/caffeinemc/mods/sodium/client/gui/ColorTheme.d.ts'
import type { AbstractWidget } from '../../../../../../../net/caffeinemc/mods/sodium/client/gui/widgets/AbstractWidget.d.ts'
import type { Dim2i } from '../../../../../../../net/caffeinemc/mods/sodium/client/util/Dim2i.d.ts'
import type { ComponentPath } from '../../../../../../../net/minecraft/client/gui/ComponentPath.d.ts'
import type { GuiGraphicsExtractor } from '../../../../../../../net/minecraft/client/gui/GuiGraphicsExtractor.d.ts'
import type { FocusNavigationEvent } from '../../../../../../../net/minecraft/client/gui/navigation/FocusNavigationEvent.d.ts'
import type { KeyEvent } from '../../../../../../../net/minecraft/client/input/KeyEvent.d.ts'
import type { MouseButtonEvent } from '../../../../../../../net/minecraft/client/input/MouseButtonEvent.d.ts'
import type { Component } from '../../../../../../../net/minecraft/network/chat/Component.d.ts'
export abstract class CenteredFlatWidget extends AbstractWidget {
    constructor(arg0: Dim2i, arg1: Component, arg2: boolean, arg3: ColorTheme)
    constructor(arg0: Dim2i, arg1: Component, arg2: Component, arg3: boolean, arg4: ColorTheme)
    readonly enabled: boolean;
    // private isSelectable: boolean;
    // private label: Component;
    readonly selected: boolean;
    // private subtitle: Component;
    // private theme: ButtonTheme;
    readonly visible: boolean;
    // private doAction(): void;
    extractRenderState(arg0: GuiGraphicsExtractor, arg1: number, arg2: number, arg3: number): void;
    getTextBoxHeight(): number;
    keyPressed(arg0: KeyEvent): boolean;
    mouseClicked(arg0: MouseButtonEvent, arg1: boolean): boolean;
    nextFocusPath(arg0: FocusNavigationEvent): ComponentPath;
    onAction(): void;
    renderIcon(arg0: GuiGraphicsExtractor, arg1: number): number;
    setEnabled(arg0: boolean): void;
    setSelected(arg0: boolean): void;
    setVisible(arg0: boolean): void;
    // private truncateToFitWidth(arg0: Component, arg1: number): string;
}