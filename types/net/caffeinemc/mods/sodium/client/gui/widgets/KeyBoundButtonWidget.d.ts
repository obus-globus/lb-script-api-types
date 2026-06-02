import type { Runnable } from '../../../../../../../java/lang/Runnable.d.ts'
import type { ButtonTheme } from '../../../../../../../net/caffeinemc/mods/sodium/client/gui/ButtonTheme.d.ts'
import type { FlatButtonWidget } from '../../../../../../../net/caffeinemc/mods/sodium/client/gui/widgets/FlatButtonWidget.d.ts'
import type { Dim2i } from '../../../../../../../net/caffeinemc/mods/sodium/client/util/Dim2i.d.ts'
import type { KeyEvent } from '../../../../../../../net/minecraft/client/input/KeyEvent.d.ts'
import type { Component } from '../../../../../../../net/minecraft/network/chat/Component.d.ts'
export class KeyBoundButtonWidget extends FlatButtonWidget {
    static DEFAULT_THEME: ButtonTheme;
    constructor(arg0: Dim2i, arg1: Component, arg2: () => void, arg3: boolean, arg4: boolean, arg5: number)
    // private shortcutKey: number;
    // private underlinedLabel: Component;
    getRenderedLabel(): Component;
    tryActivateShortcut(arg0: KeyEvent): boolean;
}