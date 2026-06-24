import type { ValidatingObjectInputStream$1 } from '../../../../../com/google/gson/LongSerializationPolicy$1.d.ts'
import type { InputStream } from '../../../../../java/io/InputStream.d.ts'
import type { ObjectInputStream } from '../../../../../java/io/ObjectInputStream.d.ts'
import type { ObjectStreamClass } from '../../../../../java/io/ObjectStreamClass.d.ts'
import type { SerializablePermission } from '../../../../../java/io/SerializablePermission.d.ts'
import type { Class } from '../../../../../java/lang/Class.d.ts'
import type { Pattern } from '../../../../../java/util/regex/Pattern.d.ts'
import type { Object } from '../../../../../java/lang/Object.d.ts'
import type { ClassNameMatcher } from '../../../../../org/apache/commons/io/serialization/ClassNameMatcher.d.ts'
import type { ObjectStreamClassPredicate } from '../../../../../org/apache/commons/io/serialization/ObjectStreamClassPredicate.d.ts'
import type { ValidatingObjectInputStream$Builder } from '../../../../../org/apache/commons/io/serialization/ValidatingObjectInputStream$Builder.d.ts'
export class ValidatingObjectInputStream extends ObjectInputStream {
    static PROTOCOL_VERSION_1: number;
    static PROTOCOL_VERSION_2: number;
    static SC_BLOCK_DATA: number;
    static SC_ENUM: number;
    static SC_EXTERNALIZABLE: number;
    static SC_SERIALIZABLE: number;
    static SC_WRITE_METHOD: number;
    static SERIAL_FILTER_PERMISSION: SerializablePermission;
    static STREAM_MAGIC: number;
    static STREAM_VERSION: number;
    static SUBCLASS_IMPLEMENTATION_PERMISSION: SerializablePermission;
    static SUBSTITUTION_PERMISSION: SerializablePermission;
    static TC_ARRAY: number;
    static TC_BASE: number;
    static TC_BLOCKDATA: number;
    static TC_BLOCKDATALONG: number;
    static TC_CLASS: number;
    static TC_CLASSDESC: number;
    static TC_ENDBLOCKDATA: number;
    static TC_ENUM: number;
    static TC_EXCEPTION: number;
    static TC_LONGSTRING: number;
    static TC_MAX: number;
    static TC_NULL: number;
    static TC_OBJECT: number;
    static TC_PROXYCLASSDESC: number;
    static TC_REFERENCE: number;
    static TC_RESET: number;
    static TC_STRING: number;
    static baseWireHandle: number;
    static builder(): ValidatingObjectInputStream$Builder;
    static nullInputStream(): InputStream;
    constructor(arg0: InputStream)
    private constructor(arg0: InputStream, arg1: ObjectStreamClassPredicate)
    private constructor(arg0: ValidatingObjectInputStream$Builder)
    constructor(arg0: ValidatingObjectInputStream$Builder, arg1: ValidatingObjectInputStream$1)
    // private predicate: ObjectStreamClassPredicate;
    accept(arg0: Pattern): ValidatingObjectInputStream;
    accept(arg0: Class<Object>[]): ValidatingObjectInputStream;
    accept(arg0: string[]): ValidatingObjectInputStream;
    accept(arg0: (param0: string) => boolean): ValidatingObjectInputStream;
    // private checkClassName(arg0: string): void;
    invalidClassNameFound(arg0: string): void;
    readObjectCast<T extends unknown>(): T;
    reject(arg0: Pattern): ValidatingObjectInputStream;
    reject(arg0: Class<Object>[]): ValidatingObjectInputStream;
    reject(arg0: string[]): ValidatingObjectInputStream;
    reject(arg0: (param0: string) => boolean): ValidatingObjectInputStream;
    resolveClass(arg0: ObjectStreamClass): Class<Object>;
}