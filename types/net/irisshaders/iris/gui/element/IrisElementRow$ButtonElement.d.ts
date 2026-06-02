import type { Function } from '../../../../../java/util/function/Function.d.ts'
import type { IrisElementRow$Element } from '../../../../../net/irisshaders/iris/gui/element/IrisElementRow$Element.d.ts'
import type { KeyEvent } from '../../../../../net/minecraft/client/input/KeyEvent.d.ts'
import type { MouseButtonEvent } from '../../../../../net/minecraft/client/input/MouseButtonEvent.d.ts'
export abstract class IrisElementRow$ButtonElement<T extends IrisElementRow$ButtonElement<T>> extends IrisElementRow$Element {
    constructor(arg0: (param0: T) => boolean)
    // private onClick: (param0: T) => boolean;
    keyPressed(arg0: KeyEvent): boolean;
    mouseClicked(arg0: MouseButtonEvent, arg1: boolean): boolean;
}