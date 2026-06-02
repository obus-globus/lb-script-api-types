import type { ClassVisitor } from '../../../../../org/objectweb/asm/ClassVisitor.d.ts'
import type { InnerClassGenerator$InnerClassInfo } from '../../../../../org/spongepowered/asm/mixin/transformer/InnerClassGenerator$InnerClassInfo.d.ts'
export class InnerClassGenerator$InnerClassAdapter extends ClassVisitor {
    constructor(arg0: ClassVisitor, arg1: InnerClassGenerator$InnerClassInfo)
    // private info: InnerClassGenerator$InnerClassInfo;
    visitNestHost(arg0: string): void;
    visitSource(arg0: string, arg1: string): void;
}