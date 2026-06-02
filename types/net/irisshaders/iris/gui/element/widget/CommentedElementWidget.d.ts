import type { Optional } from '../../../../../../java/util/Optional.d.ts'
import type { AbstractElementWidget } from '../../../../../../net/irisshaders/iris/gui/element/widget/AbstractElementWidget.d.ts'
import type { OptionMenuElement } from '../../../../../../net/irisshaders/iris/shaderpack/option/menu/OptionMenuElement.d.ts'
import type { Component } from '../../../../../../net/minecraft/network/chat/Component.d.ts'
export abstract class CommentedElementWidget<T extends OptionMenuElement> extends AbstractElementWidget<T> {
    static EMPTY: AbstractElementWidget<OptionMenuElement>;
    constructor(arg0: T)
    getCommentBody(): Optional<Component>;
    getCommentTitle(): Optional<Component>;
}