import type { Optional } from '../../../../../../java/util/Optional.d.ts'
import type { NavigationController } from '../../../../../../net/irisshaders/iris/gui/NavigationController.d.ts'
import type { AbstractElementWidget } from '../../../../../../net/irisshaders/iris/gui/element/widget/AbstractElementWidget.d.ts'
import type { CommentedElementWidget } from '../../../../../../net/irisshaders/iris/gui/element/widget/CommentedElementWidget.d.ts'
import type { ShaderPackScreen } from '../../../../../../net/irisshaders/iris/gui/screen/ShaderPackScreen.d.ts'
import type { OptionMenuElement } from '../../../../../../net/irisshaders/iris/shaderpack/option/menu/OptionMenuElement.d.ts'
import type { GuiGraphicsExtractor } from '../../../../../../net/minecraft/client/gui/GuiGraphicsExtractor.d.ts'
import type { KeyEvent } from '../../../../../../net/minecraft/client/input/KeyEvent.d.ts'
import type { MouseButtonEvent } from '../../../../../../net/minecraft/client/input/MouseButtonEvent.d.ts'
import type { Component } from '../../../../../../net/minecraft/network/chat/Component.d.ts'
import type { MutableComponent } from '../../../../../../net/minecraft/network/chat/MutableComponent.d.ts'
export abstract class BaseOptionElementWidget<T extends OptionMenuElement> extends CommentedElementWidget<T> {
    static EMPTY: AbstractElementWidget<OptionMenuElement>;
    constructor(arg0: T)
    // private isLabelTrimmed: boolean;
    // private label: MutableComponent;
    // private maxLabelWidth: number;
    // private navigation: NavigationController;
    // private screen: ShaderPackScreen;
    // private trimmedLabel: Component;
    // private unmodifiedLabel: MutableComponent;
    // private usedKeyboard: boolean;
    // private valueLabel: Component;
    // private valueSectionWidth: number;
    applyNextValue(): boolean;
    applyOriginalValue(): boolean;
    applyPreviousValue(): boolean;
    createTrimmedLabel(): Component;
    createValueLabel(): Component;
    getCommentBody(): Optional<Component>;
    getCommentKey(): string;
    getCommentTitle(): Optional<Component>;
    init(arg0: ShaderPackScreen, arg1: NavigationController): void;
    isValueModified(): boolean;
    keyPressed(arg0: KeyEvent): boolean;
    mouseClicked(arg0: MouseButtonEvent, arg1: boolean): boolean;
    renderOptionWithValue(arg0: GuiGraphicsExtractor, arg1: boolean): void;
    renderOptionWithValue(arg0: GuiGraphicsExtractor, arg1: boolean, arg2: number, arg3: number): void;
    renderTooltip(arg0: GuiGraphicsExtractor, arg1: Component, arg2: number, arg3: number, arg4: boolean): void;
    setLabel(arg0: MutableComponent): void;
    tryRenderTooltip(arg0: GuiGraphicsExtractor, arg1: number, arg2: number, arg3: boolean): void;
    updateLabels(): void;
    updateRenderParams(arg0: number): void;
}