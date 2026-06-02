import type { ShaderPackSelectionList } from '../../../../../net/irisshaders/iris/gui/element/ShaderPackSelectionList.d.ts'
import type { ShaderPackSelectionList$BaseEntry } from '../../../../../net/irisshaders/iris/gui/element/ShaderPackSelectionList$BaseEntry.d.ts'
import type { ComponentPath } from '../../../../../net/minecraft/client/gui/ComponentPath.d.ts'
import type { GuiGraphicsExtractor } from '../../../../../net/minecraft/client/gui/GuiGraphicsExtractor.d.ts'
import type { FocusNavigationEvent } from '../../../../../net/minecraft/client/gui/navigation/FocusNavigationEvent.d.ts'
import type { KeyEvent } from '../../../../../net/minecraft/client/input/KeyEvent.d.ts'
import type { MouseButtonEvent } from '../../../../../net/minecraft/client/input/MouseButtonEvent.d.ts'
import type { Component } from '../../../../../net/minecraft/network/chat/Component.d.ts'
export class ShaderPackSelectionList$TopButtonRowEntry extends ShaderPackSelectionList$BaseEntry {
    static CONTENT_PADDING: number;
    constructor(arg0: ShaderPackSelectionList, arg1: boolean)
    allowEnableShadersButton: boolean;
    // private list: ShaderPackSelectionList;
    shadersEnabled: boolean;
    extractContent(arg0: GuiGraphicsExtractor, arg1: number, arg2: number, arg3: boolean, arg4: number): void;
    // private getEnableDisableLabel(): Component;
    isFocused(): boolean;
    keyPressed(arg0: KeyEvent): boolean;
    mouseClicked(arg0: MouseButtonEvent, arg1: boolean): boolean;
    nextFocusPath(arg0: FocusNavigationEvent): ComponentPath;
    setShadersEnabled(arg0: boolean): void;
}