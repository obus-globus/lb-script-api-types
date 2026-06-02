import type { AdjustmentListener } from '../../java/awt/event/AdjustmentListener.d.ts'
import type { Object } from '../../java/lang/Object.d.ts'
export interface Adjustable extends Object{
    addAdjustmentListener(arg0: AdjustmentListener): void;
    getBlockIncrement(): number;
    getMaximum(): number;
    getMinimum(): number;
    getOrientation(): number;
    getUnitIncrement(): number;
    getValue(): number;
    getVisibleAmount(): number;
    removeAdjustmentListener(arg0: AdjustmentListener): void;
    setBlockIncrement(arg0: number): void;
    setMaximum(arg0: number): void;
    setMinimum(arg0: number): void;
    setUnitIncrement(arg0: number): void;
    setValue(arg0: number): void;
    setVisibleAmount(arg0: number): void;
}