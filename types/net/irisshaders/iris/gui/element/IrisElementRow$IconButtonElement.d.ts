import type { Function } from '../../../../../java/util/function/Function.d.ts'
import type { GuiUtil$Icon } from '../../../../../net/irisshaders/iris/gui/GuiUtil$Icon.d.ts'
import type { IrisElementRow$ButtonElement } from '../../../../../net/irisshaders/iris/gui/element/IrisElementRow$ButtonElement.d.ts'
import type { GuiGraphicsExtractor } from '../../../../../net/minecraft/client/gui/GuiGraphicsExtractor.d.ts'
export class IrisElementRow$IconButtonElement extends IrisElementRow$ButtonElement<IrisElementRow$IconButtonElement> {
    constructor(arg0: GuiUtil$Icon, arg1: (param0: IrisElementRow$IconButtonElement) => boolean)
    constructor(arg0: GuiUtil$Icon, arg1: GuiUtil$Icon, arg2: (param0: IrisElementRow$IconButtonElement) => boolean)
    hoveredIcon: GuiUtil$Icon;
    icon: GuiUtil$Icon;
    renderLabel(arg0: GuiGraphicsExtractor, arg1: number, arg2: number, arg3: number, arg4: number, arg5: number, arg6: number, arg7: number, arg8: boolean): void;
}