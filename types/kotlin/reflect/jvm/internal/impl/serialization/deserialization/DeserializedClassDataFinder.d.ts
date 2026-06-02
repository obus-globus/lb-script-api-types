import type { Object } from '../../../../../../../java/lang/Object.d.ts'
import type { PackageFragmentProvider } from '../../../../../../../kotlin/reflect/jvm/internal/impl/descriptors/PackageFragmentProvider.d.ts'
import type { ClassId } from '../../../../../../../kotlin/reflect/jvm/internal/impl/name/ClassId.d.ts'
import type { ClassData } from '../../../../../../../kotlin/reflect/jvm/internal/impl/serialization/deserialization/ClassData.d.ts'
import type { ClassDataFinder } from '../../../../../../../kotlin/reflect/jvm/internal/impl/serialization/deserialization/ClassDataFinder.d.ts'
export class DeserializedClassDataFinder extends Object implements ClassDataFinder {
    constructor(arg0: PackageFragmentProvider)
    // private packageFragmentProvider: PackageFragmentProvider;
    findClassData(arg0: ClassId): ClassData;
}