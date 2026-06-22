import type { ProcessingEnvironment } from '../../../../../javax/annotation/processing/ProcessingEnvironment.d.ts'
import type { AnnotationMirror } from '../../../../../javax/lang/model/element/AnnotationMirror.d.ts'
import type { AnnotationValue } from '../../../../../javax/lang/model/element/AnnotationValue.d.ts'
import type { Element } from '../../../../../javax/lang/model/element/Element.d.ts'
import type { Diagnostic$Kind } from '../../../../../javax/tools/Diagnostic$Kind.d.ts'
import type { Object } from '../../../../../java/lang/Object.d.ts'
import type { CharSequence } from '../../../../../java/lang/CharSequence.d.ts'
import type { ITokenProvider } from '../../../../../org/spongepowered/asm/util/ITokenProvider.d.ts'
import type { SuppressedBy } from '../../../../../org/spongepowered/tools/obfuscation/SuppressedBy.d.ts'
import type { IJavadocProvider } from '../../../../../org/spongepowered/tools/obfuscation/interfaces/IJavadocProvider.d.ts'
import type { IMessagerEx$MessageType } from '../../../../../org/spongepowered/tools/obfuscation/interfaces/IMessagerEx$MessageType.d.ts'
import type { IMessagerSuppressible } from '../../../../../org/spongepowered/tools/obfuscation/interfaces/IMessagerSuppressible.d.ts'
import type { IMixinAnnotationProcessor$CompilerEnvironment } from '../../../../../org/spongepowered/tools/obfuscation/interfaces/IMixinAnnotationProcessor$CompilerEnvironment.d.ts'
import type { IObfuscationManager } from '../../../../../org/spongepowered/tools/obfuscation/interfaces/IObfuscationManager.d.ts'
import type { IOptionProvider } from '../../../../../org/spongepowered/tools/obfuscation/interfaces/IOptionProvider.d.ts'
import type { ITypeHandleProvider } from '../../../../../org/spongepowered/tools/obfuscation/interfaces/ITypeHandleProvider.d.ts'
export interface IMixinAnnotationProcessor extends Object, IMessagerSuppressible, IOptionProvider{
    getCompilerEnvironment(): IMixinAnnotationProcessor$CompilerEnvironment;
    getJavadocProvider(): IJavadocProvider;
    getObfuscationManager(): IObfuscationManager;
    getOption(arg0: string): string;
    getOption(arg0: string, arg1: boolean): boolean;
    getOption(arg0: string, arg1: string): string;
    getProcessingEnvironment(): ProcessingEnvironment;
    getTokenProvider(): ITokenProvider;
    getTypeProvider(): ITypeHandleProvider;
    printMessage(arg0: Diagnostic$Kind, arg1: CharSequence): void;
    printMessage(arg0: Diagnostic$Kind, arg1: CharSequence, arg2: Element): void;
    printMessage(arg0: Diagnostic$Kind, arg1: CharSequence, arg2: Element, arg3: AnnotationMirror): void;
    printMessage(arg0: Diagnostic$Kind, arg1: CharSequence, arg2: Element, arg3: AnnotationMirror, arg4: AnnotationValue): void;
    printMessage(arg0: IMessagerEx$MessageType, arg1: CharSequence): void;
    printMessage(arg0: IMessagerEx$MessageType, arg1: CharSequence, arg2: Element): void;
    printMessage(arg0: IMessagerEx$MessageType, arg1: CharSequence, arg2: Element, arg3: AnnotationMirror): void;
    printMessage(arg0: IMessagerEx$MessageType, arg1: CharSequence, arg2: Element, arg3: AnnotationMirror, arg4: AnnotationValue): void;
    printMessage(arg0: Diagnostic$Kind, arg1: CharSequence, arg2: Element, arg3: AnnotationMirror, arg4: AnnotationValue, arg5: SuppressedBy): void;
    printMessage(arg0: Diagnostic$Kind, arg1: CharSequence, arg2: Element, arg3: AnnotationMirror, arg4: SuppressedBy): void;
    printMessage(arg0: Diagnostic$Kind, arg1: CharSequence, arg2: Element, arg3: SuppressedBy): void;
    printMessage(arg0: IMessagerEx$MessageType, arg1: CharSequence, arg2: Element, arg3: AnnotationMirror, arg4: AnnotationValue, arg5: SuppressedBy): void;
    printMessage(arg0: IMessagerEx$MessageType, arg1: CharSequence, arg2: Element, arg3: AnnotationMirror, arg4: SuppressedBy): void;
    printMessage(arg0: IMessagerEx$MessageType, arg1: CharSequence, arg2: Element, arg3: SuppressedBy): void;
}