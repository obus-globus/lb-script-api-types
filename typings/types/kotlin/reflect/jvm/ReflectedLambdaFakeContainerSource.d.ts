import type { Object } from '../../../java/lang/Object.d.ts'
import type { SourceElement } from '../../../kotlin/reflect/jvm/internal/impl/descriptors/SourceElement.d.ts'
import type { SourceFile } from '../../../kotlin/reflect/jvm/internal/impl/descriptors/SourceFile.d.ts'
import type { IncompatibleVersionErrorData } from '../../../kotlin/reflect/jvm/internal/impl/serialization/deserialization/IncompatibleVersionErrorData.d.ts'
import type { DeserializedContainerAbiStability } from '../../../kotlin/reflect/jvm/internal/impl/serialization/deserialization/descriptors/DeserializedContainerAbiStability.d.ts'
import type { DeserializedContainerSource } from '../../../kotlin/reflect/jvm/internal/impl/serialization/deserialization/descriptors/DeserializedContainerSource.d.ts'
import type { PreReleaseInfo } from '../../../kotlin/reflect/jvm/internal/impl/serialization/deserialization/descriptors/PreReleaseInfo.d.ts'
export class ReflectedLambdaFakeContainerSource extends Object implements DeserializedContainerSource {
    static INSTANCE: ReflectedLambdaFakeContainerSource;
    static NO_SOURCE: SourceElement;
    readonly abiStability: DeserializedContainerAbiStability;
    readonly incompatibility: IncompatibleVersionErrorData<Object> | null;
    readonly preReleaseInfo: PreReleaseInfo;
    readonly presentableString: string;
    getContainingFile(): SourceFile;
    getPresentableString(): string;
}