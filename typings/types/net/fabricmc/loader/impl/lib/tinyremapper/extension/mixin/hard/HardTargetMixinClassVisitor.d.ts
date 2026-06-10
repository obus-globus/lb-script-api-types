import type { Consumer } from '../../../../../../../../../java/util/function/Consumer.d.ts'
import type { Object } from '../../../../../../../../../java/lang/Object.d.ts'
import type { CommonData } from '../../../../../../../../../net/fabricmc/loader/impl/lib/tinyremapper/extension/mixin/common/data/CommonData.d.ts'
import type { MxClass } from '../../../../../../../../../net/fabricmc/loader/impl/lib/tinyremapper/extension/mixin/common/data/MxClass.d.ts'
import type { SoftInterface } from '../../../../../../../../../net/fabricmc/loader/impl/lib/tinyremapper/extension/mixin/hard/data/SoftInterface.d.ts'
import type { AnnotationVisitor } from '../../../../../../../../../org/objectweb/asm/AnnotationVisitor.d.ts'
import type { ClassVisitor } from '../../../../../../../../../org/objectweb/asm/ClassVisitor.d.ts'
import type { FieldVisitor } from '../../../../../../../../../org/objectweb/asm/FieldVisitor.d.ts'
import type { MethodVisitor } from '../../../../../../../../../org/objectweb/asm/MethodVisitor.d.ts'
export class HardTargetMixinClassVisitor extends ClassVisitor {
    constructor(arg0: (param0: CommonData) => void[], arg1: ClassVisitor)
    // private _class: MxClass;
    // private interfaces: SoftInterface[];
    // private targets: string[];
    // private tasks: (param0: CommonData) => void[];
    visit(arg0: number, arg1: number, arg2: string, arg3: string, arg4: string, arg5: string[]): void;
    visitAnnotation(arg0: string, arg1: boolean): AnnotationVisitor;
    visitField(arg0: number, arg1: string, arg2: string, arg3: string, arg4: Object): FieldVisitor;
    visitMethod(arg0: number, arg1: string, arg2: string, arg3: string, arg4: string[]): MethodVisitor;
}