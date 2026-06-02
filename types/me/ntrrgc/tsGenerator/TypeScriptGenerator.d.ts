import type { Type } from '../../../java/lang/reflect/Type.d.ts'
import type { Object } from '../../../java/lang/Object.d.ts'
import type { KClass } from '../../../kotlin/reflect/KClass.d.ts'
import type { ClassTransformer } from '../../../me/ntrrgc/tsGenerator/ClassTransformer.d.ts'
import type { ClassTransformerPipeline } from '../../../me/ntrrgc/tsGenerator/ClassTransformerPipeline.d.ts'
import type { KDocSource } from '../../../me/ntrrgc/tsGenerator/KDocSource.d.ts'
import type { TypeScriptGenerator$Companion } from '../../../me/ntrrgc/tsGenerator/TypeScriptGenerator$Companion.d.ts'
import type { TypeScriptGenerator$TypeScriptModule } from '../../../me/ntrrgc/tsGenerator/TypeScriptGenerator$TypeScriptModule.d.ts'
import type { VoidType } from '../../../me/ntrrgc/tsGenerator/VoidType.d.ts'
export class TypeScriptGenerator extends Object {
    static Companion: TypeScriptGenerator$Companion;
    constructor(rootClasses: KClass<Object>[], mappings: Map<KClass<Object>, string>, classTransformers: ClassTransformer[], ignoreSuperclasses: KClass<Object>[], intTypeName: string, voidType: VoidType, kdocSource: KDocSource | null)
    readonly definitionsAsModules: { [key: string]: string };
    readonly definitionsText: string;
    // private ignoredSuperclasses: KClass<Object>[];
    readonly individualDefinitions: string[];
    // private intTypeName: string;
    // private kdocSource: KDocSource | null;
    // private modules: Map<KClass<Object>, TypeScriptGenerator$TypeScriptModule>;
    // private pipeline: ClassTransformerPipeline;
    // private predefinedMappings: Map<KClass<Object>, string>;
    // private predefinedMappingsByName: { [key: string]: string };
    // private shouldIgnoreSuperclass: (param0: KClass<Object>) => boolean;
    // private voidType: VoidType;
    // private isFunctionType(javaType: Type): boolean;
    // private isSameClass(klassLhs: KClass<Object>, klassRhs: KClass<Object>): boolean;
    // private visitClass(klass: KClass<Object>): void;
}