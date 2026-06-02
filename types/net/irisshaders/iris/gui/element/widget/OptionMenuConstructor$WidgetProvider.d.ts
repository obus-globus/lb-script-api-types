import type { Object } from '../../../../../../java/lang/Object.d.ts'
import type { AbstractElementWidget } from '../../../../../../net/irisshaders/iris/gui/element/widget/AbstractElementWidget.d.ts'
import type { OptionMenuElement } from '../../../../../../net/irisshaders/iris/shaderpack/option/menu/OptionMenuElement.d.ts'
export interface OptionMenuConstructor$WidgetProvider<T extends OptionMenuElement> extends Object{
    create(arg0: T): AbstractElementWidget<T>;
}