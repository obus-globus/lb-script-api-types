import type { Object } from '../../../../../../../../java/lang/Object.d.ts'
import type { InputTag } from '../../../../../../../../net/fabricmc/loader/impl/lib/tinyremapper/InputTag.d.ts'
import type { TinyRemapper$ApplyVisitorProvider } from '../../../../../../../../net/fabricmc/loader/impl/lib/tinyremapper/TinyRemapper$ApplyVisitorProvider.d.ts'
import type { TrClass } from '../../../../../../../../net/fabricmc/loader/impl/lib/tinyremapper/api/TrClass.d.ts'
import type { MixinExtension } from '../../../../../../../../net/fabricmc/loader/impl/lib/tinyremapper/extension/mixin/MixinExtension.d.ts'
import type { ClassVisitor } from '../../../../../../../../org/objectweb/asm/ClassVisitor.d.ts'
export class MixinExtension$PreApplyVisitorProvider extends Object implements TinyRemapper$ApplyVisitorProvider {
    private constructor(null_: MixinExtension)
    insertApplyVisitor(arg0: TrClass, arg1: ClassVisitor, arg2: InputTag[]): ClassVisitor;
    insertApplyVisitor(arg0: TrClass, arg1: ClassVisitor): ClassVisitor;
}