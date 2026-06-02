import type { Object } from '../../../../../../../java/lang/Object.d.ts'
import type { DeserializedDescriptorResolver } from '../../../../../../../kotlin/reflect/jvm/internal/impl/load/kotlin/DeserializedDescriptorResolver.d.ts'
import type { KotlinClassFinder } from '../../../../../../../kotlin/reflect/jvm/internal/impl/load/kotlin/KotlinClassFinder.d.ts'
import type { ClassId } from '../../../../../../../kotlin/reflect/jvm/internal/impl/name/ClassId.d.ts'
import type { ClassData } from '../../../../../../../kotlin/reflect/jvm/internal/impl/serialization/deserialization/ClassData.d.ts'
import type { ClassDataFinder } from '../../../../../../../kotlin/reflect/jvm/internal/impl/serialization/deserialization/ClassDataFinder.d.ts'
export class JavaClassDataFinder extends Object implements ClassDataFinder {
    constructor(arg0: KotlinClassFinder, arg1: DeserializedDescriptorResolver)
    // private deserializedDescriptorResolver: DeserializedDescriptorResolver;
    // private kotlinClassFinder: KotlinClassFinder;
    findClassData(arg0: ClassId): ClassData;
}