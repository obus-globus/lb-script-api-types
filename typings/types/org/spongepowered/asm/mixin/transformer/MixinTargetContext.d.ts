import type { Class } from '../../../../../java/lang/Class.d.ts'
import type { Annotation } from '../../../../../java/lang/annotation/Annotation.d.ts'
import type { Object } from '../../../../../java/lang/Object.d.ts'
import type { Iterator } from '../../../../../java/util/Iterator.d.ts'
import type { Map$Entry } from '../../../../../java/util/Map$Entry.d.ts'
import type { ConstantDynamic } from '../../../../../org/objectweb/asm/ConstantDynamic.d.ts'
import type { Handle } from '../../../../../org/objectweb/asm/Handle.d.ts'
import type { Type } from '../../../../../org/objectweb/asm/Type.d.ts'
import type { AbstractInsnNode } from '../../../../../org/objectweb/asm/tree/AbstractInsnNode.d.ts'
import type { AnnotationNode } from '../../../../../org/objectweb/asm/tree/AnnotationNode.d.ts'
import type { ClassNode } from '../../../../../org/objectweb/asm/tree/ClassNode.d.ts'
import type { FieldInsnNode } from '../../../../../org/objectweb/asm/tree/FieldInsnNode.d.ts'
import type { FieldNode } from '../../../../../org/objectweb/asm/tree/FieldNode.d.ts'
import type { InvokeDynamicInsnNode } from '../../../../../org/objectweb/asm/tree/InvokeDynamicInsnNode.d.ts'
import type { LdcInsnNode } from '../../../../../org/objectweb/asm/tree/LdcInsnNode.d.ts'
import type { MethodNode } from '../../../../../org/objectweb/asm/tree/MethodNode.d.ts'
import type { TypeInsnNode } from '../../../../../org/objectweb/asm/tree/TypeInsnNode.d.ts'
import type { Level } from '../../../../../org/spongepowered/asm/logging/Level.d.ts'
import type { MixinEnvironment } from '../../../../../org/spongepowered/asm/mixin/MixinEnvironment.d.ts'
import type { MixinEnvironment$Option } from '../../../../../org/spongepowered/asm/mixin/MixinEnvironment$Option.d.ts'
import type { IMixinInfo } from '../../../../../org/spongepowered/asm/mixin/extensibility/IMixinInfo.d.ts'
import type { AccessorInfo } from '../../../../../org/spongepowered/asm/mixin/gen/AccessorInfo.d.ts'
import type { InjectionInfo } from '../../../../../org/spongepowered/asm/mixin/injection/struct/InjectionInfo.d.ts'
import type { IMixinContext } from '../../../../../org/spongepowered/asm/mixin/refmap/IMixinContext.d.ts'
import type { IReferenceMapper } from '../../../../../org/spongepowered/asm/mixin/refmap/IReferenceMapper.d.ts'
import type { MemberRef } from '../../../../../org/spongepowered/asm/mixin/struct/MemberRef.d.ts'
import type { SourceMap$File } from '../../../../../org/spongepowered/asm/mixin/struct/SourceMap$File.d.ts'
import type { ActivityStack } from '../../../../../org/spongepowered/asm/mixin/transformer/ActivityStack.d.ts'
import type { ClassContext } from '../../../../../org/spongepowered/asm/mixin/transformer/ClassContext.d.ts'
import type { ClassInfo } from '../../../../../org/spongepowered/asm/mixin/transformer/ClassInfo.d.ts'
import type { ClassInfo$Field } from '../../../../../org/spongepowered/asm/mixin/transformer/ClassInfo$Field.d.ts'
import type { ClassInfo$Traversal } from '../../../../../org/spongepowered/asm/mixin/transformer/ClassInfo$Traversal.d.ts'
import type { MixinInfo } from '../../../../../org/spongepowered/asm/mixin/transformer/MixinInfo.d.ts'
import type { TargetClassContext } from '../../../../../org/spongepowered/asm/mixin/transformer/TargetClassContext.d.ts'
import type { Extensions } from '../../../../../org/spongepowered/asm/mixin/transformer/ext/Extensions.d.ts'
import type { Initialiser } from '../../../../../org/spongepowered/asm/mixin/transformer/struct/Initialiser.d.ts'
import type { ClassSignature } from '../../../../../org/spongepowered/asm/util/ClassSignature.d.ts'
export class MixinTargetContext extends ClassContext implements IMixinContext {
    constructor(arg0: MixinInfo, arg1: ClassNode, arg2: TargetClassContext)
    // private accessors: AccessorInfo[];
    // private activities: ActivityStack;
    readonly classNode: ClassNode;
    // private detachedSuper: boolean;
    // private inheritsFromMixin: boolean;
    // private initialiser: Initialiser;
    readonly injectorGroups: InjectorGroupInfo$Map;
    // private injectors: InjectionInfo[];
    // private innerClasses: { [key: string]: string };
    // private mergedMethods: MethodNode[];
    readonly minRequiredClassVersion: number;
    readonly mixin: MixinInfo;
    // private sessionId: string;
    // private shadowFields: Map<FieldNode, ClassInfo$Field>;
    // private shadowMethods: MethodNode[];
    readonly stratum: SourceMap$File;
    // private targetClass: TargetClassContext;
    readonly targetClassInfo: ClassInfo;
    addAccessorMethod(arg0: MethodNode, arg1: Class<Annotation>): void;
    addMixinField(arg0: FieldNode): void;
    addMixinMethod(arg0: MethodNode): void;
    addShadowField(arg0: FieldNode, arg1: ClassInfo$Field): void;
    addShadowMethod(arg0: MethodNode): void;
    applyInjections(arg0: number): void;
    applyPreInjections(): void;
    // private checkFinal(arg0: MethodNode, arg1: Iterator<AbstractInsnNode>, arg2: FieldInsnNode): void;
    fieldMerged(arg0: FieldNode): void;
    findField(arg0: FieldNode, arg1: AnnotationNode): FieldNode;
    // private findInitialiser(): Initialiser;
    findMethod(arg0: MethodNode, arg1: AnnotationNode): MethodNode;
    // private findRealType(arg0: ClassInfo): ClassInfo;
    findRemappedField(arg0: FieldNode): FieldNode;
    findRemappedMethod(arg0: MethodNode): MethodNode;
    generateAccessors(): MethodNode[];
    getClassInfo(): ClassInfo;
    getClassName(): string;
    getClassNode(): ClassNode;
    getClassRef(): string;
    // private getConstructor(): MethodNode;
    getDefaultInjectorGroup(): string;
    getDefaultRequiredInjections(): number;
    getEnvironment(): MixinEnvironment;
    getExtensions(): Extensions;
    getFields(): FieldNode[];
    getFirstInjectionInfo(): InjectionInfo;
    getInfo(): MixinInfo;
    getInitialiser(): Initialiser;
    getInjectorGroups(): InjectorGroupInfo$Map;
    getInjectorOrders(arg0: number[]): void;
    getInnerClasses(): { [key: string]: string };
    getInterfaces(): string[];
    getLoggingLevel(): Level;
    getMaxShiftByValue(): number;
    getMethods(): MethodNode[];
    getMinRequiredClassVersion(): number;
    getMixin(): IMixinInfo;
    getOption(arg0: MixinEnvironment$Option): boolean;
    getPriority(): number;
    getReferenceMapper(): IReferenceMapper;
    getShadowFields(): Map$Entry<FieldNode, ClassInfo$Field>[];
    getShadowMethods(): MethodNode[];
    getSignature(): ClassSignature;
    getSourceFile(): string;
    getStratum(): SourceMap$File;
    getTarget(): TargetClassContext;
    getTargetClassInfo(): ClassInfo;
    getTargetClassName(): string;
    getTargetClassNode(): ClassNode;
    getTargetClassRef(): string;
    getTargetMethod(arg0: MethodNode): AbstractInsnNode[];
    getUniqueName(arg0: FieldNode): string;
    getUniqueName(arg0: MethodNode, arg1: boolean): string;
    isRequired(): boolean;
    methodMerged(arg0: MethodNode): void;
    postApply(arg0: string, arg1: ClassNode): void;
    preApply(arg0: string, arg1: ClassNode): void;
    prepareInjections(): void;
    // private processImaginarySuper(arg0: MethodNode, arg1: FieldInsnNode): void;
    requireOverwriteAnnotations(): boolean;
    requireVersion(arg0: number): void;
    shouldSetSourceFile(): boolean;
    toString(): string;
    // private transformConstant(arg0: MethodNode, arg1: Iterator<AbstractInsnNode>, arg2: Object): Object;
    // private transformConstantNode(arg0: MethodNode, arg1: Iterator<AbstractInsnNode>, arg2: LdcInsnNode): void;
    // private transformDescriptor(arg0: Type): string;
    transformDescriptor(arg0: FieldNode): void;
    transformDescriptor(arg0: MethodNode): void;
    transformDescriptor(arg0: TypeInsnNode): void;
    transformDescriptor(arg0: MemberRef): void;
    // private transformDynamicConstant(arg0: MethodNode, arg1: Iterator<AbstractInsnNode>, arg2: ConstantDynamic): ConstantDynamic;
    // private transformFieldRef(arg0: MethodNode, arg1: Iterator<AbstractInsnNode>, arg2: MemberRef): void;
    // private transformHandle(arg0: MethodNode, arg1: Iterator<AbstractInsnNode>, arg2: Handle): Handle;
    // private transformInvokeDynamicNode(arg0: MethodNode, arg1: Iterator<AbstractInsnNode>, arg2: InvokeDynamicInsnNode): void;
    // private transformLVT(arg0: MethodNode): void;
    transformMethod(arg0: MethodNode): void;
    // private transformMethodDescriptor(arg0: string): string;
    // private transformMethodRef(arg0: MethodNode, arg1: Iterator<AbstractInsnNode>, arg2: MemberRef): void;
    // private transformSingleDescriptor(arg0: string, arg1: boolean): string;
    // private transformSingleDescriptor(arg0: Type): string;
    // private transformTypeNode(arg0: MethodNode, arg1: Iterator<AbstractInsnNode>, arg2: TypeInsnNode, arg3: AbstractInsnNode): void;
    // private updateBinding(arg0: MethodNode, arg1: MemberRef, arg2: ClassInfo$Traversal): void;
    // private updateDynamicBinding(arg0: MethodNode, arg1: MemberRef): void;
    // private updateStaticBinding(arg0: MethodNode, arg1: MemberRef): void;
    // private validateMethod(arg0: MethodNode): void;
}