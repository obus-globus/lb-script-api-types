import type { Object } from '../../../../../../../../java/lang/Object.d.ts'
import type { SourceElement } from '../../../../../../../../kotlin/reflect/jvm/internal/impl/descriptors/SourceElement.d.ts'
import type { SourceFile } from '../../../../../../../../kotlin/reflect/jvm/internal/impl/descriptors/SourceFile.d.ts'
import type { ReflectJavaElement } from '../../../../../../../../kotlin/reflect/jvm/internal/impl/descriptors/runtime/structure/ReflectJavaElement.d.ts'
import type { JavaSourceElement } from '../../../../../../../../kotlin/reflect/jvm/internal/impl/load/java/sources/JavaSourceElement.d.ts'
export class RuntimeSourceElementFactory$RuntimeSourceElement extends Object implements JavaSourceElement {
    static NO_SOURCE: SourceElement;
    constructor(arg0: ReflectJavaElement)
    readonly javaElement: ReflectJavaElement;
    getContainingFile(): SourceFile;
    getJavaElement(): ReflectJavaElement;
    toString(): string;
}