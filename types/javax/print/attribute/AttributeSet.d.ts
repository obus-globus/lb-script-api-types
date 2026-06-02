import type { Class } from '../../../java/lang/Class.d.ts'
import type { Attribute } from '../../../javax/print/attribute/Attribute.d.ts'
import type { Object } from '../../../java/lang/Object.d.ts'
export interface AttributeSet extends Object{
    add(arg0: Attribute): boolean;
    addAll(arg0: AttributeSet): boolean;
    clear(): void;
    containsKey(arg0: Class<Object>): boolean;
    containsValue(arg0: Attribute): boolean;
    get(arg0: Class<Object>): Attribute;
    isEmpty(): boolean;
    remove(arg0: Class<Object>): boolean;
    remove(arg0: Attribute): boolean;
    size(): number;
    toArray(): Attribute[];
}