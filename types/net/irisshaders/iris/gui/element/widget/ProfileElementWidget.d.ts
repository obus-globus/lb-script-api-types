import type { Optional } from '../../../../../../java/util/Optional.d.ts'
import type { NavigationController } from '../../../../../../net/irisshaders/iris/gui/NavigationController.d.ts'
import type { AbstractElementWidget } from '../../../../../../net/irisshaders/iris/gui/element/widget/AbstractElementWidget.d.ts'
import type { BaseOptionElementWidget } from '../../../../../../net/irisshaders/iris/gui/element/widget/BaseOptionElementWidget.d.ts'
import type { ShaderPackScreen } from '../../../../../../net/irisshaders/iris/gui/screen/ShaderPackScreen.d.ts'
import type { Profile } from '../../../../../../net/irisshaders/iris/shaderpack/option/Profile.d.ts'
import type { OptionMenuElement } from '../../../../../../net/irisshaders/iris/shaderpack/option/menu/OptionMenuElement.d.ts'
import type { OptionMenuProfileElement } from '../../../../../../net/irisshaders/iris/shaderpack/option/menu/OptionMenuProfileElement.d.ts'
import type { GuiGraphicsExtractor } from '../../../../../../net/minecraft/client/gui/GuiGraphicsExtractor.d.ts'
import type { Component } from '../../../../../../net/minecraft/network/chat/Component.d.ts'
export class ProfileElementWidget extends BaseOptionElementWidget<OptionMenuProfileElement> {
    static EMPTY: AbstractElementWidget<OptionMenuElement>;
    constructor(arg0: OptionMenuProfileElement)
    // private next: Profile;
    // private previous: Profile;
    // private profileLabel: Component;
    applyNextValue(): boolean;
    applyOriginalValue(): boolean;
    applyPreviousValue(): boolean;
    createValueLabel(): Component;
    getCommentKey(): string;
    getCommentTitle(): Optional<Component>;
    init(arg0: ShaderPackScreen, arg1: NavigationController): void;
    isValueModified(): boolean;
    render(arg0: GuiGraphicsExtractor, arg1: number, arg2: number, arg3: number, arg4: boolean): void;
}