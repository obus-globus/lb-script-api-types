import type { Object } from '../../../../../../../../java/lang/Object.d.ts'
import type { SourceElement } from '../../../../../../../../kotlin/reflect/jvm/internal/impl/descriptors/SourceElement.d.ts'
import type { SourceFile } from '../../../../../../../../kotlin/reflect/jvm/internal/impl/descriptors/SourceFile.d.ts'
export interface DeserializedContainerSource extends Object, SourceElement{
    getContainingFile(): SourceFile;
    getPresentableString(): string;
}