import type { DynamicObject } from '../../../../../com/oracle/truffle/api/object/DynamicObject.d.ts'
import type { CoreLocations$DynamicObjectFieldLocation } from '../../../../../com/oracle/truffle/object/CoreLocations$DynamicObjectFieldLocation.d.ts'
import type { Class } from '../../../../../java/lang/Class.d.ts'
import type { IllegalArgumentException } from '../../../../../java/lang/IllegalArgumentException.d.ts'
import type { VarHandle } from '../../../../../java/lang/invoke/VarHandle.d.ts'
import type { Object } from '../../../../../java/lang/Object.d.ts'
import type { Comparable } from '../../../../../java/lang/Comparable.d.ts'
export class FieldInfo extends CoreLocations$DynamicObjectFieldLocation implements Comparable<FieldInfo> {
    constructor(type: Class<Object>, name: string, offset: number, declaringClass: Class<DynamicObject>, varHandle: VarHandle)
    // private name: string;
    // private offset: number;
    // private tclass: Class<DynamicObject>;
    // private type: Class<Object>;
    // private varHandle: VarHandle;
    compareTo(other: FieldInfo): number;
    equals(obj: Object | null): boolean;
    getBytes(): number;
    getDeclaringClass(): Class<DynamicObject>;
    hashCode(): number;
    // private illegalReceiver(store: DynamicObject): IllegalArgumentException;
    name(): string;
    offset(): number;
    receiverCheck(store: DynamicObject): void;
    toString(): string;
    type(): Class<Object>;
    varHandle(): VarHandle;
}