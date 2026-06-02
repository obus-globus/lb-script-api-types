import type { Adjustable } from '../../java/awt/Adjustable.d.ts'
import type { ScrollPane } from '../../java/awt/ScrollPane.d.ts'
import type { AdjustmentListener } from '../../java/awt/event/AdjustmentListener.d.ts'
import type { Serializable } from '../../java/io/Serializable.d.ts'
import type { Object } from '../../java/lang/Object.d.ts'
export class ScrollPaneAdjustable extends Object implements Adjustable, Serializable {
    static HORIZONTAL: number;
    static NO_ORIENTATION: number;
    static VERTICAL: number;
    constructor(arg0: ScrollPane, arg1: AdjustmentListener, arg2: number)
    // private adjustmentListener: AdjustmentListener;
    readonly blockIncrement: number;
    // private isAdjusting: boolean;
    readonly maximum: number;
    readonly minimum: number;
    readonly orientation: number;
    // private sp: ScrollPane;
    readonly unitIncrement: number;
    readonly value: number;
    readonly visibleAmount: number;
    addAdjustmentListener(arg0: AdjustmentListener): void;
    getAdjustmentListeners(): AdjustmentListener[];
    getBlockIncrement(): number;
    getMaximum(): number;
    getMinimum(): number;
    getOrientation(): number;
    getUnitIncrement(): number;
    getValue(): number;
    getValueIsAdjusting(): boolean;
    getVisibleAmount(): number;
    paramString(): string;
    removeAdjustmentListener(arg0: AdjustmentListener): void;
    setBlockIncrement(arg0: number): void;
    setMaximum(arg0: number): void;
    setMinimum(arg0: number): void;
    setSpan(arg0: number, arg1: number, arg2: number): void;
    // private setTypedValue(arg0: number, arg1: number): void;
    setUnitIncrement(arg0: number): void;
    setValue(arg0: number): void;
    setValueIsAdjusting(arg0: boolean): void;
    setVisibleAmount(arg0: number): void;
    toString(): string;
}