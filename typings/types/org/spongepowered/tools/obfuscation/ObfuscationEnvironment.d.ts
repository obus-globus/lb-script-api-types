import type { Filer } from '../../../../javax/annotation/processing/Filer.d.ts'
import type { Messager } from '../../../../javax/annotation/processing/Messager.d.ts'
import type { Object } from '../../../../java/lang/Object.d.ts'
import type { ITargetSelectorRemappable } from '../../../../org/spongepowered/asm/mixin/injection/selectors/ITargetSelectorRemappable.d.ts'
import type { MappingField } from '../../../../org/spongepowered/asm/obfuscation/mapping/common/MappingField.d.ts'
import type { MappingMethod } from '../../../../org/spongepowered/asm/obfuscation/mapping/common/MappingMethod.d.ts'
import type { ObfuscationEnvironment$RemapperProxy } from '../../../../org/spongepowered/tools/obfuscation/ObfuscationEnvironment$RemapperProxy.d.ts'
import type { ObfuscationType } from '../../../../org/spongepowered/tools/obfuscation/ObfuscationType.d.ts'
import type { IMixinAnnotationProcessor } from '../../../../org/spongepowered/tools/obfuscation/interfaces/IMixinAnnotationProcessor.d.ts'
import type { IObfuscationEnvironment } from '../../../../org/spongepowered/tools/obfuscation/interfaces/IObfuscationEnvironment.d.ts'
import type { IMappingConsumer } from '../../../../org/spongepowered/tools/obfuscation/mapping/IMappingConsumer.d.ts'
import type { IMappingProvider } from '../../../../org/spongepowered/tools/obfuscation/mapping/IMappingProvider.d.ts'
import type { IMappingWriter } from '../../../../org/spongepowered/tools/obfuscation/mapping/IMappingWriter.d.ts'
export abstract class ObfuscationEnvironment extends Object implements IObfuscationEnvironment {
    constructor(arg0: ObfuscationType)
    // private ap: IMixinAnnotationProcessor;
    // private inFileNames: string[];
    // private initDone: boolean;
    // private mappingProvider: IMappingProvider;
    // private mappingWriter: IMappingWriter;
    // private outFileName: string;
    // private remapper: ObfuscationEnvironment$RemapperProxy;
    readonly type: ObfuscationType;
    getMappingProvider(arg0: Messager, arg1: Filer): IMappingProvider;
    getMappingWriter(arg0: Messager, arg1: Filer): IMappingWriter;
    getObfClass(arg0: string): string;
    getObfField(arg0: ITargetSelectorRemappable): MappingField;
    getObfField(arg0: MappingField): MappingField;
    getObfField(arg0: MappingField, arg1: boolean): MappingField;
    getObfMethod(arg0: ITargetSelectorRemappable): MappingMethod;
    getObfMethod(arg0: MappingMethod): MappingMethod;
    getObfMethod(arg0: MappingMethod, arg1: boolean): MappingMethod;
    getType(): ObfuscationType;
    // private initMappings(): boolean;
    remapDescriptor(arg0: string): string;
    remapDescriptor(arg0: ITargetSelectorRemappable): ITargetSelectorRemappable;
    toString(): string;
    writeMappings(arg0: IMappingConsumer[]): void;
}