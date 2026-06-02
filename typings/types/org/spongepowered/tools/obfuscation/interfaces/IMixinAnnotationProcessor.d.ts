import type { ProcessingEnvironment } from '../../../../../javax/annotation/processing/ProcessingEnvironment.d.ts'
import type { Object } from '../../../../../java/lang/Object.d.ts'
import type { ITokenProvider } from '../../../../../org/spongepowered/asm/util/ITokenProvider.d.ts'
import type { IJavadocProvider } from '../../../../../org/spongepowered/tools/obfuscation/interfaces/IJavadocProvider.d.ts'
import type { IMessagerSuppressible } from '../../../../../org/spongepowered/tools/obfuscation/interfaces/IMessagerSuppressible.d.ts'
import type { IMixinAnnotationProcessor$CompilerEnvironment } from '../../../../../org/spongepowered/tools/obfuscation/interfaces/IMixinAnnotationProcessor$CompilerEnvironment.d.ts'
import type { IObfuscationManager } from '../../../../../org/spongepowered/tools/obfuscation/interfaces/IObfuscationManager.d.ts'
import type { IOptionProvider } from '../../../../../org/spongepowered/tools/obfuscation/interfaces/IOptionProvider.d.ts'
import type { ITypeHandleProvider } from '../../../../../org/spongepowered/tools/obfuscation/interfaces/ITypeHandleProvider.d.ts'
export interface IMixinAnnotationProcessor extends Object, IMessagerSuppressible, IOptionProvider{
    getCompilerEnvironment(): IMixinAnnotationProcessor$CompilerEnvironment;
    getJavadocProvider(): IJavadocProvider;
    getObfuscationManager(): IObfuscationManager;
    getProcessingEnvironment(): ProcessingEnvironment;
    getTokenProvider(): ITokenProvider;
    getTypeProvider(): ITypeHandleProvider;
}