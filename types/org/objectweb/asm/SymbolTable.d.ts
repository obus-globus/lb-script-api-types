import type { Object } from '../../../java/lang/Object.d.ts'
import type { ByteVector } from '../../../org/objectweb/asm/ByteVector.d.ts'
import type { ClassReader } from '../../../org/objectweb/asm/ClassReader.d.ts'
import type { ClassWriter } from '../../../org/objectweb/asm/ClassWriter.d.ts'
import type { Handle } from '../../../org/objectweb/asm/Handle.d.ts'
import type { Label } from '../../../org/objectweb/asm/Label.d.ts'
import type { Symbol } from '../../../org/objectweb/asm/Symbol.d.ts'
import type { SymbolTable$Entry } from '../../../org/objectweb/asm/SymbolTable$Entry.d.ts'
import type { SymbolTable$LabelEntry } from '../../../org/objectweb/asm/SymbolTable$LabelEntry.d.ts'
export class SymbolTable extends Object {
    constructor(arg0: ClassWriter)
    constructor(arg0: ClassWriter, arg1: ClassReader)
    // private bootstrapMethodCount: number;
    // private bootstrapMethods: ByteVector;
    // private className: string;
    // private classWriter: ClassWriter;
    // private constantPool: ByteVector;
    // private constantPoolCount: number;
    // private entries: SymbolTable$Entry[];
    // private entryCount: number;
    // private labelCount: number;
    // private labelEntries: SymbolTable$LabelEntry[];
    // private labelTable: SymbolTable$LabelEntry[];
    // private majorVersion: number;
    // private sourceClassReader: ClassReader;
    // private typeCount: number;
    // private typeTable: SymbolTable$Entry[];
    // private add(arg0: SymbolTable$Entry): void;
    // private addBootstrapMethod(arg0: number, arg1: number, arg2: number): Symbol;
    addBootstrapMethod(arg0: Handle, arg1: Object[]): Symbol;
    addConstant(arg0: Object): Symbol;
    addConstantClass(arg0: string): Symbol;
    addConstantDouble(arg0: number): Symbol;
    addConstantDynamic(arg0: string, arg1: string, arg2: Handle, arg3: Object[]): Symbol;
    // private addConstantDynamicOrInvokeDynamicReference(arg0: number, arg1: number, arg2: string, arg3: string, arg4: number): void;
    // private addConstantDynamicOrInvokeDynamicReference(arg0: number, arg1: string, arg2: string, arg3: number): Symbol;
    addConstantFieldref(arg0: string, arg1: string, arg2: string): Symbol;
    addConstantFloat(arg0: number): Symbol;
    addConstantInteger(arg0: number): Symbol;
    // private addConstantIntegerOrFloat(arg0: number, arg1: number): Symbol;
    // private addConstantIntegerOrFloat(arg0: number, arg1: number, arg2: number): void;
    addConstantInvokeDynamic(arg0: string, arg1: string, arg2: Handle, arg3: Object[]): Symbol;
    addConstantLong(arg0: number): Symbol;
    // private addConstantLongOrDouble(arg0: number, arg1: number, arg2: number): void;
    // private addConstantLongOrDouble(arg0: number, arg1: number): Symbol;
    // private addConstantMemberReference(arg0: number, arg1: number, arg2: string, arg3: string, arg4: string): void;
    // private addConstantMemberReference(arg0: number, arg1: string, arg2: string, arg3: string): SymbolTable$Entry;
    // private addConstantMethodHandle(arg0: number, arg1: number, arg2: string, arg3: string, arg4: string, arg5: boolean): void;
    addConstantMethodHandle(arg0: number, arg1: string, arg2: string, arg3: string, arg4: boolean): Symbol;
    addConstantMethodType(arg0: string): Symbol;
    addConstantMethodref(arg0: string, arg1: string, arg2: string, arg3: boolean): Symbol;
    addConstantModule(arg0: string): Symbol;
    // private addConstantNameAndType(arg0: number, arg1: string, arg2: string): void;
    addConstantNameAndType(arg0: string, arg1: string): number;
    addConstantPackage(arg0: string): Symbol;
    addConstantString(arg0: string): Symbol;
    // private addConstantUtf8(arg0: number, arg1: string): void;
    addConstantUtf8(arg0: string): number;
    // private addConstantUtf8Reference(arg0: number, arg1: number, arg2: string): void;
    // private addConstantUtf8Reference(arg0: number, arg1: string): Symbol;
    addForwardUninitializedType(arg0: string, arg1: Label): number;
    addMergedType(arg0: number, arg1: number): number;
    addType(arg0: string): number;
    // private addTypeInternal(arg0: SymbolTable$Entry): number;
    addUninitializedType(arg0: string, arg1: number): number;
    computeBootstrapMethodsSize(): number;
    // private copyBootstrapMethods(arg0: ClassReader, arg1: string[]): void;
    // private get(arg0: number): SymbolTable$Entry;
    getClassName(): string;
    getConstantPoolCount(): number;
    getConstantPoolLength(): number;
    getForwardUninitializedLabel(arg0: number): Label;
    getMajorVersion(): number;
    // private getOrAddLabelEntry(arg0: Label): SymbolTable$LabelEntry;
    getSource(): ClassReader;
    getType(arg0: number): Symbol;
    // private put(arg0: SymbolTable$Entry): SymbolTable$Entry;
    putBootstrapMethods(arg0: ByteVector): void;
    putConstantPool(arg0: ByteVector): void;
    setMajorVersionAndClassName(arg0: number, arg1: string): number;
}