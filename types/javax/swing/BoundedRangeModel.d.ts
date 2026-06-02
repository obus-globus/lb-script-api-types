import type { ChangeListener } from '../../javax/swing/event/ChangeListener.d.ts'
import type { Object } from '../../java/lang/Object.d.ts'
export interface BoundedRangeModel extends Object{
    addChangeListener(arg0: ChangeListener): void;
    getExtent(): number;
    getMaximum(): number;
    getMinimum(): number;
    getValue(): number;
    getValueIsAdjusting(): boolean;
    removeChangeListener(arg0: ChangeListener): void;
    setExtent(arg0: number): void;
    setMaximum(arg0: number): void;
    setMinimum(arg0: number): void;
    setRangeProperties(arg0: number, arg1: number, arg2: number, arg3: number, arg4: boolean): void;
    setValue(arg0: number): void;
    setValueIsAdjusting(arg0: boolean): void;
}