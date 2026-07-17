import type { JavaMap } from '../../../../../../JavaMap.d.ts'
import type { Class } from '../../../../../../java/lang/Class.d.ts'
import type { Annotation } from '../../../../../../java/lang/annotation/Annotation.d.ts'
import type { Object } from '../../../../../../java/lang/Object.d.ts'
import type { AbstractInsnNode } from '../../../../../../org/objectweb/asm/tree/AbstractInsnNode.d.ts'
import type { AnnotationNode } from '../../../../../../org/objectweb/asm/tree/AnnotationNode.d.ts'
import type { MethodNode } from '../../../../../../org/objectweb/asm/tree/MethodNode.d.ts'
import type { IMixinInfo } from '../../../../../../org/spongepowered/asm/mixin/extensibility/IMixinInfo.d.ts'
import type { InjectionPoint } from '../../../../../../org/spongepowered/asm/mixin/injection/InjectionPoint.d.ts'
import type { ISliceContext } from '../../../../../../org/spongepowered/asm/mixin/injection/code/ISliceContext.d.ts'
import type { Injector } from '../../../../../../org/spongepowered/asm/mixin/injection/code/Injector.d.ts'
import type { MethodSlice } from '../../../../../../org/spongepowered/asm/mixin/injection/code/MethodSlice.d.ts'
import type { MethodSlices } from '../../../../../../org/spongepowered/asm/mixin/injection/code/MethodSlices.d.ts'
import type { TargetSelectors$SelectedMethod } from '../../../../../../org/spongepowered/asm/mixin/injection/selectors/TargetSelectors$SelectedMethod.d.ts'
import type { InjectionNodes$InjectionNode } from '../../../../../../org/spongepowered/asm/mixin/injection/struct/InjectionNodes$InjectionNode.d.ts'
import type { InjectorGroupInfo } from '../../../../../../org/spongepowered/asm/mixin/injection/struct/InjectorGroupInfo.d.ts'
import type { SpecialMethodInfo } from '../../../../../../org/spongepowered/asm/mixin/struct/SpecialMethodInfo.d.ts'
import type { ActivityStack } from '../../../../../../org/spongepowered/asm/mixin/transformer/ActivityStack.d.ts'
import type { MixinTargetContext } from '../../../../../../org/spongepowered/asm/mixin/transformer/MixinTargetContext.d.ts'
import type { IAnnotatedElement } from '../../../../../../org/spongepowered/asm/util/asm/IAnnotatedElement.d.ts'
export abstract class InjectionInfo extends SpecialMethodInfo implements ISliceContext {
    static getDynamicInfo(paramarg0: Object): string;
    static getDynamicInfo(paramarg0: MethodNode): string;
    static getDynamicInfo(paramarg0: IAnnotatedElement): string;
    static getInjectorAnnotation(paramarg0: IMixinInfo, paramarg1: MethodNode): AnnotationNode;
    static getInjectorPrefix(paramarg0: AnnotationNode): string;
    static getRegisteredAnnotations(): Class<Annotation>[];
    static parse(paramarg0: MixinTargetContext, paramarg1: MethodNode): InjectionInfo;
    static register(paramarg0: Class<InjectionInfo>): void;
    constructor(arg0: MixinTargetContext, arg1: MethodNode, arg2: AnnotationNode)
    constructor(arg0: MixinTargetContext, arg1: MethodNode, arg2: AnnotationNode, arg3: string)
    // private activities: ActivityStack;
    // private atKey: string;
    // private expectedCallbackCount: number;
    // private group: InjectorGroupInfo;
    readonly injectedCallbackCount: number;
    // private injectedMethods: MethodNode[];
    // private injectionPointAnnotations: AnnotationNode[];
    // private injectionPoints: InjectionPoint[];
    // private injector: Injector;
    // private isStatic: boolean;
    // private maxCallbackCount: number;
    // private messages: string[];
    readonly order: number;
    // private requiredCallbackCount: number;
    // private slices: MethodSlices;
    targetCount: number;
    // private targetNodes: JavaMap<AbstractInsnNode[], InjectionNodes$InjectionNode[]>;
    // private targets: TargetSelectors$SelectedMethod[];
    addCallbackInvocation(arg0: MethodNode): void;
    addMessage(arg0: string, ...arg1: Object[]): void;
    addMethod(arg0: number, arg1: string, arg2: string): MethodNode;
    getDescription(): string;
    getInjectedCallbackCount(): number;
    getMessages(): string;
    getOrder(): number;
    getSlice(arg0: string): MethodSlice;
    getSliceId(arg0: string): string;
    getTargetCount(): number;
    inject(): void;
    isValid(): boolean;
    notifyInjected(arg0: AbstractInsnNode[]): void;
    parseInjectionPoints(arg0: AnnotationNode[]): void;
    parseInjector(arg0: AnnotationNode): Injector;
    parseOrder(): void;
    parseRequirements(): void;
    parseSelectors(): void;
    postInject(): void;
    preInject(): void;
    prepare(): void;
    readAnnotation(): void;
    readInjectionPoints(): void;
    toString(): string;
}