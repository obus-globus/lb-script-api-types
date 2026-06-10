import type { Externalizable } from '../../java/io/Externalizable.d.ts'
import type { IOException } from '../../java/io/IOException.d.ts'
import type { InputStream } from '../../java/io/InputStream.d.ts'
import type { ObjectInput } from '../../java/io/ObjectInput.d.ts'
import type { ObjectInputFilter } from '../../java/io/ObjectInputFilter.d.ts'
import type { ObjectInputFilter$FilterInfo } from '../../java/io/ObjectInputFilter$FilterInfo.d.ts'
import type { ObjectInputFilter$Status } from '../../java/io/ObjectInputFilter$Status.d.ts'
import type { ObjectInputStream$BlockDataInputStream } from '../../java/io/ObjectInputStream$BlockDataInputStream.d.ts'
import type { ObjectInputStream$GetField } from '../../java/io/ObjectInputStream$GetField.d.ts'
import type { ObjectInputStream$HandleTable } from '../../java/io/ObjectInputStream$HandleTable.d.ts'
import type { ObjectInputStream$ValidationList } from '../../java/io/ObjectInputStream$ValidationList.d.ts'
import type { ObjectInputValidation } from '../../java/io/ObjectInputValidation.d.ts'
import type { ObjectStreamClass } from '../../java/io/ObjectStreamClass.d.ts'
import type { ObjectStreamConstants } from '../../java/io/ObjectStreamConstants.d.ts'
import type { SerialCallbackContext } from '../../java/io/SerialCallbackContext.d.ts'
import type { SerializablePermission } from '../../java/io/SerializablePermission.d.ts'
import type { Class } from '../../java/lang/Class.d.ts'
import type { Object } from '../../java/lang/Object.d.ts'
import type { Enum } from '../../java/lang/Enum.d.ts'
export class ObjectInputStream extends InputStream implements ObjectInput, ObjectStreamConstants {
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
    constructor()
    constructor(arg0: InputStream)
    // private bin: ObjectInputStream$BlockDataInputStream;
    // private closed: boolean;
    // private curContext: SerialCallbackContext;
    // private defaultDataEnd: boolean;
    // private depth: number;
    // private enableOverride: boolean;
    // private enableResolve: boolean;
    // private handles: ObjectInputStream$HandleTable;
    // private passHandle: number;
    // private serialFilter: (param0: ObjectInputFilter$FilterInfo) => ObjectInputFilter$Status;
    // private streamFilterSet: boolean;
    // private totalObjectRefs: number;
    // private vlist: ObjectInputStream$ValidationList;
    available(): number;
    // private checkArray(arg0: Class<Object>, arg1: number): void;
    // private checkResolve(arg0: Object): Object;
    // private clear(): void;
    close(): void;
    defaultReadObject(): void;
    enableResolveObject(arg0: boolean): boolean;
    // private filterCheck(arg0: Class<Object>, arg1: number): void;
    // private freeze(): void;
    getObjectInputFilter(): (param0: ObjectInputFilter$FilterInfo) => ObjectInputFilter$Status;
    // private handleReset(): void;
    read(): number;
    read(arg0: number[]): number;
    read(arg0: number[], arg1: number, arg2: number): number;
    // private readArray(arg0: boolean): Object;
    readBoolean(): boolean;
    readByte(): number;
    readChar(): string;
    // private readClass(arg0: boolean): Class<Object>;
    // private readClassDesc(arg0: boolean): ObjectStreamClass;
    readClassDescriptor(): ObjectStreamClass;
    readDouble(): number;
    // private readEnum(arg0: boolean): Enum<Object>;
    // private readExternalData(arg0: Externalizable, arg1: ObjectStreamClass): void;
    // private readFatalException(): IOException;
    readFields(): ObjectInputStream$GetField;
    readFloat(): number;
    readFully(arg0: number[]): void;
    readFully(arg0: number[], arg1: number, arg2: number): void;
    // private readHandle(arg0: boolean): Object;
    readInt(): number;
    readLine(): string;
    readLong(): number;
    // private readNonProxyDesc(arg0: boolean): ObjectStreamClass;
    // private readNull(): Object;
    readObject(): Object;
    // private readObject(arg0: Class<Object>): Object;
    // private readObject0(arg0: Class<Object>, arg1: boolean): Object;
    readObjectOverride(): Object;
    // private readOrdinaryObject(arg0: boolean): Object;
    // private readProxyDesc(arg0: boolean): ObjectStreamClass;
    // private readRecord(arg0: ObjectStreamClass): Object;
    // private readSerialData(arg0: Object, arg1: ObjectStreamClass): void;
    readShort(): number;
    readStreamHeader(): void;
    // private readString(): string;
    // private readString(arg0: boolean): string;
    readTypeString(): string;
    readUTF(): string;
    readUnshared(): Object;
    readUnsignedByte(): number;
    readUnsignedShort(): number;
    registerValidation(arg0: ObjectInputValidation, arg1: number): void;
    resolveClass(arg0: ObjectStreamClass): Class<Object>;
    resolveObject(arg0: Object): Object;
    resolveProxyClass(arg0: string[]): Class<Object>;
    setObjectInputFilter(arg0: (param0: ObjectInputFilter$FilterInfo) => ObjectInputFilter$Status): void;
    skipBytes(arg0: number): number;
    // private skipCustomData(): void;
}