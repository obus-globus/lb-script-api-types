import type { Object } from '../../../../../../java/lang/Object.d.ts'
import type { InputTag } from '../../../../../../net/fabricmc/loader/impl/lib/tinyremapper/InputTag.d.ts'
import type { TrClass } from '../../../../../../net/fabricmc/loader/impl/lib/tinyremapper/api/TrClass.d.ts'
import type { ClassVisitor } from '../../../../../../org/objectweb/asm/ClassVisitor.d.ts'
export interface TinyRemapper$ApplyVisitorProvider extends Object{
    insertApplyVisitor(arg0: TrClass, arg1: ClassVisitor): ClassVisitor;
    insertApplyVisitor(arg0: TrClass, arg1: ClassVisitor, arg2: InputTag[]): ClassVisitor;
}