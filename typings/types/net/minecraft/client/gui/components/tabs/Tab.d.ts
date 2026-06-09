import type { Consumer } from '../../../../../../java/util/function/Consumer.d.ts'
import type { Object } from '../../../../../../java/lang/Object.d.ts'
import type { AbstractWidget } from '../../../../../../net/minecraft/client/gui/components/AbstractWidget.d.ts'
import type { ScreenRectangle } from '../../../../../../net/minecraft/client/gui/navigation/ScreenRectangle.d.ts'
import type { Component } from '../../../../../../net/minecraft/network/chat/Component.d.ts'
export interface Tab extends Object {
    doLayout(screenRectangle: ScreenRectangle): void;
    getTabExtraNarration(): Component;
    getTabTitle(): Component;
    visitChildren(childrenConsumer: (param0: AbstractWidget) => void): void;
}