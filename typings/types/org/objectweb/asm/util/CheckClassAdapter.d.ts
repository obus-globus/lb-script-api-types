import type { JavaMap } from '../../../../JavaMap.d.ts'
import type { PrintWriter } from '../../../../java/io/PrintWriter.d.ts'
import type { ClassLoader } from '../../../../java/lang/ClassLoader.d.ts'
import type { Object } from '../../../../java/lang/Object.d.ts'
import type { AnnotationVisitor } from '../../../../org/objectweb/asm/AnnotationVisitor.d.ts'
import type { Attribute } from '../../../../org/objectweb/asm/Attribute.d.ts'
import type { ClassReader } from '../../../../org/objectweb/asm/ClassReader.d.ts'
import type { ClassVisitor } from '../../../../org/objectweb/asm/ClassVisitor.d.ts'
import type { FieldVisitor } from '../../../../org/objectweb/asm/FieldVisitor.d.ts'
import type { Label } from '../../../../org/objectweb/asm/Label.d.ts'
import type { MethodVisitor } from '../../../../org/objectweb/asm/MethodVisitor.d.ts'
import type { ModuleVisitor } from '../../../../org/objectweb/asm/ModuleVisitor.d.ts'
import type { RecordComponentVisitor } from '../../../../org/objectweb/asm/RecordComponentVisitor.d.ts'
import type { TypePath } from '../../../../org/objectweb/asm/TypePath.d.ts'
export class CheckClassAdapter extends ClassVisitor {
    static checkClassSignature(paramarg0: string): void;
    static checkFieldSignature(paramarg0: string): void;
    static checkMethodSignature(paramarg0: string): void;
    static main(paramarg0: string[]): void;
    static verify(paramarg0: ClassReader, paramarg1: boolean, paramarg2: PrintWriter): void;
    static verify(paramarg0: ClassReader, paramarg1: ClassLoader, paramarg2: boolean, paramarg3: PrintWriter): void;
    constructor(arg0: number, arg1: ClassVisitor, arg2: boolean)
    constructor(arg0: ClassVisitor)
    constructor(arg0: ClassVisitor, arg1: boolean)
    // private checkDataFlow: boolean;
    // private labelInsnIndices: JavaMap<Label, number>;
    // private nestMemberPackageName: string;
    // private version: number;
    // private visitCalled: boolean;
    // private visitEndCalled: boolean;
    // private visitModuleCalled: boolean;
    // private visitNestHostCalled: boolean;
    // private visitOuterClassCalled: boolean;
    // private visitSourceCalled: boolean;
    // private checkState(): void;
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