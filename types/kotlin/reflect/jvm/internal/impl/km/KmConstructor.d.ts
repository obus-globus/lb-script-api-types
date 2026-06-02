import type { Object } from '../../../../../../java/lang/Object.d.ts'
import type { KmAnnotation } from '../../../../../../kotlin/reflect/jvm/internal/impl/km/KmAnnotation.d.ts'
import type { KmValueParameter } from '../../../../../../kotlin/reflect/jvm/internal/impl/km/KmValueParameter.d.ts'
import type { KmVersionRequirement } from '../../../../../../kotlin/reflect/jvm/internal/impl/km/KmVersionRequirement.d.ts'
import type { KmConstructorExtension } from '../../../../../../kotlin/reflect/jvm/internal/impl/km/internal/extensions/KmConstructorExtension.d.ts'
export class KmConstructor extends Object {
    constructor()
    constructor(arg0: number)
    readonly annotations: KmAnnotation[];
    // private extensions: KmConstructorExtension[];
    // private flags: number;
    readonly valueParameters: KmValueParameter[];
    readonly versionRequirements: KmVersionRequirement[];
    getAnnotations(): KmAnnotation[];
    getExtensions$kotlin_metadata(): KmConstructorExtension[];
    getFlags$kotlin_metadata(): number;
    getValueParameters(): KmValueParameter[];
    getVersionRequirements(): KmVersionRequirement[];
    setFlags$kotlin_metadata(arg0: number): void;
}