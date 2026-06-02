import type { Object } from '../../../../../../java/lang/Object.d.ts'
import type { KmAnnotation } from '../../../../../../kotlin/reflect/jvm/internal/impl/km/KmAnnotation.d.ts'
import type { KmContract } from '../../../../../../kotlin/reflect/jvm/internal/impl/km/KmContract.d.ts'
import type { KmType } from '../../../../../../kotlin/reflect/jvm/internal/impl/km/KmType.d.ts'
import type { KmTypeParameter } from '../../../../../../kotlin/reflect/jvm/internal/impl/km/KmTypeParameter.d.ts'
import type { KmValueParameter } from '../../../../../../kotlin/reflect/jvm/internal/impl/km/KmValueParameter.d.ts'
import type { KmVersionRequirement } from '../../../../../../kotlin/reflect/jvm/internal/impl/km/KmVersionRequirement.d.ts'
import type { KmFunctionExtension } from '../../../../../../kotlin/reflect/jvm/internal/impl/km/internal/extensions/KmFunctionExtension.d.ts'
export class KmFunction extends Object {
    constructor(arg0: number, arg1: string)
    readonly annotations: KmAnnotation[];
    readonly contextParameters: KmValueParameter[];
    // private contextReceiverTypes: KmType[];
    readonly contract: KmContract;
    readonly extensionReceiverParameterAnnotations: KmAnnotation[];
    // private extensions: KmFunctionExtension[];
    // private flags: number;
    // private name: string;
    readonly receiverParameterType: KmType;
    returnType: KmType;
    readonly typeParameters: KmTypeParameter[];
    readonly valueParameters: KmValueParameter[];
    readonly versionRequirements: KmVersionRequirement[];
    getAnnotations(): KmAnnotation[];
    getContextParameters(): KmValueParameter[];
    getExtensionReceiverParameterAnnotations(): KmAnnotation[];
    getExtensions$kotlin_metadata(): KmFunctionExtension[];
    getFlags$kotlin_metadata(): number;
    getTypeParameters(): KmTypeParameter[];
    getValueParameters(): KmValueParameter[];
    getVersionRequirements(): KmVersionRequirement[];
    setContract(arg0: KmContract): void;
    setFlags$kotlin_metadata(arg0: number): void;
    setReceiverParameterType(arg0: KmType): void;
    setReturnType(arg0: KmType): void;
}