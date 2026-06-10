import type { Object } from '../../../../../../../java/lang/Object.d.ts'
import type { ProtoBuf$Class } from '../../../../../../../kotlin/reflect/jvm/internal/impl/metadata/ProtoBuf$Class.d.ts'
import type { ProtoBuf$Constructor } from '../../../../../../../kotlin/reflect/jvm/internal/impl/metadata/ProtoBuf$Constructor.d.ts'
import type { ProtoBuf$Function } from '../../../../../../../kotlin/reflect/jvm/internal/impl/metadata/ProtoBuf$Function.d.ts'
import type { ProtoBuf$Package } from '../../../../../../../kotlin/reflect/jvm/internal/impl/metadata/ProtoBuf$Package.d.ts'
import type { ProtoBuf$Property } from '../../../../../../../kotlin/reflect/jvm/internal/impl/metadata/ProtoBuf$Property.d.ts'
import type { ProtoBuf$Type } from '../../../../../../../kotlin/reflect/jvm/internal/impl/metadata/ProtoBuf$Type.d.ts'
import type { JvmProtoBuf$JvmMethodSignature } from '../../../../../../../kotlin/reflect/jvm/internal/impl/metadata/jvm/JvmProtoBuf$JvmMethodSignature.d.ts'
import type { JvmProtoBuf$JvmPropertySignature } from '../../../../../../../kotlin/reflect/jvm/internal/impl/metadata/jvm/JvmProtoBuf$JvmPropertySignature.d.ts'
import type { ExtensionRegistryLite } from '../../../../../../../kotlin/reflect/jvm/internal/impl/protobuf/ExtensionRegistryLite.d.ts'
import type { GeneratedMessageLite$GeneratedExtension } from '../../../../../../../kotlin/reflect/jvm/internal/impl/protobuf/GeneratedMessageLite$GeneratedExtension.d.ts'
export class JvmProtoBuf extends Object {
    static anonymousObjectOriginName: GeneratedMessageLite$GeneratedExtension<ProtoBuf$Class, number>;
    static classLocalVariable: GeneratedMessageLite$GeneratedExtension<ProtoBuf$Class, ProtoBuf$Property[]>;
    static classModuleName: GeneratedMessageLite$GeneratedExtension<ProtoBuf$Class, number>;
    static constructorSignature: GeneratedMessageLite$GeneratedExtension<ProtoBuf$Constructor, JvmProtoBuf$JvmMethodSignature>;
    static flags: GeneratedMessageLite$GeneratedExtension<ProtoBuf$Property, number>;
    static isRaw: GeneratedMessageLite$GeneratedExtension<ProtoBuf$Type, boolean>;
    static jvmClassFlags: GeneratedMessageLite$GeneratedExtension<ProtoBuf$Class, number>;
    static lambdaClassOriginName: GeneratedMessageLite$GeneratedExtension<ProtoBuf$Function, number>;
    static methodSignature: GeneratedMessageLite$GeneratedExtension<ProtoBuf$Function, JvmProtoBuf$JvmMethodSignature>;
    static packageLocalVariable: GeneratedMessageLite$GeneratedExtension<ProtoBuf$Package, ProtoBuf$Property[]>;
    static packageModuleName: GeneratedMessageLite$GeneratedExtension<ProtoBuf$Package, number>;
    static propertySignature: GeneratedMessageLite$GeneratedExtension<ProtoBuf$Property, JvmProtoBuf$JvmPropertySignature>;
    static registerAllExtensions(paramarg0: ExtensionRegistryLite): void;
}