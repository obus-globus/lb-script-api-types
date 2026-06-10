import type { Object } from '../../../../../../../java/lang/Object.d.ts'
import type { ProtoBuf$Annotation } from '../../../../../../../kotlin/reflect/jvm/internal/impl/metadata/ProtoBuf$Annotation.d.ts'
import type { ProtoBuf$Annotation$Argument$Value } from '../../../../../../../kotlin/reflect/jvm/internal/impl/metadata/ProtoBuf$Annotation$Argument$Value.d.ts'
import type { ProtoBuf$Class } from '../../../../../../../kotlin/reflect/jvm/internal/impl/metadata/ProtoBuf$Class.d.ts'
import type { ProtoBuf$Constructor } from '../../../../../../../kotlin/reflect/jvm/internal/impl/metadata/ProtoBuf$Constructor.d.ts'
import type { ProtoBuf$EnumEntry } from '../../../../../../../kotlin/reflect/jvm/internal/impl/metadata/ProtoBuf$EnumEntry.d.ts'
import type { ProtoBuf$Function } from '../../../../../../../kotlin/reflect/jvm/internal/impl/metadata/ProtoBuf$Function.d.ts'
import type { ProtoBuf$Package } from '../../../../../../../kotlin/reflect/jvm/internal/impl/metadata/ProtoBuf$Package.d.ts'
import type { ProtoBuf$Property } from '../../../../../../../kotlin/reflect/jvm/internal/impl/metadata/ProtoBuf$Property.d.ts'
import type { ProtoBuf$Type } from '../../../../../../../kotlin/reflect/jvm/internal/impl/metadata/ProtoBuf$Type.d.ts'
import type { ProtoBuf$TypeParameter } from '../../../../../../../kotlin/reflect/jvm/internal/impl/metadata/ProtoBuf$TypeParameter.d.ts'
import type { ProtoBuf$ValueParameter } from '../../../../../../../kotlin/reflect/jvm/internal/impl/metadata/ProtoBuf$ValueParameter.d.ts'
import type { ExtensionRegistryLite } from '../../../../../../../kotlin/reflect/jvm/internal/impl/protobuf/ExtensionRegistryLite.d.ts'
import type { GeneratedMessageLite$GeneratedExtension } from '../../../../../../../kotlin/reflect/jvm/internal/impl/protobuf/GeneratedMessageLite$GeneratedExtension.d.ts'
export class BuiltInsProtoBuf extends Object {
    static classAnnotation: GeneratedMessageLite$GeneratedExtension<ProtoBuf$Class, ProtoBuf$Annotation[]>;
    static compileTimeValue: GeneratedMessageLite$GeneratedExtension<ProtoBuf$Property, ProtoBuf$Annotation$Argument$Value>;
    static constructorAnnotation: GeneratedMessageLite$GeneratedExtension<ProtoBuf$Constructor, ProtoBuf$Annotation[]>;
    static enumEntryAnnotation: GeneratedMessageLite$GeneratedExtension<ProtoBuf$EnumEntry, ProtoBuf$Annotation[]>;
    static functionAnnotation: GeneratedMessageLite$GeneratedExtension<ProtoBuf$Function, ProtoBuf$Annotation[]>;
    static packageFqName: GeneratedMessageLite$GeneratedExtension<ProtoBuf$Package, number>;
    static parameterAnnotation: GeneratedMessageLite$GeneratedExtension<ProtoBuf$ValueParameter, ProtoBuf$Annotation[]>;
    static propertyAnnotation: GeneratedMessageLite$GeneratedExtension<ProtoBuf$Property, ProtoBuf$Annotation[]>;
    static propertyGetterAnnotation: GeneratedMessageLite$GeneratedExtension<ProtoBuf$Property, ProtoBuf$Annotation[]>;
    static propertySetterAnnotation: GeneratedMessageLite$GeneratedExtension<ProtoBuf$Property, ProtoBuf$Annotation[]>;
    static typeAnnotation: GeneratedMessageLite$GeneratedExtension<ProtoBuf$Type, ProtoBuf$Annotation[]>;
    static typeParameterAnnotation: GeneratedMessageLite$GeneratedExtension<ProtoBuf$TypeParameter, ProtoBuf$Annotation[]>;
    static registerAllExtensions(paramarg0: ExtensionRegistryLite): void;
}