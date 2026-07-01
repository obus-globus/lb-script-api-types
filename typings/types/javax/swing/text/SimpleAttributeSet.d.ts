import type { ObjectInputStream } from '../../../java/io/ObjectInputStream.d.ts'
import type { ObjectOutputStream } from '../../../java/io/ObjectOutputStream.d.ts'
import type { Serializable } from '../../../java/io/Serializable.d.ts'
import type { Enumeration } from '../../../java/util/Enumeration.d.ts'
import type { AttributeSet } from '../../../javax/swing/text/AttributeSet.d.ts'
import type { MutableAttributeSet } from '../../../javax/swing/text/MutableAttributeSet.d.ts'
import type { Object } from '../../../java/lang/Object.d.ts'
import type { Cloneable } from '../../../java/lang/Cloneable.d.ts'
export class SimpleAttributeSet extends Object implements Serializable, MutableAttributeSet, Cloneable {
    static EMPTY: AttributeSet;
    static NameAttribute: Object;
    static ResolveAttribute: Object;
    constructor()
    constructor(arg0: AttributeSet)
    // private table: Map<Object, Object>;
    addAttribute(arg0: Object, arg1: Object): void;
    addAttributes(arg0: AttributeSet): void;
    clone(): Object;
    containsAttribute(arg0: Object, arg1: Object): boolean;
    containsAttributes(arg0: AttributeSet): boolean;
    copyAttributes(): AttributeSet;
    equals(arg0: Object | null): boolean;
    getAttribute(arg0: Object): Object;
    getAttributeCount(): number;
    getAttributeNames(): Enumeration<Object>;
    getResolveParent(): AttributeSet;
    hashCode(): number;
    isDefined(arg0: Object): boolean;
    isEmpty(): boolean;
    isEqual(arg0: AttributeSet): boolean;
    // private readObject(arg0: ObjectInputStream): void;
    removeAttribute(arg0: Object): void;
    removeAttributes(arg0: Enumeration<Object>): void;
    removeAttributes(arg0: AttributeSet): void;
    setResolveParent(arg0: AttributeSet): void;
    toString(): string;
    // private writeObject(arg0: ObjectOutputStream): void;
}