import type { JavaMap } from '../../../../../../JavaMap.d.ts'
import type { Object } from '../../../../../../java/lang/Object.d.ts'
import type { KmAnnotation } from '../../../../../../kotlin/reflect/jvm/internal/impl/km/KmAnnotation.d.ts'
import type { KmValueParameter } from '../../../../../../kotlin/reflect/jvm/internal/impl/km/KmValueParameter.d.ts'
import type { KmVersionRequirement } from '../../../../../../kotlin/reflect/jvm/internal/impl/km/KmVersionRequirement.d.ts'
import type { KmConstructorExtension } from '../../../../../../kotlin/reflect/jvm/internal/impl/km/internal/extensions/KmConstructorExtension.d.ts'
export class KmConstructor extends Object {
    constructor()
    constructor(arg0: number)
    readonly annotations: KmAnnotation[];
    readonly compilerPluginMetadata: JavaMap<string, number[]>;
    // private extensions: KmConstructorExtension[];
    // private flags: number;
    readonly valueParameters: KmValueParameter[];
    readonly versionRequirements: KmVersionRequirement[];
    getAnnotations(): KmAnnotation[];
    getCompilerPluginMetadata(): JavaMap<string, number[]>;
    getExtensions$org_jetbrains_kotlin_kotlin_metadata(): KmConstructorExtension[];
    getFlags$org_jetbrains_kotlin_kotlin_metadata(): number;
    getValueParameters(): KmValueParameter[];
    getVersionRequirements(): KmVersionRequirement[];
    setFlags$org_jetbrains_kotlin_kotlin_metadata(arg0: number): void;
}