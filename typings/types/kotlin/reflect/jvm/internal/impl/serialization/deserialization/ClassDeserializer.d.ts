import type { Object } from '../../../../../../../java/lang/Object.d.ts'
import type { ClassDescriptor } from '../../../../../../../kotlin/reflect/jvm/internal/impl/descriptors/ClassDescriptor.d.ts'
import type { ClassId } from '../../../../../../../kotlin/reflect/jvm/internal/impl/name/ClassId.d.ts'
import type { ClassData } from '../../../../../../../kotlin/reflect/jvm/internal/impl/serialization/deserialization/ClassData.d.ts'
import type { ClassDeserializer$ClassKey } from '../../../../../../../kotlin/reflect/jvm/internal/impl/serialization/deserialization/ClassDeserializer$ClassKey.d.ts'
import type { ClassDeserializer$Companion } from '../../../../../../../kotlin/reflect/jvm/internal/impl/serialization/deserialization/ClassDeserializer$Companion.d.ts'
import type { DeserializationComponents } from '../../../../../../../kotlin/reflect/jvm/internal/impl/serialization/deserialization/DeserializationComponents.d.ts'
export class ClassDeserializer extends Object {
    static Companion: ClassDeserializer$Companion;
    constructor(arg0: DeserializationComponents)
    // private classes: (param0: ClassDeserializer$ClassKey) => ClassDescriptor;
    // private components: DeserializationComponents;
    // private createClass(arg0: ClassDeserializer$ClassKey): ClassDescriptor;
    deserializeClass(arg0: ClassId, arg1: ClassData): ClassDescriptor;
}