import type { Object } from '../../../../../../../java/lang/Object.d.ts'
import type { SourceElement } from '../../../../../../../kotlin/reflect/jvm/internal/impl/descriptors/SourceElement.d.ts'
import type { ProtoBuf$Class } from '../../../../../../../kotlin/reflect/jvm/internal/impl/metadata/ProtoBuf$Class.d.ts'
import type { BinaryVersion } from '../../../../../../../kotlin/reflect/jvm/internal/impl/metadata/deserialization/BinaryVersion.d.ts'
import type { NameResolver } from '../../../../../../../kotlin/reflect/jvm/internal/impl/metadata/deserialization/NameResolver.d.ts'
export class ClassData extends Object {
    constructor(arg0: NameResolver, arg1: ProtoBuf$Class, arg2: BinaryVersion, arg3: SourceElement)
    // private classProto: ProtoBuf$Class;
    // private metadataVersion: BinaryVersion;
    // private nameResolver: NameResolver;
    // private sourceElement: SourceElement;
    component1(): NameResolver;
    component2(): ProtoBuf$Class;
    component3(): BinaryVersion;
    component4(): SourceElement;
    equals(arg0: Object | null): boolean;
    hashCode(): number;
    toString(): string;
}