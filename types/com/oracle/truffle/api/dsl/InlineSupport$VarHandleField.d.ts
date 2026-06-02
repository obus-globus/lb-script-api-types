import type { Class } from '../../../../../java/lang/Class.d.ts'
import type { MethodHandles$Lookup } from '../../../../../java/lang/invoke/MethodHandles$Lookup.d.ts'
import type { VarHandle } from '../../../../../java/lang/invoke/VarHandle.d.ts'
import type { Object } from '../../../../../java/lang/Object.d.ts'
export abstract class InlineSupport$VarHandleField extends Object {
    constructor(prev: InlineSupport$VarHandleField)
    constructor(receiverClass: Class<Object>, lookupClass: Class<Object>, declaringLookup: MethodHandles$Lookup, fieldName: string, valueClass: Class<Object>)
    // private handle: VarHandle;
    // private receiverClass: Class<Object>;
    compareAndSetObject(node: Object, expect: Object, update: Object): boolean;
    getBoolean(node: Object): boolean;
    getByte(node: Object): number;
    getChar(node: Object): string;
    getDouble(node: Object): number;
    getFieldClass(): Class<Object>;
    getFloat(node: Object): number;
    getInt(node: Object): number;
    getLong(node: Object): number;
    getObject(node: Object): Object;
    getObjectVolatile(node: Object): Object;
    getShort(node: Object): number;
    setBoolean(node: Object, v: boolean): void;
    setByte(node: Object, v: number): void;
    setChar(node: Object, v: string): void;
    setDouble(node: Object, v: number): void;
    setFloat(node: Object, v: number): void;
    setInt(node: Object, v: number): void;
    setLong(node: Object, v: number): void;
    setObject(node: Object, v: Object): void;
    setShort(node: Object, v: number): void;
    toString(): string;
}