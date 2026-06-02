import type { Object } from '../../java/lang/Object.d.ts'
import type { Number } from '../../java/lang/Number.d.ts'
export interface AccessibleValue extends Object{
    getCurrentAccessibleValue(): Number;
    getMaximumAccessibleValue(): Number;
    getMinimumAccessibleValue(): Number;
    setCurrentAccessibleValue(arg0: Number): boolean;
}