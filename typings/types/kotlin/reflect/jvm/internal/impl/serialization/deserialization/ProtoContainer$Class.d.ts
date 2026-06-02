import type { SourceElement } from '../../../../../../../kotlin/reflect/jvm/internal/impl/descriptors/SourceElement.d.ts'
import type { ProtoBuf$Class } from '../../../../../../../kotlin/reflect/jvm/internal/impl/metadata/ProtoBuf$Class.d.ts'
import type { ProtoBuf$Class$Kind } from '../../../../../../../kotlin/reflect/jvm/internal/impl/metadata/ProtoBuf$Class$Kind.d.ts'
import type { NameResolver } from '../../../../../../../kotlin/reflect/jvm/internal/impl/metadata/deserialization/NameResolver.d.ts'
import type { TypeTable } from '../../../../../../../kotlin/reflect/jvm/internal/impl/metadata/deserialization/TypeTable.d.ts'
import type { ClassId } from '../../../../../../../kotlin/reflect/jvm/internal/impl/name/ClassId.d.ts'
import type { FqName } from '../../../../../../../kotlin/reflect/jvm/internal/impl/name/FqName.d.ts'
import type { ProtoContainer } from '../../../../../../../kotlin/reflect/jvm/internal/impl/serialization/deserialization/ProtoContainer.d.ts'
export class ProtoContainer$Class extends ProtoContainer {
    constructor(arg0: ProtoBuf$Class, arg1: NameResolver, arg2: TypeTable, arg3: SourceElement, arg4: ProtoContainer$Class)
    readonly classId: ClassId;
    readonly classProto: ProtoBuf$Class;
    // private isData: boolean;
    // private isInner: boolean;
    readonly kind: ProtoBuf$Class$Kind;
    readonly outerClass: ProtoContainer$Class;
    debugFqName(): FqName;
    getClassId(): ClassId;
    getClassProto(): ProtoBuf$Class;
    getKind(): ProtoBuf$Class$Kind;
    getOuterClass(): ProtoContainer$Class;
    isInner(): boolean;
}