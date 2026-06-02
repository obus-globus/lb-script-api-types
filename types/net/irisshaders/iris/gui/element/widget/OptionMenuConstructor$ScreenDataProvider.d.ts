import type { Object } from '../../../../../../java/lang/Object.d.ts'
import type { ElementWidgetScreenData } from '../../../../../../net/irisshaders/iris/gui/element/screen/ElementWidgetScreenData.d.ts'
import type { OptionMenuElementScreen } from '../../../../../../net/irisshaders/iris/shaderpack/option/menu/OptionMenuElementScreen.d.ts'
export interface OptionMenuConstructor$ScreenDataProvider<T extends OptionMenuElementScreen> extends Object{
    create(arg0: T): ElementWidgetScreenData;
}