import type { ObjectInputStream } from '../../java/io/ObjectInputStream.d.ts'
import type { ObjectOutputStream } from '../../java/io/ObjectOutputStream.d.ts'
import type { ObjectStreamClass$ClassDataSlot } from '../../java/io/ObjectStreamClass$ClassDataSlot.d.ts'
import type { ObjectStreamClass$ExceptionInfo } from '../../java/io/ObjectStreamClass$ExceptionInfo.d.ts'
import type { ObjectStreamClass$FieldReflector } from '../../java/io/ObjectStreamClass$FieldReflector.d.ts'
import type { ObjectStreamField } from '../../java/io/ObjectStreamField.d.ts'
import type { Serializable } from '../../java/io/Serializable.d.ts'
import type { Class } from '../../java/lang/Class.d.ts'
import type { ClassNotFoundException } from '../../java/lang/ClassNotFoundException.d.ts'
import type { MethodHandle } from '../../java/lang/invoke/MethodHandle.d.ts'
import type { Constructor } from '../../java/lang/reflect/Constructor.d.ts'
import type { Method } from '../../java/lang/reflect/Method.d.ts'
import type { Object } from '../../java/lang/Object.d.ts'
export class ObjectStreamClass extends Object implements Serializable {
    static NO_FIELDS: (Object | null)[];
    static lookup(paramarg0: Class<Object>): ObjectStreamClass;
    static lookupAny(paramarg0: Class<Object>): ObjectStreamClass;
    constructor()
    private constructor(arg0: Class<Object>)
    // private canonicalCtr: MethodHandle;
    // private cl: Class<Object>;
    // private cons: Constructor<Object>;
    // private dataLayout: ObjectStreamClass$ClassDataSlot[];
    // private defaultSerializeEx: ObjectStreamClass$ExceptionInfo;
    // private deserializationCtr: MethodHandle;
    // private deserializationCtrs: { [key: string]: any };
    // private deserializeEx: ObjectStreamClass$ExceptionInfo;
    // private externalizable: boolean;
    // private fieldRefl: ObjectStreamClass$FieldReflector;
    readonly fields: ObjectStreamField[];
    // private hasBlockExternalData: boolean;
    // private hasWriteObjectData: boolean;
    // private initialized: boolean;
    // private isEnum: boolean;
    // private isProxy: boolean;
    // private isRecord: boolean;
    // private localDesc: ObjectStreamClass;
    readonly name: string;
    // private numObjFields: number;
    // private primDataSize: number;
    // private readObjectMethod: Method;
    // private readObjectNoDataMethod: Method;
    // private readResolveMethod: Method;
    // private resolveEx: ClassNotFoundException;
    // private serializable: boolean;
    // private serializeEx: ObjectStreamClass$ExceptionInfo;
    // private suid: number;
    // private superDesc: ObjectStreamClass;
    // private writeObjectMethod: Method;
    // private writeReplaceMethod: Method;
    checkDefaultSerialize(): void;
    checkDeserialize(): void;
    checkInitialized(): void;
    checkObjFieldValueTypes(arg0: Object, arg1: Object[]): void;
    checkSerialize(): void;
    // private computeFieldOffsets(): void;
    forClass(): Class<Object>;
    getClassDataLayout(): ObjectStreamClass$ClassDataSlot[];
    // private getClassDataLayout0(): ObjectStreamClass$ClassDataSlot[];
    getField(arg0: string): ObjectStreamField;
    getField(arg0: string, arg1: Class<Object>): ObjectStreamField;
    getFields(): ObjectStreamField[];
    getFields(arg0: boolean): ObjectStreamField[];
    getLocalDesc(): ObjectStreamClass;
    getName(): string;
    getNumObjFields(): number;
    getObjFieldValues(arg0: Object, arg1: Object[]): void;
    getPrimDataSize(): number;
    getPrimFieldValues(arg0: Object, arg1: number[]): void;
    getRecordConstructor(): MethodHandle;
    getResolveException(): ClassNotFoundException;
    getSerialVersionUID(): number;
    getSuperDesc(): ObjectStreamClass;
    // private getVariantFor(arg0: Class<Object>): ObjectStreamClass;
    hasBlockExternalData(): boolean;
    hasReadObjectMethod(): boolean;
    hasReadObjectNoDataMethod(): boolean;
    hasReadResolveMethod(): boolean;
    hasWriteObjectData(): boolean;
    hasWriteObjectMethod(): boolean;
    hasWriteReplaceMethod(): boolean;
    initNonProxy(arg0: ObjectStreamClass, arg1: Class<Object>, arg2: ClassNotFoundException, arg3: ObjectStreamClass): void;
    initProxy(arg0: Class<Object>, arg1: ClassNotFoundException, arg2: ObjectStreamClass): void;
    invokeReadObject(arg0: Object, arg1: ObjectInputStream): void;
    invokeReadObjectNoData(arg0: Object): void;
    invokeReadResolve(arg0: Object): Object;
    invokeWriteObject(arg0: Object, arg1: ObjectOutputStream): void;
    invokeWriteReplace(arg0: Object): Object;
    isEnum(): boolean;
    isExternalizable(): boolean;
    isInstantiable(): boolean;
    isProxy(): boolean;
    isRecord(): boolean;
    isSerializable(): boolean;
    newInstance(): Object;
    readNonProxy(arg0: ObjectInputStream): void;
    // private requireInitialized(): void;
    setObjFieldValues(arg0: Object, arg1: Object[]): void;
    setPrimFieldValues(arg0: Object, arg1: number[]): void;
    toString(): string;
    writeNonProxy(arg0: ObjectOutputStream): void;
}