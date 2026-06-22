import type { Attribute } from '../../../javax/print/attribute/Attribute.d.ts'
import type { AttributeSet } from '../../../javax/print/attribute/AttributeSet.d.ts'
import type { Object } from '../../../java/lang/Object.d.ts'
export interface PrintJobAttributeSet extends AttributeSet, Object{
    add(arg0: Attribute): boolean;
    addAll(arg0: AttributeSet): boolean;
    clear(): void;
    containsValue(arg0: Attribute): boolean;
    isEmpty(): boolean;
    remove(arg0: Attribute): boolean;
    size(): number;
}