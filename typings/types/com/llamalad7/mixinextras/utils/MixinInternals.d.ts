import type { Pair } from '../../../../com/llamalad7/mixinextras/lib/apache/commons/tuple/Pair.d.ts'
import type { Class } from '../../../../java/lang/Class.d.ts'
import type { Object } from '../../../../java/lang/Object.d.ts'
import type { AbstractInsnNode } from '../../../../org/objectweb/asm/tree/AbstractInsnNode.d.ts'
import type { ClassNode } from '../../../../org/objectweb/asm/tree/ClassNode.d.ts'
import type { IMixinInfo } from '../../../../org/spongepowered/asm/mixin/extensibility/IMixinInfo.d.ts'
import type { InjectionPoint } from '../../../../org/spongepowered/asm/mixin/injection/InjectionPoint.d.ts'
import type { Injector } from '../../../../org/spongepowered/asm/mixin/injection/code/Injector.d.ts'
import type { InjectionInfo } from '../../../../org/spongepowered/asm/mixin/injection/struct/InjectionInfo.d.ts'
import type { InjectionNodes$InjectionNode } from '../../../../org/spongepowered/asm/mixin/injection/struct/InjectionNodes$InjectionNode.d.ts'
import type { Extensions } from '../../../../org/spongepowered/asm/mixin/transformer/ext/Extensions.d.ts'
import type { IExtension } from '../../../../org/spongepowered/asm/mixin/transformer/ext/IExtension.d.ts'
import type { ITargetClassContext } from '../../../../org/spongepowered/asm/mixin/transformer/ext/ITargetClassContext.d.ts'
export class MixinInternals extends Object {
    static getDecorations(paramarg0: InjectionNodes$InjectionNode): { [key: string]: Object };
    static getExtensions(): Extensions;
    static getInjector(paramarg0: InjectionInfo): Injector;
    static getMixinsFor(paramarg0: ITargetClassContext): Pair<IMixinInfo, ClassNode>[];
    static getTargets(paramarg0: InjectionInfo): Map<AbstractInsnNode[], InjectionNodes$InjectionNode[]>;
    static registerClassInfo(paramarg0: ClassNode): void;
    static registerExtension(paramarg0: IExtension): void;
    static registerExtension(paramarg0: IExtension, paramarg1: boolean): void;
    static registerInjectionPoint(paramarg0: Class<InjectionPoint>): void;
    static registerInjector(paramarg0: string, paramarg1: Class<Object>): void;
    static unregisterExtension(paramarg0: IExtension): void;
    static unregisterInjector(paramarg0: string): void;
    constructor()
}