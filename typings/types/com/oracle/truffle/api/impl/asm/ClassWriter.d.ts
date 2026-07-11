import type { AnnotationVisitor } from '../../../../../../com/oracle/truffle/api/impl/asm/AnnotationVisitor.d.ts'
import type { AnnotationWriter } from '../../../../../../com/oracle/truffle/api/impl/asm/AnnotationWriter.d.ts'
import type { Attribute } from '../../../../../../com/oracle/truffle/api/impl/asm/Attribute.d.ts'
import type { ByteVector } from '../../../../../../com/oracle/truffle/api/impl/asm/ByteVector.d.ts'
import type { ClassReader } from '../../../../../../com/oracle/truffle/api/impl/asm/ClassReader.d.ts'
import type { ClassVisitor } from '../../../../../../com/oracle/truffle/api/impl/asm/ClassVisitor.d.ts'
import type { FieldVisitor } from '../../../../../../com/oracle/truffle/api/impl/asm/FieldVisitor.d.ts'
import type { FieldWriter } from '../../../../../../com/oracle/truffle/api/impl/asm/FieldWriter.d.ts'
import type { Handle } from '../../../../../../com/oracle/truffle/api/impl/asm/Handle.d.ts'
import type { MethodVisitor } from '../../../../../../com/oracle/truffle/api/impl/asm/MethodVisitor.d.ts'
import type { MethodWriter } from '../../../../../../com/oracle/truffle/api/impl/asm/MethodWriter.d.ts'
import type { ModuleVisitor } from '../../../../../../com/oracle/truffle/api/impl/asm/ModuleVisitor.d.ts'
import type { ModuleWriter } from '../../../../../../com/oracle/truffle/api/impl/asm/ModuleWriter.d.ts'
import type { RecordComponentVisitor } from '../../../../../../com/oracle/truffle/api/impl/asm/RecordComponentVisitor.d.ts'
import type { RecordComponentWriter } from '../../../../../../com/oracle/truffle/api/impl/asm/RecordComponentWriter.d.ts'
import type { SymbolTable } from '../../../../../../com/oracle/truffle/api/impl/asm/SymbolTable.d.ts'
import type { TypePath } from '../../../../../../com/oracle/truffle/api/impl/asm/TypePath.d.ts'
import type { ClassLoader } from '../../../../../../java/lang/ClassLoader.d.ts'
import type { Object } from '../../../../../../java/lang/Object.d.ts'
export class ClassWriter extends ClassVisitor {
    static COMPUTE_FRAMES: number;
    static COMPUTE_MAXS: number;
    constructor(classReader: ClassReader, flags: number)
    constructor(flags: number)
    // private accessFlags: number;
    // private compute: number;
    // private debugExtension: ByteVector;
    // private enclosingClassIndex: number;
    // private enclosingMethodIndex: number;
    // private firstAttribute: Attribute;
    // private firstField: FieldWriter;
    // private firstMethod: MethodWriter;
    // private firstRecordComponent: RecordComponentWriter;
    readonly flags: number;
    // private innerClasses: ByteVector;
    // private interfaceCount: number;
    // private interfaces: number[];
    // private lastField: FieldWriter;
    // private lastMethod: MethodWriter;
    // private lastRecordComponent: RecordComponentWriter;
    // private lastRuntimeInvisibleAnnotation: AnnotationWriter;
    // private lastRuntimeInvisibleTypeAnnotation: AnnotationWriter;
    // private lastRuntimeVisibleAnnotation: AnnotationWriter;
    // private lastRuntimeVisibleTypeAnnotation: AnnotationWriter;
    // private moduleWriter: ModuleWriter;
    // private nestHostClassIndex: number;
    // private nestMemberClasses: ByteVector;
    // private numberOfInnerClasses: number;
    // private numberOfNestMemberClasses: number;
    // private numberOfPermittedSubclasses: number;
    // private permittedSubclasses: ByteVector;
    // private signatureIndex: number;
    // private sourceFileIndex: number;
    // private superClass: number;
    // private symbolTable: SymbolTable;
    // private thisClass: number;
    // private version: number;
    // private getAttributePrototypes(): Attribute[];
    getClassLoader(): ClassLoader;
    getCommonSuperClass(type1: string, type2: string): string;
    hasFlags(flags: number): boolean;
    newClass(value: string): number;
    newConst(value: Object): number;
    newConstantDynamic(name: string, descriptor: string, bootstrapMethodHandle: Handle, ...bootstrapMethodArguments: Object[]): number;
    newField(owner: string, name: string, descriptor: string): number;
    newHandle(tag: number, owner: string, name: string, descriptor: string): number;
    newHandle(tag: number, owner: string, name: string, descriptor: string, isInterface: boolean): number;
    newInvokeDynamic(name: string, descriptor: string, bootstrapMethodHandle: Handle, ...bootstrapMethodArguments: Object[]): number;
    newMethod(owner: string, name: string, descriptor: string, isInterface: boolean): number;
    newMethodType(methodDescriptor: string): number;
    newModule(moduleName: string): number;
    newNameType(name: string, descriptor: string): number;
    newPackage(packageName: string): number;
    newUTF8(value: string): number;
    // private replaceAsmInstructions(classFile: number[], hasFrames: boolean): number[];
    setFlags(flags: number): void;
    toByteArray(): number[];
    visit(version: number, access: number, name: string, signature: string, superName: string, interfaces: string[]): void;
    visitAnnotation(descriptor: string, visible: boolean): AnnotationVisitor;
    visitAttribute(attribute: Attribute): void;
    visitEnd(): void;
    visitField(access: number, name: string, descriptor: string, signature: string, value: Object): FieldVisitor;
    visitInnerClass(name: string, outerName: string, innerName: string, access: number): void;
    visitMethod(access: number, name: string, descriptor: string, signature: string, exceptions: string[]): MethodVisitor;
    visitModule(name: string, access: number, version: string): ModuleVisitor;
    visitNestHost(nestHost: string): void;
    visitNestMember(nestMember: string): void;
    visitOuterClass(owner: string, name: string, descriptor: string): void;
    visitPermittedSubclass(permittedSubclass: string): void;
    visitRecordComponent(name: string, descriptor: string, signature: string): RecordComponentVisitor;
    visitSource(file: string, debug: string): void;
    visitTypeAnnotation(typeRef: number, typePath: TypePath, descriptor: string, visible: boolean): AnnotationVisitor;
}