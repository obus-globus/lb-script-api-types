import type { ByteVector } from '../../../../../../com/oracle/truffle/api/impl/asm/ByteVector.d.ts'
import type { ClassReader } from '../../../../../../com/oracle/truffle/api/impl/asm/ClassReader.d.ts'
import type { ClassWriter } from '../../../../../../com/oracle/truffle/api/impl/asm/ClassWriter.d.ts'
import type { Handle } from '../../../../../../com/oracle/truffle/api/impl/asm/Handle.d.ts'
import type { Label } from '../../../../../../com/oracle/truffle/api/impl/asm/Label.d.ts'
import type { Symbol } from '../../../../../../com/oracle/truffle/api/impl/asm/Symbol.d.ts'
import type { SymbolTable$Entry } from '../../../../../../com/oracle/truffle/api/impl/asm/SymbolTable$Entry.d.ts'
import type { SymbolTable$LabelEntry } from '../../../../../../com/oracle/truffle/api/impl/asm/SymbolTable$LabelEntry.d.ts'
import type { Object } from '../../../../../../java/lang/Object.d.ts'
export class SymbolTable extends Object {
    constructor(classWriter: ClassWriter)
    constructor(classWriter: ClassWriter, classReader: ClassReader)
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
    // private add(entry: SymbolTable$Entry): void;
    addBootstrapMethod(bootstrapMethodHandle: Handle, ...bootstrapMethodArguments: Object[]): Symbol;
    // private addBootstrapMethod(offset: number, length: number, hashCode: number): Symbol;
    addConstant(value: Object): Symbol;
    addConstantClass(value: string): Symbol;
    addConstantDouble(value: number): Symbol;
    addConstantDynamic(name: string, descriptor: string, bootstrapMethodHandle: Handle, ...bootstrapMethodArguments: Object[]): Symbol;
    // private addConstantDynamicOrInvokeDynamicReference(tag: number, index: number, name: string, descriptor: string, bootstrapMethodIndex: number): void;
    // private addConstantDynamicOrInvokeDynamicReference(tag: number, name: string, descriptor: string, bootstrapMethodIndex: number): Symbol;
    addConstantFieldref(owner: string, name: string, descriptor: string): Symbol;
    addConstantFloat(value: number): Symbol;
    addConstantInteger(value: number): Symbol;
    // private addConstantIntegerOrFloat(tag: number, value: number): Symbol;
    // private addConstantIntegerOrFloat(index: number, tag: number, value: number): void;
    addConstantInvokeDynamic(name: string, descriptor: string, bootstrapMethodHandle: Handle, ...bootstrapMethodArguments: Object[]): Symbol;
    addConstantLong(value: number): Symbol;
    // private addConstantLongOrDouble(index: number, tag: number, value: number): void;
    // private addConstantLongOrDouble(tag: number, value: number): Symbol;
    // private addConstantMemberReference(index: number, tag: number, owner: string, name: string, descriptor: string): void;
    // private addConstantMemberReference(tag: number, owner: string, name: string, descriptor: string): SymbolTable$Entry;
    // private addConstantMethodHandle(index: number, referenceKind: number, owner: string, name: string, descriptor: string, isInterface: boolean): void;
    addConstantMethodHandle(referenceKind: number, owner: string, name: string, descriptor: string, isInterface: boolean): Symbol;
    addConstantMethodType(methodDescriptor: string): Symbol;
    addConstantMethodref(owner: string, name: string, descriptor: string, isInterface: boolean): Symbol;
    addConstantModule(moduleName: string): Symbol;
    // private addConstantNameAndType(index: number, name: string, descriptor: string): void;
    addConstantNameAndType(name: string, descriptor: string): number;
    addConstantPackage(packageName: string): Symbol;
    addConstantString(value: string): Symbol;
    // private addConstantUtf8(index: number, value: string): void;
    addConstantUtf8(value: string): number;
    // private addConstantUtf8Reference(index: number, tag: number, value: string): void;
    // private addConstantUtf8Reference(tag: number, value: string): Symbol;
    addForwardUninitializedType(value: string, label: Label): number;
    addMergedType(typeTableIndex1: number, typeTableIndex2: number): number;
    addType(value: string): number;
    // private addTypeInternal(entry: SymbolTable$Entry): number;
    addUninitializedType(value: string, bytecodeOffset: number): number;
    computeBootstrapMethodsSize(): number;
    // private copyBootstrapMethods(classReader: ClassReader, charBuffer: string[]): void;
    // private get(hashCode: number): SymbolTable$Entry;
    getClassName(): string;
    getConstantPoolCount(): number;
    getConstantPoolLength(): number;
    getForwardUninitializedLabel(typeIndex: number): Label;
    getMajorVersion(): number;
    // private getOrAddLabelEntry(label: Label): SymbolTable$LabelEntry;
    getSource(): ClassReader;
    getType(typeIndex: number): Symbol;
    // private put(entry: SymbolTable$Entry): SymbolTable$Entry;
    putBootstrapMethods(output: ByteVector): void;
    putConstantPool(output: ByteVector): void;
    setMajorVersionAndClassName(majorVersion: number, className: string): number;
}