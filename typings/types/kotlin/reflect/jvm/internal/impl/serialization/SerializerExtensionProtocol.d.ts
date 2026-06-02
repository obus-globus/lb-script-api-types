import type { Object } from '../../../../../../java/lang/Object.d.ts'
import type { ProtoBuf$Annotation } from '../../../../../../kotlin/reflect/jvm/internal/impl/metadata/ProtoBuf$Annotation.d.ts'
import type { ProtoBuf$Annotation$Argument$Value } from '../../../../../../kotlin/reflect/jvm/internal/impl/metadata/ProtoBuf$Annotation$Argument$Value.d.ts'
import type { ProtoBuf$Class } from '../../../../../../kotlin/reflect/jvm/internal/impl/metadata/ProtoBuf$Class.d.ts'
import type { ProtoBuf$Constructor } from '../../../../../../kotlin/reflect/jvm/internal/impl/metadata/ProtoBuf$Constructor.d.ts'
import type { ProtoBuf$EnumEntry } from '../../../../../../kotlin/reflect/jvm/internal/impl/metadata/ProtoBuf$EnumEntry.d.ts'
import type { ProtoBuf$Function } from '../../../../../../kotlin/reflect/jvm/internal/impl/metadata/ProtoBuf$Function.d.ts'
import type { ProtoBuf$Package } from '../../../../../../kotlin/reflect/jvm/internal/impl/metadata/ProtoBuf$Package.d.ts'
import type { ProtoBuf$Property } from '../../../../../../kotlin/reflect/jvm/internal/impl/metadata/ProtoBuf$Property.d.ts'
import type { ProtoBuf$Type } from '../../../../../../kotlin/reflect/jvm/internal/impl/metadata/ProtoBuf$Type.d.ts'
import type { ProtoBuf$TypeParameter } from '../../../../../../kotlin/reflect/jvm/internal/impl/metadata/ProtoBuf$TypeParameter.d.ts'
import type { ProtoBuf$ValueParameter } from '../../../../../../kotlin/reflect/jvm/internal/impl/metadata/ProtoBuf$ValueParameter.d.ts'
import type { ExtensionRegistryLite } from '../../../../../../kotlin/reflect/jvm/internal/impl/protobuf/ExtensionRegistryLite.d.ts'
import type { GeneratedMessageLite$GeneratedExtension } from '../../../../../../kotlin/reflect/jvm/internal/impl/protobuf/GeneratedMessageLite$GeneratedExtension.d.ts'
export class SerializerExtensionProtocol extends Object {
    constructor(arg0: ExtensionRegistryLite, arg1: GeneratedMessageLite$GeneratedExtension<ProtoBuf$Package, number>, arg2: GeneratedMessageLite$GeneratedExtension<ProtoBuf$Constructor, ProtoBuf$Annotation[]>, arg3: GeneratedMessageLite$GeneratedExtension<ProtoBuf$Class, ProtoBuf$Annotation[]>, arg4: GeneratedMessageLite$GeneratedExtension<ProtoBuf$Function, ProtoBuf$Annotation[]>, arg5: GeneratedMessageLite$GeneratedExtension<ProtoBuf$Function, ProtoBuf$Annotation[]>, arg6: GeneratedMessageLite$GeneratedExtension<ProtoBuf$Property, ProtoBuf$Annotation[]>, arg7: GeneratedMessageLite$GeneratedExtension<ProtoBuf$Property, ProtoBuf$Annotation[]>, arg8: GeneratedMessageLite$GeneratedExtension<ProtoBuf$Property, ProtoBuf$Annotation[]>, arg9: GeneratedMessageLite$GeneratedExtension<ProtoBuf$Property, ProtoBuf$Annotation[]>, arg10: GeneratedMessageLite$GeneratedExtension<ProtoBuf$Property, ProtoBuf$Annotation[]>, arg11: GeneratedMessageLite$GeneratedExtension<ProtoBuf$Property, ProtoBuf$Annotation[]>, arg12: GeneratedMessageLite$GeneratedExtension<ProtoBuf$EnumEntry, ProtoBuf$Annotation[]>, arg13: GeneratedMessageLite$GeneratedExtension<ProtoBuf$Property, ProtoBuf$Annotation$Argument$Value>, arg14: GeneratedMessageLite$GeneratedExtension<ProtoBuf$ValueParameter, ProtoBuf$Annotation[]>, arg15: GeneratedMessageLite$GeneratedExtension<ProtoBuf$Type, ProtoBuf$Annotation[]>, arg16: GeneratedMessageLite$GeneratedExtension<ProtoBuf$TypeParameter, ProtoBuf$Annotation[]>)
    readonly classAnnotation: GeneratedMessageLite$GeneratedExtension<ProtoBuf$Class, ProtoBuf$Annotation[]>;
    readonly compileTimeValue: GeneratedMessageLite$GeneratedExtension<ProtoBuf$Property, ProtoBuf$Annotation$Argument$Value>;
    readonly constructorAnnotation: GeneratedMessageLite$GeneratedExtension<ProtoBuf$Constructor, ProtoBuf$Annotation[]>;
    readonly enumEntryAnnotation: GeneratedMessageLite$GeneratedExtension<ProtoBuf$EnumEntry, ProtoBuf$Annotation[]>;
    readonly extensionRegistry: ExtensionRegistryLite;
    readonly functionAnnotation: GeneratedMessageLite$GeneratedExtension<ProtoBuf$Function, ProtoBuf$Annotation[]>;
    readonly functionExtensionReceiverAnnotation: GeneratedMessageLite$GeneratedExtension<ProtoBuf$Function, ProtoBuf$Annotation[]>;
    // private packageFqName: GeneratedMessageLite$GeneratedExtension<ProtoBuf$Package, number>;
    readonly parameterAnnotation: GeneratedMessageLite$GeneratedExtension<ProtoBuf$ValueParameter, ProtoBuf$Annotation[]>;
    readonly propertyAnnotation: GeneratedMessageLite$GeneratedExtension<ProtoBuf$Property, ProtoBuf$Annotation[]>;
    readonly propertyBackingFieldAnnotation: GeneratedMessageLite$GeneratedExtension<ProtoBuf$Property, ProtoBuf$Annotation[]>;
    readonly propertyDelegatedFieldAnnotation: GeneratedMessageLite$GeneratedExtension<ProtoBuf$Property, ProtoBuf$Annotation[]>;
    readonly propertyExtensionReceiverAnnotation: GeneratedMessageLite$GeneratedExtension<ProtoBuf$Property, ProtoBuf$Annotation[]>;
    readonly propertyGetterAnnotation: GeneratedMessageLite$GeneratedExtension<ProtoBuf$Property, ProtoBuf$Annotation[]>;
    readonly propertySetterAnnotation: GeneratedMessageLite$GeneratedExtension<ProtoBuf$Property, ProtoBuf$Annotation[]>;
    readonly typeAnnotation: GeneratedMessageLite$GeneratedExtension<ProtoBuf$Type, ProtoBuf$Annotation[]>;
    readonly typeParameterAnnotation: GeneratedMessageLite$GeneratedExtension<ProtoBuf$TypeParameter, ProtoBuf$Annotation[]>;
    getClassAnnotation(): GeneratedMessageLite$GeneratedExtension<ProtoBuf$Class, ProtoBuf$Annotation[]>;
    getCompileTimeValue(): GeneratedMessageLite$GeneratedExtension<ProtoBuf$Property, ProtoBuf$Annotation$Argument$Value>;
    getConstructorAnnotation(): GeneratedMessageLite$GeneratedExtension<ProtoBuf$Constructor, ProtoBuf$Annotation[]>;
    getEnumEntryAnnotation(): GeneratedMessageLite$GeneratedExtension<ProtoBuf$EnumEntry, ProtoBuf$Annotation[]>;
    getExtensionRegistry(): ExtensionRegistryLite;
    getFunctionAnnotation(): GeneratedMessageLite$GeneratedExtension<ProtoBuf$Function, ProtoBuf$Annotation[]>;
    getFunctionExtensionReceiverAnnotation(): GeneratedMessageLite$GeneratedExtension<ProtoBuf$Function, ProtoBuf$Annotation[]>;
    getParameterAnnotation(): GeneratedMessageLite$GeneratedExtension<ProtoBuf$ValueParameter, ProtoBuf$Annotation[]>;
    getPropertyAnnotation(): GeneratedMessageLite$GeneratedExtension<ProtoBuf$Property, ProtoBuf$Annotation[]>;
    getPropertyBackingFieldAnnotation(): GeneratedMessageLite$GeneratedExtension<ProtoBuf$Property, ProtoBuf$Annotation[]>;
    getPropertyDelegatedFieldAnnotation(): GeneratedMessageLite$GeneratedExtension<ProtoBuf$Property, ProtoBuf$Annotation[]>;
    getPropertyExtensionReceiverAnnotation(): GeneratedMessageLite$GeneratedExtension<ProtoBuf$Property, ProtoBuf$Annotation[]>;
    getPropertyGetterAnnotation(): GeneratedMessageLite$GeneratedExtension<ProtoBuf$Property, ProtoBuf$Annotation[]>;
    getPropertySetterAnnotation(): GeneratedMessageLite$GeneratedExtension<ProtoBuf$Property, ProtoBuf$Annotation[]>;
    getTypeAnnotation(): GeneratedMessageLite$GeneratedExtension<ProtoBuf$Type, ProtoBuf$Annotation[]>;
    getTypeParameterAnnotation(): GeneratedMessageLite$GeneratedExtension<ProtoBuf$TypeParameter, ProtoBuf$Annotation[]>;
}