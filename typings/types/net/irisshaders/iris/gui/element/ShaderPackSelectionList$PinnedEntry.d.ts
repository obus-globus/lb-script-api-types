import type { Runnable } from '../../../../../java/lang/Runnable.d.ts'
import type { ShaderPackSelectionList } from '../../../../../net/irisshaders/iris/gui/element/ShaderPackSelectionList.d.ts'
import type { ShaderPackSelectionList$BaseEntry } from '../../../../../net/irisshaders/iris/gui/element/ShaderPackSelectionList$BaseEntry.d.ts'
import type { GuiGraphicsExtractor } from '../../../../../net/minecraft/client/gui/GuiGraphicsExtractor.d.ts'
import type { KeyEvent } from '../../../../../net/minecraft/client/input/KeyEvent.d.ts'
import type { MouseButtonEvent } from '../../../../../net/minecraft/client/input/MouseButtonEvent.d.ts'
import type { Component } from '../../../../../net/minecraft/network/chat/Component.d.ts'
export class ShaderPackSelectionList$PinnedEntry extends ShaderPackSelectionList$BaseEntry {
    static CONTENT_PADDING: number;
    constructor(arg0: Component, arg1: () => void, arg2: ShaderPackSelectionList)
    allowPressButton: boolean;
    // private label: Component;
    // private onClick: () => void;
    extractContent(arg0: GuiGraphicsExtractor, arg1: number, arg2: number, arg3: boolean, arg4: number): void;
    keyPressed(arg0: KeyEvent): boolean;
    mouseClicked(arg0: MouseButtonEvent, arg1: boolean): boolean;
}