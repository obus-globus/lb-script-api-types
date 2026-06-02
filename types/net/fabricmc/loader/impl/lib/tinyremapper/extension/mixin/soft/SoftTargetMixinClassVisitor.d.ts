import type { CommonData } from '../../../../../../../../../net/fabricmc/loader/impl/lib/tinyremapper/extension/mixin/common/data/CommonData.d.ts'
import type { MxClass } from '../../../../../../../../../net/fabricmc/loader/impl/lib/tinyremapper/extension/mixin/common/data/MxClass.d.ts'
import type { AnnotationVisitor } from '../../../../../../../../../org/objectweb/asm/AnnotationVisitor.d.ts'
import type { ClassVisitor } from '../../../../../../../../../org/objectweb/asm/ClassVisitor.d.ts'
import type { MethodVisitor } from '../../../../../../../../../org/objectweb/asm/MethodVisitor.d.ts'
export class SoftTargetMixinClassVisitor extends ClassVisitor {
    constructor(arg0: CommonData, arg1: ClassVisitor)
    // private _class: MxClass;
    // private data: CommonData;
    // private targets: string[];
    visit(arg0: number, arg1: number, arg2: string, arg3: string, arg4: string, arg5: string[]): void;
    visitAnnotation(arg0: string, arg1: boolean): AnnotationVisitor;
    visitMethod(arg0: number, arg1: string, arg2: string, arg3: string, arg4: string[]): MethodVisitor;
}