import type { Externalizable } from '../../java/io/Externalizable.d.ts'
import type { IOException } from '../../java/io/IOException.d.ts'
import type { ObjectOutput } from '../../java/io/ObjectOutput.d.ts'
import type { ObjectOutputStream$BlockDataOutputStream } from '../../java/io/ObjectOutputStream$BlockDataOutputStream.d.ts'
import type { ObjectOutputStream$DebugTraceInfoStack } from '../../java/io/ObjectOutputStream$DebugTraceInfoStack.d.ts'
import type { ObjectOutputStream$HandleTable } from '../../java/io/ObjectOutputStream$HandleTable.d.ts'
import type { ObjectOutputStream$PutField } from '../../java/io/ObjectOutputStream$PutField.d.ts'
import type { ObjectOutputStream$PutFieldImpl } from '../../java/io/ObjectOutputStream$PutFieldImpl.d.ts'
import type { ObjectOutputStream$ReplaceTable } from '../../java/io/ObjectOutputStream$ReplaceTable.d.ts'
import type { ObjectStreamClass } from '../../java/io/ObjectStreamClass.d.ts'
import type { ObjectStreamConstants } from '../../java/io/ObjectStreamConstants.d.ts'
import type { OutputStream } from '../../java/io/OutputStream.d.ts'
import type { SerialCallbackContext } from '../../java/io/SerialCallbackContext.d.ts'
import type { SerializablePermission } from '../../java/io/SerializablePermission.d.ts'
import type { Class } from '../../java/lang/Class.d.ts'
import type { Object } from '../../java/lang/Object.d.ts'
import type { Enum } from '../../java/lang/Enum.d.ts'
export class ObjectOutputStream extends OutputStream implements ObjectOutput, ObjectStreamConstants {
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
    static nullOutputStream(): OutputStream;
    constructor()
    constructor(arg0: OutputStream)
    // private bout: ObjectOutputStream$BlockDataOutputStream;
    // private curContext: SerialCallbackContext;
    // private curPut: ObjectOutputStream$PutFieldImpl;
    // private debugInfoStack: ObjectOutputStream$DebugTraceInfoStack;
    // private depth: number;
    // private enableOverride: boolean;
    // private enableReplace: boolean;
    // private handles: ObjectOutputStream$HandleTable;
    // private primVals: number[];
    // private protocol: number;
    // private subs: ObjectOutputStream$ReplaceTable;
    annotateClass(arg0: Class<Object>): void;
    annotateProxyClass(arg0: Class<Object>): void;
    // private clear(): void;
    close(): void;
    // private defaultWriteFields(arg0: Object, arg1: ObjectStreamClass): void;
    defaultWriteObject(): void;
    drain(): void;
    enableReplaceObject(arg0: boolean): boolean;
    flush(): void;
    getProtocolVersion(): number;
    putFields(): ObjectOutputStream$PutField;
    replaceObject(arg0: Object): Object;
    reset(): void;
    useProtocolVersion(arg0: number): void;
    write(arg0: number[]): void;
    write(arg0: number[], arg1: number, arg2: number): void;
    write(arg0: number): void;
    // private writeArray(arg0: Object, arg1: ObjectStreamClass, arg2: boolean): void;
    writeBoolean(arg0: boolean): void;
    writeByte(arg0: number): void;
    writeBytes(arg0: string): void;
    writeChar(arg0: number): void;
    writeChars(arg0: string): void;
    // private writeClass(arg0: Class<Object>, arg1: boolean): void;
    // private writeClassDesc(arg0: ObjectStreamClass, arg1: boolean): void;
    writeClassDescriptor(arg0: ObjectStreamClass): void;
    writeDouble(arg0: number): void;
    // private writeEnum(arg0: Enum<any>, arg1: ObjectStreamClass, arg2: boolean): void;
    // private writeExternalData(arg0: Externalizable): void;
    // private writeFatalException(arg0: IOException): void;
    writeFields(): void;
    writeFloat(arg0: number): void;
    // private writeHandle(arg0: number): void;
    writeInt(arg0: number): void;
    writeLong(arg0: number): void;
    // private writeNonProxyDesc(arg0: ObjectStreamClass, arg1: boolean): void;
    // private writeNull(): void;
    writeObject(arg0: Object): void;
    // private writeObject0(arg0: Object, arg1: boolean): void;
    writeObjectOverride(arg0: Object): void;
    // private writeOrdinaryObject(arg0: Object, arg1: ObjectStreamClass, arg2: boolean): void;
    // private writeProxyDesc(arg0: ObjectStreamClass, arg1: boolean): void;
    // private writeRecordData(arg0: Object, arg1: ObjectStreamClass): void;
    // private writeSerialData(arg0: Object, arg1: ObjectStreamClass): void;
    writeShort(arg0: number): void;
    writeStreamHeader(): void;
    // private writeString(arg0: string, arg1: boolean): void;
    writeTypeString(arg0: string): void;
    writeUTF(arg0: string): void;
    writeUnshared(arg0: Object): void;
}