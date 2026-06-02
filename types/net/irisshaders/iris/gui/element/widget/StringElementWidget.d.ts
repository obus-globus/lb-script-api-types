import type { NavigationController } from '../../../../../../net/irisshaders/iris/gui/NavigationController.d.ts'
import type { AbstractElementWidget } from '../../../../../../net/irisshaders/iris/gui/element/widget/AbstractElementWidget.d.ts'
import type { BaseOptionElementWidget } from '../../../../../../net/irisshaders/iris/gui/element/widget/BaseOptionElementWidget.d.ts'
import type { ShaderPackScreen } from '../../../../../../net/irisshaders/iris/gui/screen/ShaderPackScreen.d.ts'
import type { StringOption } from '../../../../../../net/irisshaders/iris/shaderpack/option/StringOption.d.ts'
import type { OptionMenuElement } from '../../../../../../net/irisshaders/iris/shaderpack/option/menu/OptionMenuElement.d.ts'
import type { OptionMenuStringOptionElement } from '../../../../../../net/irisshaders/iris/shaderpack/option/menu/OptionMenuStringOptionElement.d.ts'
import type { GuiGraphicsExtractor } from '../../../../../../net/minecraft/client/gui/GuiGraphicsExtractor.d.ts'
import type { Component } from '../../../../../../net/minecraft/network/chat/Component.d.ts'
import type { MutableComponent } from '../../../../../../net/minecraft/network/chat/MutableComponent.d.ts'
export class StringElementWidget extends BaseOptionElementWidget<OptionMenuStringOptionElement> {
    static EMPTY: AbstractElementWidget<OptionMenuElement>;
    constructor(arg0: OptionMenuStringOptionElement)
    // private appliedValue: string;
    // private option: StringOption;
    // private prefix: MutableComponent;
    // private suffix: MutableComponent;
    // private valueCount: number;
    // private valueIndex: number;
    applyNextValue(): boolean;
    applyOriginalValue(): boolean;
    applyPreviousValue(): boolean;
    createValueLabel(): Component;
    getCommentKey(): string;
    getValue(): string;
    // private increment(arg0: number): void;
    init(arg0: ShaderPackScreen, arg1: NavigationController): void;
    isValueModified(): boolean;
    queue(): void;
    render(arg0: GuiGraphicsExtractor, arg1: number, arg2: number, arg3: number, arg4: boolean): void;
}