import type { ClassLoader } from '../../../java/lang/ClassLoader.d.ts'
import type { Object } from '../../../java/lang/Object.d.ts'
import type { AnnotationVisitor } from '../../../org/objectweb/asm/AnnotationVisitor.d.ts'
import type { AnnotationWriter } from '../../../org/objectweb/asm/AnnotationWriter.d.ts'
import type { Attribute } from '../../../org/objectweb/asm/Attribute.d.ts'
import type { ByteVector } from '../../../org/objectweb/asm/ByteVector.d.ts'
import type { ClassReader } from '../../../org/objectweb/asm/ClassReader.d.ts'
import type { ClassVisitor } from '../../../org/objectweb/asm/ClassVisitor.d.ts'
import type { FieldVisitor } from '../../../org/objectweb/asm/FieldVisitor.d.ts'
import type { FieldWriter } from '../../../org/objectweb/asm/FieldWriter.d.ts'
import type { Handle } from '../../../org/objectweb/asm/Handle.d.ts'
import type { MethodVisitor } from '../../../org/objectweb/asm/MethodVisitor.d.ts'
import type { MethodWriter } from '../../../org/objectweb/asm/MethodWriter.d.ts'
import type { ModuleVisitor } from '../../../org/objectweb/asm/ModuleVisitor.d.ts'
import type { ModuleWriter } from '../../../org/objectweb/asm/ModuleWriter.d.ts'
import type { RecordComponentVisitor } from '../../../org/objectweb/asm/RecordComponentVisitor.d.ts'
import type { RecordComponentWriter } from '../../../org/objectweb/asm/RecordComponentWriter.d.ts'
import type { SymbolTable } from '../../../org/objectweb/asm/SymbolTable.d.ts'
import type { TypePath } from '../../../org/objectweb/asm/TypePath.d.ts'
export class ClassWriter extends ClassVisitor {
    static COMPUTE_FRAMES: number;
    static COMPUTE_MAXS: number;
    constructor(arg0: number)
    constructor(arg0: ClassReader, arg1: number)
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
    getCommonSuperClass(arg0: string, arg1: string): string;
    hasFlags(arg0: number): boolean;
    newClass(arg0: string): number;
    newConst(arg0: Object): number;
    newConstantDynamic(arg0: string, arg1: string, arg2: Handle, arg3: Object[]): number;
    newField(arg0: string, arg1: string, arg2: string): number;
    newHandle(arg0: number, arg1: string, arg2: string, arg3: string): number;
    newHandle(arg0: number, arg1: string, arg2: string, arg3: string, arg4: boolean): number;
    newInvokeDynamic(arg0: string, arg1: string, arg2: Handle, arg3: Object[]): number;
    newMethod(arg0: string, arg1: string, arg2: string, arg3: boolean): number;
    newMethodType(arg0: string): number;
    newModule(arg0: string): number;
    newNameType(arg0: string, arg1: string): number;
    newPackage(arg0: string): number;
    newUTF8(arg0: string): number;
    // private replaceAsmInstructions(arg0: number[], arg1: boolean): number[];
    setFlags(arg0: number): void;
    toByteArray(): number[];
    visit(arg0: number, arg1: number, arg2: string, arg3: string, arg4: string, arg5: string[]): void;
    visitAnnotation(arg0: string, arg1: boolean): AnnotationVisitor;
    visitAttribute(arg0: Attribute): void;
    visitEnd(): void;
    visitField(arg0: number, arg1: string, arg2: string, arg3: string, arg4: Object): FieldVisitor;
    visitInnerClass(arg0: string, arg1: string, arg2: string, arg3: number): void;
    visitMethod(arg0: number, arg1: string, arg2: string, arg3: string, arg4: string[]): MethodVisitor;
    visitModule(arg0: string, arg1: number, arg2: string): ModuleVisitor;
    visitNestHost(arg0: string): void;
    visitNestMember(arg0: string): void;
    visitOuterClass(arg0: string, arg1: string, arg2: string): void;
    visitPermittedSubclass(arg0: string): void;
    visitRecordComponent(arg0: string, arg1: string, arg2: string): RecordComponentVisitor;
    visitSource(arg0: string, arg1: string): void;
    visitTypeAnnotation(arg0: number, arg1: TypePath, arg2: string, arg3: boolean): AnnotationVisitor;
}