import type { Class } from '../../../../java/lang/Class.d.ts'
import type { ExecutableElement } from '../../../../javax/lang/model/element/ExecutableElement.d.ts'
import type { TypeElement } from '../../../../javax/lang/model/element/TypeElement.d.ts'
import type { VariableElement } from '../../../../javax/lang/model/element/VariableElement.d.ts'
import type { Annotation } from '../../../../java/lang/annotation/Annotation.d.ts'
import type { Object } from '../../../../java/lang/Object.d.ts'
import type { CharSequence } from '../../../../java/lang/CharSequence.d.ts'
import type { MixinEnvironment$Option } from '../../../../org/spongepowered/asm/mixin/MixinEnvironment$Option.d.ts'
import type { IMixinInfo } from '../../../../org/spongepowered/asm/mixin/extensibility/IMixinInfo.d.ts'
import type { ISelectorContext } from '../../../../org/spongepowered/asm/mixin/injection/selectors/ISelectorContext.d.ts'
import type { IMixinContext } from '../../../../org/spongepowered/asm/mixin/refmap/IMixinContext.d.ts'
import type { ReferenceMapper } from '../../../../org/spongepowered/asm/mixin/refmap/ReferenceMapper.d.ts'
import type { Extensions } from '../../../../org/spongepowered/asm/mixin/transformer/ext/Extensions.d.ts'
import type { IAnnotatedElement } from '../../../../org/spongepowered/asm/util/asm/IAnnotatedElement.d.ts'
import type { IAnnotationHandle } from '../../../../org/spongepowered/asm/util/asm/IAnnotationHandle.d.ts'
import type { AnnotatedMixinElementHandlerAccessor } from '../../../../org/spongepowered/tools/obfuscation/AnnotatedMixinElementHandlerAccessor.d.ts'
import type { AnnotatedMixinElementHandlerInjector } from '../../../../org/spongepowered/tools/obfuscation/AnnotatedMixinElementHandlerInjector.d.ts'
import type { AnnotatedMixinElementHandlerOverwrite } from '../../../../org/spongepowered/tools/obfuscation/AnnotatedMixinElementHandlerOverwrite.d.ts'
import type { AnnotatedMixinElementHandlerShadow } from '../../../../org/spongepowered/tools/obfuscation/AnnotatedMixinElementHandlerShadow.d.ts'
import type { AnnotatedMixinElementHandlerSoftImplements } from '../../../../org/spongepowered/tools/obfuscation/AnnotatedMixinElementHandlerSoftImplements.d.ts'
import type { SuppressedBy } from '../../../../org/spongepowered/tools/obfuscation/SuppressedBy.d.ts'
import type { IMessagerEx$MessageType } from '../../../../org/spongepowered/tools/obfuscation/interfaces/IMessagerEx$MessageType.d.ts'
import type { IMessagerSuppressible } from '../../../../org/spongepowered/tools/obfuscation/interfaces/IMessagerSuppressible.d.ts'
import type { IMixinAnnotationProcessor } from '../../../../org/spongepowered/tools/obfuscation/interfaces/IMixinAnnotationProcessor.d.ts'
import type { IMixinValidator$ValidationPass } from '../../../../org/spongepowered/tools/obfuscation/interfaces/IMixinValidator$ValidationPass.d.ts'
import type { IObfuscationManager } from '../../../../org/spongepowered/tools/obfuscation/interfaces/IObfuscationManager.d.ts'
import type { ITypeHandleProvider } from '../../../../org/spongepowered/tools/obfuscation/interfaces/ITypeHandleProvider.d.ts'
import type { IMappingConsumer } from '../../../../org/spongepowered/tools/obfuscation/mapping/IMappingConsumer.d.ts'
import type { AnnotationHandle } from '../../../../org/spongepowered/tools/obfuscation/mirror/AnnotationHandle.d.ts'
import type { MethodHandle } from '../../../../org/spongepowered/tools/obfuscation/mirror/MethodHandle.d.ts'
import type { TypeHandle } from '../../../../org/spongepowered/tools/obfuscation/mirror/TypeHandle.d.ts'
import type { InjectorRemap } from '../../../../org/spongepowered/tools/obfuscation/struct/InjectorRemap.d.ts'
export class AnnotatedMixin extends Object implements IMixinContext, IAnnotatedElement {
    constructor(arg0: IMixinAnnotationProcessor, arg1: TypeElement)
    // private accessors: AnnotatedMixinElementHandlerAccessor;
    // private annotation: IAnnotationHandle;
    readonly classRef: string;
    readonly handle: TypeHandle;
    // private injectors: AnnotatedMixinElementHandlerInjector;
    readonly mappings: IMappingConsumer;
    // private messager: IMessagerSuppressible;
    // private methods: MethodHandle[];
    readonly mixin: TypeElement;
    // private obf: IObfuscationManager;
    // private overwrites: AnnotatedMixinElementHandlerOverwrite;
    // private primaryTarget: TypeHandle;
    // private remap: boolean;
    // private shadows: AnnotatedMixinElementHandlerShadow;
    // private softImplements: AnnotatedMixinElementHandlerSoftImplements;
    readonly targets: TypeHandle[];
    // private typeProvider: ITypeHandleProvider;
    // private validated: boolean;
    // private virtual: boolean;
    // private addSoftTarget(arg0: TypeHandle, arg1: string): void;
    // private addTarget(arg0: TypeHandle): void;
    getAnnotation(arg0: Class<Annotation>): IAnnotationHandle;
    getClassName(): string;
    getClassRef(): string;
    getExtensions(): Extensions;
    getHandle(): TypeHandle;
    getMappings(): IMappingConsumer;
    getMixin(): IMixinInfo;
    getMixinElement(): TypeElement;
    getOption(arg0: MixinEnvironment$Option): boolean;
    getPriority(): number;
    getReferenceMapper(): ReferenceMapper;
    getTargetClassName(): string;
    getTargetClassRef(): string;
    getTargets(): TypeHandle[];
    // private initTargets(arg0: IMixinAnnotationProcessor): TypeHandle;
    isMultiTarget(): boolean;
    // private printMessage(arg0: IMessagerEx$MessageType, arg1: CharSequence): void;
    // private printMessage(arg0: IMessagerEx$MessageType, arg1: CharSequence, arg2: SuppressedBy): void;
    registerAccessor(arg0: ExecutableElement, arg1: AnnotationHandle, arg2: boolean): void;
    registerInjectionPoint(arg0: ExecutableElement, arg1: AnnotationHandle, arg2: string, arg3: AnnotationHandle, arg4: InjectorRemap, arg5: string): void;
    registerInjector(arg0: ExecutableElement, arg1: AnnotationHandle, arg2: InjectorRemap): void;
    registerInvoker(arg0: ExecutableElement, arg1: AnnotationHandle, arg2: boolean): void;
    registerOverwrite(arg0: ExecutableElement, arg1: AnnotationHandle, arg2: boolean): void;
    registerShadow(arg0: ExecutableElement, arg1: AnnotationHandle, arg2: boolean): void;
    registerShadow(arg0: VariableElement, arg1: AnnotationHandle, arg2: boolean): void;
    registerSliceInjectionPoint(arg0: ExecutableElement, arg1: AnnotationHandle, arg2: string, arg3: AnnotationHandle, arg4: InjectorRemap, arg5: string, arg6: ISelectorContext): void;
    registerSoftImplements(arg0: AnnotationHandle): void;
    remap(): boolean;
    // private removeMethod(arg0: ExecutableElement): void;
    // private runFinalValidation(): void;
    runValidators(arg0: IMixinValidator$ValidationPass, arg1: E[]): AnnotatedMixin;
    toString(): string;
}