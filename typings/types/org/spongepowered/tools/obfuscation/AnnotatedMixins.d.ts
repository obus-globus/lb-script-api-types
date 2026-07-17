import type { JavaMap } from '../../../../JavaMap.d.ts'
import type { ProcessingEnvironment } from '../../../../javax/annotation/processing/ProcessingEnvironment.d.ts'
import type { RoundEnvironment } from '../../../../javax/annotation/processing/RoundEnvironment.d.ts'
import type { AnnotationMirror } from '../../../../javax/lang/model/element/AnnotationMirror.d.ts'
import type { AnnotationValue } from '../../../../javax/lang/model/element/AnnotationValue.d.ts'
import type { Element } from '../../../../javax/lang/model/element/Element.d.ts'
import type { ExecutableElement } from '../../../../javax/lang/model/element/ExecutableElement.d.ts'
import type { TypeElement } from '../../../../javax/lang/model/element/TypeElement.d.ts'
import type { VariableElement } from '../../../../javax/lang/model/element/VariableElement.d.ts'
import type { TypeMirror } from '../../../../javax/lang/model/type/TypeMirror.d.ts'
import type { Elements } from '../../../../javax/lang/model/util/Elements.d.ts'
import type { Diagnostic$Kind } from '../../../../javax/tools/Diagnostic$Kind.d.ts'
import type { Object } from '../../../../java/lang/Object.d.ts'
import type { CharSequence } from '../../../../java/lang/CharSequence.d.ts'
import type { ITokenProvider } from '../../../../org/spongepowered/asm/util/ITokenProvider.d.ts'
import type { AnnotatedMixin } from '../../../../org/spongepowered/tools/obfuscation/AnnotatedMixin.d.ts'
import type { SuppressedBy } from '../../../../org/spongepowered/tools/obfuscation/SuppressedBy.d.ts'
import type { IJavadocProvider } from '../../../../org/spongepowered/tools/obfuscation/interfaces/IJavadocProvider.d.ts'
import type { IMessagerEx$MessageType } from '../../../../org/spongepowered/tools/obfuscation/interfaces/IMessagerEx$MessageType.d.ts'
import type { IMixinAnnotationProcessor } from '../../../../org/spongepowered/tools/obfuscation/interfaces/IMixinAnnotationProcessor.d.ts'
import type { IMixinAnnotationProcessor$CompilerEnvironment } from '../../../../org/spongepowered/tools/obfuscation/interfaces/IMixinAnnotationProcessor$CompilerEnvironment.d.ts'
import type { IMixinValidator } from '../../../../org/spongepowered/tools/obfuscation/interfaces/IMixinValidator.d.ts'
import type { IObfuscationManager } from '../../../../org/spongepowered/tools/obfuscation/interfaces/IObfuscationManager.d.ts'
import type { ITypeHandleProvider } from '../../../../org/spongepowered/tools/obfuscation/interfaces/ITypeHandleProvider.d.ts'
import type { AnnotationHandle } from '../../../../org/spongepowered/tools/obfuscation/mirror/AnnotationHandle.d.ts'
import type { TypeHandle } from '../../../../org/spongepowered/tools/obfuscation/mirror/TypeHandle.d.ts'
export class AnnotatedMixins extends Object implements ITokenProvider, IJavadocProvider, IMixinAnnotationProcessor, ITypeHandleProvider {
    static getMixinsForEnvironment(paramarg0: ProcessingEnvironment): AnnotatedMixins;
    private constructor(arg0: ProcessingEnvironment)
    // private env: IMixinAnnotationProcessor$CompilerEnvironment;
    // private mixins: JavaMap<string, AnnotatedMixin>;
    // private mixinsForPass: AnnotatedMixin[];
    // private obf: IObfuscationManager;
    // private processingEnv: ProcessingEnvironment;
    readonly properties: JavaMap<any, any>;
    // private targets: JavaMap<any, any>;
    // private tokenCache: JavaMap<string, number>;
    // private validators: IMixinValidator[];
    // private checkPluginVersion(arg0: string): string;
    getCompilerEnvironment(): IMixinAnnotationProcessor$CompilerEnvironment;
    getJavadoc(arg0: Element): string;
    getJavadocProvider(): IJavadocProvider;
    getMixin(arg0: TypeElement): AnnotatedMixin;
    getMixin(arg0: string): AnnotatedMixin;
    getMixinsTargeting(arg0: TypeHandle): TypeHandle[];
    getObfuscationManager(): IObfuscationManager;
    getOption(arg0: string): string;
    getOption(arg0: string, arg1: boolean): boolean;
    getOption(arg0: string, arg1: string): string;
    getOptions(arg0: string): string[];
    getProcessingEnvironment(): ProcessingEnvironment;
    getProperties(): JavaMap<any, any>;
    getSimulatedHandle(arg0: string, arg1: TypeMirror): TypeHandle;
    getToken(arg0: string): number;
    getTokenProvider(): ITokenProvider;
    // private getTypeElement(arg0: string, arg1: Elements): TypeElement;
    getTypeHandle(arg0: Object): TypeHandle;
    getTypeHandle(arg0: string): TypeHandle;
    getTypeProvider(): ITypeHandleProvider;
    initTargetMap(): JavaMap<any, any>;
    // private initTokenCache(arg0: string): void;
    onPassCompleted(arg0: RoundEnvironment): void;
    onPassStarted(): void;
    printMessage(arg0: Diagnostic$Kind, arg1: CharSequence): void;
    printMessage(arg0: Diagnostic$Kind, arg1: CharSequence, arg2: Element): void;
    printMessage(arg0: Diagnostic$Kind, arg1: CharSequence, arg2: Element, arg3: AnnotationMirror): void;
    printMessage(arg0: Diagnostic$Kind, arg1: CharSequence, arg2: Element, arg3: AnnotationMirror, arg4: AnnotationValue): void;
    printMessage(arg0: Diagnostic$Kind, arg1: CharSequence, arg2: Element, arg3: AnnotationMirror, arg4: AnnotationValue, arg5: SuppressedBy): void;
    printMessage(arg0: Diagnostic$Kind, arg1: CharSequence, arg2: Element, arg3: AnnotationMirror, arg4: SuppressedBy): void;
    printMessage(arg0: Diagnostic$Kind, arg1: CharSequence, arg2: Element, arg3: SuppressedBy): void;
    printMessage(arg0: IMessagerEx$MessageType, arg1: CharSequence): void;
    printMessage(arg0: IMessagerEx$MessageType, arg1: CharSequence, arg2: Element): void;
    printMessage(arg0: IMessagerEx$MessageType, arg1: CharSequence, arg2: Element, arg3: AnnotationMirror): void;
    printMessage(arg0: IMessagerEx$MessageType, arg1: CharSequence, arg2: Element, arg3: AnnotationMirror, arg4: AnnotationValue): void;
    printMessage(arg0: IMessagerEx$MessageType, arg1: CharSequence, arg2: Element, arg3: AnnotationMirror, arg4: AnnotationValue, arg5: SuppressedBy): void;
    printMessage(arg0: IMessagerEx$MessageType, arg1: CharSequence, arg2: Element, arg3: AnnotationMirror, arg4: SuppressedBy): void;
    printMessage(arg0: IMessagerEx$MessageType, arg1: CharSequence, arg2: Element, arg3: SuppressedBy): void;
    registerAccessor(arg0: TypeElement, arg1: ExecutableElement): void;
    registerInjector(arg0: TypeElement, arg1: ExecutableElement, arg2: AnnotationHandle): void;
    registerInvoker(arg0: TypeElement, arg1: ExecutableElement): void;
    registerMixin(arg0: TypeElement): void;
    registerOverwrite(arg0: TypeElement, arg1: ExecutableElement): void;
    registerShadow(arg0: TypeElement, arg1: ExecutableElement, arg2: AnnotationHandle): void;
    registerShadow(arg0: TypeElement, arg1: VariableElement, arg2: AnnotationHandle): void;
    registerSoftImplements(arg0: TypeElement, arg1: AnnotationHandle): void;
    writeMappings(): void;
    writeReferences(): void;
}