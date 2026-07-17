import type { JavaMap } from '../../../../../../../JavaMap.d.ts'
import type { Object } from '../../../../../../../java/lang/Object.d.ts'
import type { SourceElement } from '../../../../../../../kotlin/reflect/jvm/internal/impl/descriptors/SourceElement.d.ts'
import type { ProtoBuf$Class } from '../../../../../../../kotlin/reflect/jvm/internal/impl/metadata/ProtoBuf$Class.d.ts'
import type { ProtoBuf$PackageFragment } from '../../../../../../../kotlin/reflect/jvm/internal/impl/metadata/ProtoBuf$PackageFragment.d.ts'
import type { BinaryVersion } from '../../../../../../../kotlin/reflect/jvm/internal/impl/metadata/deserialization/BinaryVersion.d.ts'
import type { NameResolver } from '../../../../../../../kotlin/reflect/jvm/internal/impl/metadata/deserialization/NameResolver.d.ts'
import type { ClassId } from '../../../../../../../kotlin/reflect/jvm/internal/impl/name/ClassId.d.ts'
import type { ClassData } from '../../../../../../../kotlin/reflect/jvm/internal/impl/serialization/deserialization/ClassData.d.ts'
import type { ClassDataFinder } from '../../../../../../../kotlin/reflect/jvm/internal/impl/serialization/deserialization/ClassDataFinder.d.ts'
export class ProtoBasedClassDataFinder extends Object implements ClassDataFinder {
    constructor(arg0: ProtoBuf$PackageFragment, arg1: NameResolver, arg2: BinaryVersion, arg3: (param0: ClassId) => SourceElement)
    // private classIdToProto: JavaMap<ClassId, ProtoBuf$Class>;
    // private classSource: (param0: ClassId) => SourceElement;
    // private metadataVersion: BinaryVersion;
    // private nameResolver: NameResolver;
    findClassData(arg0: ClassId): ClassData;
    getAllClassIds(): ClassId[];
}