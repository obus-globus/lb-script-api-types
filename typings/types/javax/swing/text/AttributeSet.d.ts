import type { Enumeration } from '../../../java/util/Enumeration.d.ts'
import type { Object } from '../../../java/lang/Object.d.ts'
export interface AttributeSet extends Object{
    containsAttribute(arg0: Object, arg1: Object): boolean;
    containsAttributes(arg0: AttributeSet): boolean;
    copyAttributes(): AttributeSet;
    getAttribute(arg0: Object): Object;
    getAttributeCount(): number;
    getAttributeNames(): Enumeration<Object>;
    getResolveParent(): AttributeSet;
    isDefined(arg0: Object): boolean;
    isEqual(arg0: AttributeSet): boolean;
}