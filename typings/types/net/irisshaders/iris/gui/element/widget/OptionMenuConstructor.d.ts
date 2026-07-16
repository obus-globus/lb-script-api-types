import type { Class } from '../../../../../../java/lang/Class.d.ts'
import type { Object } from '../../../../../../java/lang/Object.d.ts'
import type { NavigationController } from '../../../../../../net/irisshaders/iris/gui/NavigationController.d.ts'
import type { ShaderPackOptionList } from '../../../../../../net/irisshaders/iris/gui/element/ShaderPackOptionList.d.ts'
import type { ElementWidgetScreenData } from '../../../../../../net/irisshaders/iris/gui/element/screen/ElementWidgetScreenData.d.ts'
import type { AbstractElementWidget } from '../../../../../../net/irisshaders/iris/gui/element/widget/AbstractElementWidget.d.ts'
import type { OptionMenuConstructor$ScreenDataProvider } from '../../../../../../net/irisshaders/iris/gui/element/widget/OptionMenuConstructor$ScreenDataProvider.d.ts'
import type { OptionMenuConstructor$WidgetProvider } from '../../../../../../net/irisshaders/iris/gui/element/widget/OptionMenuConstructor$WidgetProvider.d.ts'
import type { ShaderPackScreen } from '../../../../../../net/irisshaders/iris/gui/screen/ShaderPackScreen.d.ts'
import type { OptionMenuContainer } from '../../../../../../net/irisshaders/iris/shaderpack/option/menu/OptionMenuContainer.d.ts'
import type { OptionMenuElement } from '../../../../../../net/irisshaders/iris/shaderpack/option/menu/OptionMenuElement.d.ts'
import type { OptionMenuElementScreen } from '../../../../../../net/irisshaders/iris/shaderpack/option/menu/OptionMenuElementScreen.d.ts'
export class OptionMenuConstructor extends Object {
    static constructAndApplyToScreen(paramarg0: OptionMenuContainer, paramarg1: ShaderPackScreen, paramarg2: ShaderPackOptionList, paramarg3: NavigationController): void;
    static createScreenData(paramarg0: OptionMenuElementScreen): ElementWidgetScreenData;
    static createWidget(paramarg0: OptionMenuElement): AbstractElementWidget<OptionMenuElement>;
    static registerScreen<T extends OptionMenuElementScreen>(paramarg0: Class<T>, paramarg1: OptionMenuConstructor$ScreenDataProvider<T>): void;
    static registerWidget<T extends OptionMenuElement>(paramarg0: Class<T>, paramarg1: OptionMenuConstructor$WidgetProvider<T>): void;
    private constructor()
}