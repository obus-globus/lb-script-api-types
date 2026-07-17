import type { JavaMap } from '../../../../../../JavaMap.d.ts'
import type { Object } from '../../../../../../java/lang/Object.d.ts'
import type { KmAnnotation } from '../../../../../../kotlin/reflect/jvm/internal/impl/km/KmAnnotation.d.ts'
import type { KmPropertyAccessorAttributes } from '../../../../../../kotlin/reflect/jvm/internal/impl/km/KmPropertyAccessorAttributes.d.ts'
import type { KmType } from '../../../../../../kotlin/reflect/jvm/internal/impl/km/KmType.d.ts'
import type { KmTypeParameter } from '../../../../../../kotlin/reflect/jvm/internal/impl/km/KmTypeParameter.d.ts'
import type { KmValueParameter } from '../../../../../../kotlin/reflect/jvm/internal/impl/km/KmValueParameter.d.ts'
import type { KmVersionRequirement } from '../../../../../../kotlin/reflect/jvm/internal/impl/km/KmVersionRequirement.d.ts'
import type { BooleanFlagDelegate } from '../../../../../../kotlin/reflect/jvm/internal/impl/km/internal/BooleanFlagDelegate.d.ts'
import type { KmPropertyExtension } from '../../../../../../kotlin/reflect/jvm/internal/impl/km/internal/extensions/KmPropertyExtension.d.ts'
export class KmProperty extends Object {
    constructor(arg0: number, arg1: string, arg2: number, arg3: number)
    // private _hasGetter$delegate: BooleanFlagDelegate<Object>;
    // private _hasSetter$delegate: BooleanFlagDelegate<Object>;
    readonly annotations: KmAnnotation[];
    readonly backingFieldAnnotations: KmAnnotation[];
    readonly compilerPluginMetadata: JavaMap<string, number[]>;
    readonly contextParameters: KmValueParameter[];
    // private contextReceiverTypes: KmType[];
    readonly delegateFieldAnnotations: KmAnnotation[];
    readonly extensionReceiverParameterAnnotations: KmAnnotation[];
    // private extensions: KmPropertyExtension[];
    // private flags: number;
    readonly getter: KmPropertyAccessorAttributes;
    readonly name: string;
    readonly receiverParameterType: KmType;
    returnType: KmType;
    readonly setter: KmPropertyAccessorAttributes;
    readonly setterParameter: KmValueParameter;
    readonly typeParameters: KmTypeParameter[];
    readonly versionRequirements: KmVersionRequirement[];
    getAnnotations(): KmAnnotation[];
    getBackingFieldAnnotations(): KmAnnotation[];
    getCompilerPluginMetadata(): JavaMap<string, number[]>;
    getContextParameters(): KmValueParameter[];
    getDelegateFieldAnnotations(): KmAnnotation[];
    getExtensionReceiverParameterAnnotations(): KmAnnotation[];
    getExtensions$org_jetbrains_kotlin_kotlin_metadata(): KmPropertyExtension[];
    getFlags$org_jetbrains_kotlin_kotlin_metadata(): number;
    getGetter(): KmPropertyAccessorAttributes;
    getName(): string;
    getReceiverParameterType(): KmType;
    getReturnType(): KmType;
    getSetter(): KmPropertyAccessorAttributes;
    getSetterParameter(): KmValueParameter;
    getTypeParameters(): KmTypeParameter[];
    getVersionRequirements(): KmVersionRequirement[];
    // private get_hasSetter(): boolean;
    setFlags$org_jetbrains_kotlin_kotlin_metadata(arg0: number): void;
    setReceiverParameterType(arg0: KmType): void;
    setReturnType(arg0: KmType): void;
    setSetterParameter(arg0: KmValueParameter): void;
    // private set_hasGetter(arg0: boolean): void;
}