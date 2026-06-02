import type { ClassResolver } from '../../../../../io/netty/handler/codec/serialization/ClassResolver.d.ts'
import type { InputStream } from '../../../../../java/io/InputStream.d.ts'
import type { ObjectInputStream } from '../../../../../java/io/ObjectInputStream.d.ts'
import type { ObjectStreamClass } from '../../../../../java/io/ObjectStreamClass.d.ts'
import type { SerializablePermission } from '../../../../../java/io/SerializablePermission.d.ts'
import type { Class } from '../../../../../java/lang/Class.d.ts'
import type { Object } from '../../../../../java/lang/Object.d.ts'
export class CompactObjectInputStream extends ObjectInputStream {
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
    static nullInputStream(): InputStream;
    constructor(arg0: InputStream, arg1: ClassResolver)
    // private classResolver: ClassResolver;
    readClassDescriptor(): ObjectStreamClass;
    readStreamHeader(): void;
    resolveClass(arg0: ObjectStreamClass): Class<Object>;
}