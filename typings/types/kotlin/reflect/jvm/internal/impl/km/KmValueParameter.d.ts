import type { Object } from '../../../../../../java/lang/Object.d.ts'
import type { KmAnnotation } from '../../../../../../kotlin/reflect/jvm/internal/impl/km/KmAnnotation.d.ts'
import type { KmAnnotationArgument } from '../../../../../../kotlin/reflect/jvm/internal/impl/km/KmAnnotationArgument.d.ts'
import type { KmType } from '../../../../../../kotlin/reflect/jvm/internal/impl/km/KmType.d.ts'
import type { KmValueParameterExtension } from '../../../../../../kotlin/reflect/jvm/internal/impl/km/internal/extensions/KmValueParameterExtension.d.ts'
export class KmValueParameter extends Object {
    constructor(arg0: number, arg1: string)
    readonly annotationParameterDefaultValue: KmAnnotationArgument;
    readonly annotations: KmAnnotation[];
    // private extensions: KmValueParameterExtension[];
    // private flags: number;
    readonly name: string;
    type: KmType;
    readonly varargElementType: KmType;
    getAnnotationParameterDefaultValue(): KmAnnotationArgument;
    getAnnotations(): KmAnnotation[];
    getFlags$kotlin_metadata(): number;
    getName(): string;
    getType(): KmType;
    getVarargElementType(): KmType;
    setAnnotationParameterDefaultValue(arg0: KmAnnotationArgument): void;
    setFlags$kotlin_metadata(arg0: number): void;
    setType(arg0: KmType): void;
    setVarargElementType(arg0: KmType): void;
}