import type { Enumeration } from '../../../java/util/Enumeration.d.ts'
import type { AttributeSet } from '../../../javax/swing/text/AttributeSet.d.ts'
import type { Object } from '../../../java/lang/Object.d.ts'
export interface MutableAttributeSet extends AttributeSet, Object{
    addAttribute(arg0: Object, arg1: Object): void;
    addAttributes(arg0: AttributeSet): void;
    removeAttribute(arg0: Object): void;
    removeAttributes(arg0: Enumeration<Object>): void;
    removeAttributes(arg0: AttributeSet): void;
    setResolveParent(arg0: AttributeSet): void;
}