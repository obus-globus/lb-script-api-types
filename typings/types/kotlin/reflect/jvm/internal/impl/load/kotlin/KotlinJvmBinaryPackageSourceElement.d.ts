import type { Object } from '../../../../../../../java/lang/Object.d.ts'
import type { SourceElement } from '../../../../../../../kotlin/reflect/jvm/internal/impl/descriptors/SourceElement.d.ts'
import type { SourceFile } from '../../../../../../../kotlin/reflect/jvm/internal/impl/descriptors/SourceFile.d.ts'
import type { LazyJavaPackageFragment } from '../../../../../../../kotlin/reflect/jvm/internal/impl/load/java/lazy/descriptors/LazyJavaPackageFragment.d.ts'
export class KotlinJvmBinaryPackageSourceElement extends Object implements SourceElement {
    static NO_SOURCE: SourceElement;
    constructor(arg0: LazyJavaPackageFragment)
    // private packageFragment: LazyJavaPackageFragment;
    getContainingFile(): SourceFile;
    toString(): string;
}