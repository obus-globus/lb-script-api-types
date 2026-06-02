import type { NavigationController } from '../../../../../../net/irisshaders/iris/gui/NavigationController.d.ts'
import type { AbstractElementWidget } from '../../../../../../net/irisshaders/iris/gui/element/widget/AbstractElementWidget.d.ts'
import type { BaseOptionElementWidget } from '../../../../../../net/irisshaders/iris/gui/element/widget/BaseOptionElementWidget.d.ts'
import type { ShaderPackScreen } from '../../../../../../net/irisshaders/iris/gui/screen/ShaderPackScreen.d.ts'
import type { BooleanOption } from '../../../../../../net/irisshaders/iris/shaderpack/option/BooleanOption.d.ts'
import type { OptionMenuBooleanOptionElement } from '../../../../../../net/irisshaders/iris/shaderpack/option/menu/OptionMenuBooleanOptionElement.d.ts'
import type { OptionMenuElement } from '../../../../../../net/irisshaders/iris/shaderpack/option/menu/OptionMenuElement.d.ts'
import type { GuiGraphicsExtractor } from '../../../../../../net/minecraft/client/gui/GuiGraphicsExtractor.d.ts'
import type { Component } from '../../../../../../net/minecraft/network/chat/Component.d.ts'
export class BooleanElementWidget extends BaseOptionElementWidget<OptionMenuBooleanOptionElement> {
    static EMPTY: AbstractElementWidget<OptionMenuElement>;
    constructor(arg0: OptionMenuBooleanOptionElement)
    // private appliedValue: boolean;
    // private defaultValue: boolean;
    // private option: BooleanOption;
    readonly value: boolean;
    applyNextValue(): boolean;
    applyOriginalValue(): boolean;
    applyPreviousValue(): boolean;
    createValueLabel(): Component;
    getCommentKey(): string;
    getValue(): string;
    init(arg0: ShaderPackScreen, arg1: NavigationController): void;
    isValueModified(): boolean;
    // private queue(): void;
    render(arg0: GuiGraphicsExtractor, arg1: number, arg2: number, arg3: number, arg4: boolean): void;
}