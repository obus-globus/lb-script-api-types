import type { Class } from '../../../../../java/lang/Class.d.ts'
import type { RuntimeException } from '../../../../../java/lang/RuntimeException.d.ts'
import type { MethodHandles$Lookup } from '../../../../../java/lang/invoke/MethodHandles$Lookup.d.ts'
import type { Object } from '../../../../../java/lang/Object.d.ts'
export abstract class InlineSupport$UnsafeField extends Object {
    constructor(prev: InlineSupport$UnsafeField)
    constructor(receiverClass: Class<Object>, declaringClass: Class<Object>, declaringLookup: MethodHandles$Lookup, fieldName: string, valueClass: Class<Object>)
    // private declaringClass: Class<Object>;
    // private name: string;
    // private offset: number;
    // private receiverClass: Class<Object>;
    castReceiver(node: Object): Object;
    compareAndSetObject(node: Object, expect: Object, update: Object, valueClass: Class<Object>): boolean;
    getBoolean(node: Object): boolean;
    getByte(node: Object): number;
    getChar(node: Object): string;
    getDouble(node: Object): number;
    getFloat(node: Object): number;
    getInt(node: Object): number;
    getLong(node: Object): number;
    getObject(node: Object): Object;
    getObjectVolatile(node: Object): Object;
    getShort(node: Object): number;
    // private invalidReceiver(inlineTarget: Object): RuntimeException;
    setBoolean(node: Object, v: boolean): void;
    setByte(node: Object, v: number): void;
    setChar(node: Object, v: string): void;
    setDouble(node: Object, v: number): void;
    setFloat(node: Object, v: number): void;
    setInt(node: Object, v: number): void;
    setLong(node: Object, v: number): void;
    setObject(node: Object, v: Object, valueClass: Class<Object>): void;
    setShort(node: Object, v: number): void;
}