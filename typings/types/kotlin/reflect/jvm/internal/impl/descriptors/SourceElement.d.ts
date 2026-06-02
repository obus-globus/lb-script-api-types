import type { Object } from '../../../../../../java/lang/Object.d.ts'
import type { SourceFile } from '../../../../../../kotlin/reflect/jvm/internal/impl/descriptors/SourceFile.d.ts'
export interface SourceElement extends Object{
    getContainingFile(): SourceFile;
}