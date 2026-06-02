import type { Optional } from '../../../../../../java/util/Optional.d.ts'
import type { NavigationController } from '../../../../../../net/irisshaders/iris/gui/NavigationController.d.ts'
import type { AbstractElementWidget } from '../../../../../../net/irisshaders/iris/gui/element/widget/AbstractElementWidget.d.ts'
import type { CommentedElementWidget } from '../../../../../../net/irisshaders/iris/gui/element/widget/CommentedElementWidget.d.ts'
import type { ShaderPackScreen } from '../../../../../../net/irisshaders/iris/gui/screen/ShaderPackScreen.d.ts'
import type { OptionMenuElement } from '../../../../../../net/irisshaders/iris/shaderpack/option/menu/OptionMenuElement.d.ts'
import type { OptionMenuLinkElement } from '../../../../../../net/irisshaders/iris/shaderpack/option/menu/OptionMenuLinkElement.d.ts'
import type { GuiGraphicsExtractor } from '../../../../../../net/minecraft/client/gui/GuiGraphicsExtractor.d.ts'
import type { KeyEvent } from '../../../../../../net/minecraft/client/input/KeyEvent.d.ts'
import type { MouseButtonEvent } from '../../../../../../net/minecraft/client/input/MouseButtonEvent.d.ts'
import type { Component } from '../../../../../../net/minecraft/network/chat/Component.d.ts'
import type { MutableComponent } from '../../../../../../net/minecraft/network/chat/MutableComponent.d.ts'
export class LinkElementWidget extends CommentedElementWidget<OptionMenuLinkElement> {
    static EMPTY: AbstractElementWidget<OptionMenuElement>;
    constructor(arg0: OptionMenuLinkElement)
    // private isLabelTrimmed: boolean;
    // private label: MutableComponent;
    // private navigation: NavigationController;
    // private targetScreenId: string;
    // private trimmedLabel: MutableComponent;
    getCommentBody(): Optional<Component>;
    getCommentTitle(): Optional<Component>;
    init(arg0: ShaderPackScreen, arg1: NavigationController): void;
    keyPressed(arg0: KeyEvent): boolean;
    mouseClicked(arg0: MouseButtonEvent, arg1: boolean): boolean;
    render(arg0: GuiGraphicsExtractor, arg1: number, arg2: number, arg3: number, arg4: boolean): void;
}