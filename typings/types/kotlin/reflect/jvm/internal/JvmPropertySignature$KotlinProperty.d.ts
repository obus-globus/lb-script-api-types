import type { JvmPropertySignature } from '../../../../kotlin/reflect/jvm/internal/JvmPropertySignature.d.ts'
import type { PropertyDescriptor } from '../../../../kotlin/reflect/jvm/internal/impl/descriptors/PropertyDescriptor.d.ts'
import type { ProtoBuf$Property } from '../../../../kotlin/reflect/jvm/internal/impl/metadata/ProtoBuf$Property.d.ts'
import type { NameResolver } from '../../../../kotlin/reflect/jvm/internal/impl/metadata/deserialization/NameResolver.d.ts'
import type { TypeTable } from '../../../../kotlin/reflect/jvm/internal/impl/metadata/deserialization/TypeTable.d.ts'
import type { JvmProtoBuf$JvmPropertySignature } from '../../../../kotlin/reflect/jvm/internal/impl/metadata/jvm/JvmProtoBuf$JvmPropertySignature.d.ts'
export class JvmPropertySignature$KotlinProperty extends JvmPropertySignature {
    constructor(descriptor: PropertyDescriptor, proto: ProtoBuf$Property, signature: JvmProtoBuf$JvmPropertySignature, nameResolver: NameResolver, typeTable: TypeTable)
    asString(): string;
    // private getManglingSuffix(): string;
}