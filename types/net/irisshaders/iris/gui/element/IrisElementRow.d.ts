import type { Optional } from '../../../../../java/util/Optional.d.ts'
import type { Object } from '../../../../../java/lang/Object.d.ts'
import type { IrisElementRow$Element } from '../../../../../net/irisshaders/iris/gui/element/IrisElementRow$Element.d.ts'
import type { GuiGraphicsExtractor } from '../../../../../net/minecraft/client/gui/GuiGraphicsExtractor.d.ts'
import type { GuiEventListener } from '../../../../../net/minecraft/client/gui/components/events/GuiEventListener.d.ts'
import type { KeyEvent } from '../../../../../net/minecraft/client/input/KeyEvent.d.ts'
import type { MouseButtonEvent } from '../../../../../net/minecraft/client/input/MouseButtonEvent.d.ts'
export class IrisElementRow extends Object {
    constructor()
    constructor(arg0: number)
    // private elements: Map<IrisElementRow$Element, number>;
    // private height: number;
    // private orderedElements: IrisElementRow$Element[];
    // private spacing: number;
    readonly width: number;
    // private x: number;
    // private y: number;
    add(arg0: IrisElementRow$Element, arg1: number): IrisElementRow;
    children(): GuiEventListener[];
    // private getFocused(): Optional<IrisElementRow$Element>;
    // private getHovered(arg0: number, arg1: number): Optional<IrisElementRow$Element>;
    getWidth(): number;
    keyPressed(arg0: KeyEvent): boolean;
    mouseClicked(arg0: MouseButtonEvent, arg1: boolean): boolean;
    mouseReleased(arg0: MouseButtonEvent): boolean;
    render(arg0: GuiGraphicsExtractor, arg1: number, arg2: number, arg3: number, arg4: number, arg5: number, arg6: number, arg7: boolean): void;
    renderRightAligned(arg0: GuiGraphicsExtractor, arg1: number, arg2: number, arg3: number, arg4: number, arg5: number, arg6: number, arg7: boolean): void;
    // private sectionHovered(arg0: number, arg1: number, arg2: number, arg3: number): boolean;
    setWidth(arg0: IrisElementRow$Element, arg1: number): void;
}