import type { Runnable } from '../../../../../../../java/lang/Runnable.d.ts'
import type { ButtonTheme } from '../../../../../../../net/caffeinemc/mods/sodium/client/gui/ButtonTheme.d.ts'
import type { AbstractWidget } from '../../../../../../../net/caffeinemc/mods/sodium/client/gui/widgets/AbstractWidget.d.ts'
import type { Dim2i } from '../../../../../../../net/caffeinemc/mods/sodium/client/util/Dim2i.d.ts'
import type { ComponentPath } from '../../../../../../../net/minecraft/client/gui/ComponentPath.d.ts'
import type { GuiGraphicsExtractor } from '../../../../../../../net/minecraft/client/gui/GuiGraphicsExtractor.d.ts'
import type { Renderable } from '../../../../../../../net/minecraft/client/gui/components/Renderable.d.ts'
import type { FocusNavigationEvent } from '../../../../../../../net/minecraft/client/gui/navigation/FocusNavigationEvent.d.ts'
import type { KeyEvent } from '../../../../../../../net/minecraft/client/input/KeyEvent.d.ts'
import type { MouseButtonEvent } from '../../../../../../../net/minecraft/client/input/MouseButtonEvent.d.ts'
import type { Component } from '../../../../../../../net/minecraft/network/chat/Component.d.ts'
export class FlatButtonWidget extends AbstractWidget implements Renderable {
    static DEFAULT_THEME: ButtonTheme;
    constructor(arg0: Dim2i, arg1: Component, arg2: () => void, arg3: boolean, arg4: boolean)
    constructor(arg0: Dim2i, arg1: Component, arg2: () => void, arg3: boolean, arg4: boolean, arg5: boolean)
    constructor(arg0: Dim2i, arg1: Component, arg2: () => void, arg3: boolean, arg4: boolean, arg5: boolean, arg6: ButtonTheme)
    constructor(arg0: Dim2i, arg1: Component, arg2: () => void, arg3: boolean, arg4: boolean, arg5: ButtonTheme)
    // private action: () => void;
    // private drawBackground: boolean;
    // private drawFrame: boolean;
    readonly enabled: boolean;
    // private label: Component;
    // private leftAlign: boolean;
    readonly selected: boolean;
    // private theme: ButtonTheme;
    readonly visible: boolean;
    doAction(): void;
    extractRenderState(arg0: GuiGraphicsExtractor, arg1: number, arg2: number, arg3: number): void;
    getRenderedLabel(): Component;
    getTextColor(): number;
    isEnabled(): boolean;
    isVisible(): boolean;
    keyPressed(arg0: KeyEvent): boolean;
    mouseClicked(arg0: MouseButtonEvent, arg1: boolean): boolean;
    nextFocusPath(arg0: FocusNavigationEvent): ComponentPath;
    setEnabled(arg0: boolean): void;
    setSelected(arg0: boolean): void;
    setVisible(arg0: boolean): void;
}