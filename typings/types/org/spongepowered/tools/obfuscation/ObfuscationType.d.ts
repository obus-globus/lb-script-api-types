import type { Object } from '../../../../java/lang/Object.d.ts'
import type { ObfuscationEnvironment } from '../../../../org/spongepowered/tools/obfuscation/ObfuscationEnvironment.d.ts'
import type { IMixinAnnotationProcessor } from '../../../../org/spongepowered/tools/obfuscation/interfaces/IMixinAnnotationProcessor.d.ts'
import type { IOptionProvider } from '../../../../org/spongepowered/tools/obfuscation/interfaces/IOptionProvider.d.ts'
import type { ObfuscationTypeDescriptor } from '../../../../org/spongepowered/tools/obfuscation/service/ObfuscationTypeDescriptor.d.ts'
export class ObfuscationType extends Object {
    static DEFAULT_TYPE: string;
    static create(paramarg0: ObfuscationTypeDescriptor, paramarg1: IMixinAnnotationProcessor): ObfuscationType;
    static get(paramarg0: string): ObfuscationType;
    static types(): ObfuscationType[];
    private constructor(arg0: ObfuscationTypeDescriptor, arg1: IMixinAnnotationProcessor)
    // private ap: IMixinAnnotationProcessor;
    // private descriptor: ObfuscationTypeDescriptor;
    readonly key: string;
    // private options: IOptionProvider;
    createEnvironment(): ObfuscationEnvironment;
    getAnnotationProcessor(): IMixinAnnotationProcessor;
    getConfig(): ObfuscationTypeDescriptor;
    getInputFileNames(): string[];
    getKey(): string;
    getOutputFileName(): string;
    isDefault(): boolean;
    isSupported(): boolean;
    toString(): string;
}