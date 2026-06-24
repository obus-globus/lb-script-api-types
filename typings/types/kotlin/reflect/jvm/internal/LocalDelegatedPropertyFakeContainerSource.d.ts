import type { Object } from '../../../../java/lang/Object.d.ts'
import type { KDeclarationContainerImpl } from '../../../../kotlin/reflect/jvm/internal/KDeclarationContainerImpl.d.ts'
import type { SourceElement } from '../../../../kotlin/reflect/jvm/internal/impl/descriptors/SourceElement.d.ts'
import type { SourceFile } from '../../../../kotlin/reflect/jvm/internal/impl/descriptors/SourceFile.d.ts'
import type { DeserializedContainerAbiStability } from '../../../../kotlin/reflect/jvm/internal/impl/serialization/deserialization/descriptors/DeserializedContainerAbiStability.d.ts'
import type { DeserializedContainerSource } from '../../../../kotlin/reflect/jvm/internal/impl/serialization/deserialization/descriptors/DeserializedContainerSource.d.ts'
export class LocalDelegatedPropertyFakeContainerSource extends Object implements DeserializedContainerSource {
    static NO_SOURCE: SourceElement;
    constructor(container: KDeclarationContainerImpl)
    getContainingFile(): SourceFile;
    getPresentableString(): string;
}