import type { NavigationController } from '../../../../../net/irisshaders/iris/gui/NavigationController.d.ts'
import type { IrisElementRow } from '../../../../../net/irisshaders/iris/gui/element/IrisElementRow.d.ts'
import type { IrisElementRow$IconButtonElement } from '../../../../../net/irisshaders/iris/gui/element/IrisElementRow$IconButtonElement.d.ts'
import type { IrisElementRow$TextButtonElement } from '../../../../../net/irisshaders/iris/gui/element/IrisElementRow$TextButtonElement.d.ts'
import type { ShaderPackOptionList$BaseEntry } from '../../../../../net/irisshaders/iris/gui/element/ShaderPackOptionList$BaseEntry.d.ts'
import type { ShaderPackScreen } from '../../../../../net/irisshaders/iris/gui/screen/ShaderPackScreen.d.ts'
import type { Font } from '../../../../../net/minecraft/client/gui/Font.d.ts'
import type { GuiGraphicsExtractor } from '../../../../../net/minecraft/client/gui/GuiGraphicsExtractor.d.ts'
import type { GuiEventListener } from '../../../../../net/minecraft/client/gui/components/events/GuiEventListener.d.ts'
import type { NarratableEntry } from '../../../../../net/minecraft/client/gui/narration/NarratableEntry.d.ts'
import type { KeyEvent } from '../../../../../net/minecraft/client/input/KeyEvent.d.ts'
import type { MouseButtonEvent } from '../../../../../net/minecraft/client/input/MouseButtonEvent.d.ts'
import type { Component } from '../../../../../net/minecraft/network/chat/Component.d.ts'
import type { MutableComponent } from '../../../../../net/minecraft/network/chat/MutableComponent.d.ts'
export class ShaderPackOptionList$HeaderEntry extends ShaderPackOptionList$BaseEntry {
    static BACK_BUTTON_TEXT: Component;
    static CONTENT_PADDING: number;
    static EXPORT_TOOLTIP: MutableComponent;
    static IMPORT_TOOLTIP: MutableComponent;
    static RESET_BUTTON_TEXT_ACTIVE: MutableComponent;
    static RESET_BUTTON_TEXT_INACTIVE: MutableComponent;
    static RESET_HOLD_SHIFT_TOOLTIP: MutableComponent;
    static RESET_TOOLTIP: MutableComponent;
    constructor(null_: ShaderPackOptionList$HeaderEntry, arg1: ShaderPackScreen, arg2: NavigationController, arg3: Component, arg4: boolean)
    // private backButton: IrisElementRow;
    // private exportButton: IrisElementRow$IconButtonElement;
    // private importButton: IrisElementRow$IconButtonElement;
    // private resetButton: IrisElementRow$TextButtonElement;
    // private screen: ShaderPackScreen;
    // private text: Component;
    // private utilityButtons: IrisElementRow;
    // private backButtonClicked(arg0: IrisElementRow$TextButtonElement): boolean;
    children(): GuiEventListener[];
    // private exportSettingsButtonClicked(arg0: IrisElementRow$IconButtonElement): boolean;
    extractContent(arg0: GuiGraphicsExtractor, arg1: number, arg2: number, arg3: boolean, arg4: number): void;
    // private importSettingsButtonClicked(arg0: IrisElementRow$IconButtonElement): boolean;
    keyPressed(arg0: KeyEvent): boolean;
    mouseClicked(arg0: MouseButtonEvent, arg1: boolean): boolean;
    narratables(): NarratableEntry[];
    // private queueBottomRightAnchoredTooltip(arg0: GuiGraphicsExtractor, arg1: number, arg2: number, arg3: Font, arg4: Component): void;
    // private resetButtonClicked(arg0: IrisElementRow$TextButtonElement): boolean;
}