import type { JavaMap } from '../../../../../JavaMap.d.ts'
import type { Object } from '../../../../../java/lang/Object.d.ts'
import type { AbstractInsnNode } from '../../../../../org/objectweb/asm/tree/AbstractInsnNode.d.ts'
import type { ClassNode } from '../../../../../org/objectweb/asm/tree/ClassNode.d.ts'
import type { FieldNode } from '../../../../../org/objectweb/asm/tree/FieldNode.d.ts'
import type { MethodNode } from '../../../../../org/objectweb/asm/tree/MethodNode.d.ts'
import type { MixinEnvironment } from '../../../../../org/spongepowered/asm/mixin/MixinEnvironment.d.ts'
import type { SourceMap } from '../../../../../org/spongepowered/asm/mixin/struct/SourceMap.d.ts'
import type { ClassContext } from '../../../../../org/spongepowered/asm/mixin/transformer/ClassContext.d.ts'
import type { ClassInfo } from '../../../../../org/spongepowered/asm/mixin/transformer/ClassInfo.d.ts'
import type { MixinApplicatorStandard } from '../../../../../org/spongepowered/asm/mixin/transformer/MixinApplicatorStandard.d.ts'
import type { MixinInfo } from '../../../../../org/spongepowered/asm/mixin/transformer/MixinInfo.d.ts'
import type { Extensions } from '../../../../../org/spongepowered/asm/mixin/transformer/ext/Extensions.d.ts'
import type { ITargetClassContext } from '../../../../../org/spongepowered/asm/mixin/transformer/ext/ITargetClassContext.d.ts'
import type { InvalidMixinException } from '../../../../../org/spongepowered/asm/mixin/transformer/throwables/InvalidMixinException.d.ts'
import type { ClassSignature } from '../../../../../org/spongepowered/asm/util/ClassSignature.d.ts'
import type { Profiler } from '../../../../../org/spongepowered/asm/util/perf/Profiler.d.ts'
export class TargetClassContext extends ClassContext implements ITargetClassContext {
    constructor(arg0: MixinEnvironment, arg1: Extensions, arg2: string, arg3: string, arg4: ClassNode, arg5: MixinInfo[])
    // private applied: boolean;
    readonly classInfo: ClassInfo;
    // private className: string;
    readonly classNode: ClassNode;
    // private env: MixinEnvironment;
    // private export: boolean;
    // private extensions: Extensions;
    // private forceExport: boolean;
    // private mixinFields: FieldNode[];
    // private mixinMethods: MethodNode[];
    // private mixins: MixinInfo[];
    // private profiler: Profiler;
    // private sessionId: string;
    // private signature: ClassSignature;
    // private sourceMap: SourceMap;
    // private suppressedExceptions: InvalidMixinException[];
    // private targetMethods: JavaMap<string, AbstractInsnNode[]>;
    addMixinField(arg0: FieldNode): void;
    addMixinMethod(arg0: MethodNode): void;
    addSuppressed(arg0: InvalidMixinException): void;
    // private apply(): void;
    applyMixins(): void;
    // private applySignature(): void;
    // private checkMerges(): void;
    // private createApplicator(): MixinApplicatorStandard;
    fieldMerged(arg0: FieldNode): void;
    findAliasedField(arg0: string[], arg1: string): FieldNode;
    // private findAliasedField(arg0: string[], arg1: string, arg2: boolean): FieldNode;
    findAliasedMethod(arg0: string[], arg1: string): MethodNode;
    // private findAliasedMethod(arg0: string[], arg1: string, arg2: boolean): MethodNode;
    findField(arg0: string[], arg1: string): FieldNode;
    findMethod(arg0: string[], arg1: string): MethodNode;
    getClassInfo(): ClassInfo;
    getClassName(): string;
    getClassNode(): ClassNode;
    getClassRef(): string;
    getConstructors(): (Object | null)[][];
    getExtensions(): Extensions;
    getSessionId(): string;
    getSourceMap(): SourceMap;
    getSuppressedExceptions(): InvalidMixinException[];
    getTargetMethod(arg0: MethodNode): AbstractInsnNode[];
    isExportForced(): boolean;
    isExported(): boolean;
    mergeSignature(arg0: ClassSignature): void;
    methodMerged(arg0: MethodNode): void;
    // private postApply(): void;
    // private preApply(): void;
    processDebugTasks(): void;
    toString(): string;
}