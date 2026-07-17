import type { JavaMap } from '../../../../../../JavaMap.d.ts'
import type { Object } from '../../../../../../java/lang/Object.d.ts'
import type { Type } from '../../../../../../org/objectweb/asm/Type.d.ts'
import type { AbstractInsnNode } from '../../../../../../org/objectweb/asm/tree/AbstractInsnNode.d.ts'
import type { MethodNode } from '../../../../../../org/objectweb/asm/tree/MethodNode.d.ts'
import type { InjectionPoint } from '../../../../../../org/spongepowered/asm/mixin/injection/InjectionPoint.d.ts'
import type { LocalCapture } from '../../../../../../org/spongepowered/asm/mixin/injection/callback/LocalCapture.d.ts'
import type { Injector } from '../../../../../../org/spongepowered/asm/mixin/injection/code/Injector.d.ts'
import type { Injector$TargetNode } from '../../../../../../org/spongepowered/asm/mixin/injection/code/Injector$TargetNode.d.ts'
import type { InjectorTarget } from '../../../../../../org/spongepowered/asm/mixin/injection/code/InjectorTarget.d.ts'
import type { InjectionInfo } from '../../../../../../org/spongepowered/asm/mixin/injection/struct/InjectionInfo.d.ts'
import type { InjectionNodes$InjectionNode } from '../../../../../../org/spongepowered/asm/mixin/injection/struct/InjectionNodes$InjectionNode.d.ts'
export class CallbackInjector extends Injector {
    static canCoerce(paramarg0: string, paramarg1: string): boolean;
    static canCoerce(paramarg0: Type, paramarg1: Type): boolean;
    constructor(arg0: InjectionInfo, arg1: boolean, arg2: LocalCapture, arg3: string)
    // private callbackInfoClass: string;
    // private callbackInfoVar: number;
    // private cancellable: boolean;
    // private identifier: string;
    // private ids: JavaMap<number, string>;
    // private lastDesc: string;
    // private lastId: string;
    // private lastTarget: AbstractInsnNode[];
    // private localCapture: LocalCapture;
    // private totalInjections: number;
    addTargetNode(arg0: InjectorTarget, arg1: InjectionNodes$InjectionNode[], arg2: AbstractInsnNode, arg3: InjectionPoint[]): void;
    addTargetNode(arg0: InjectorTarget, arg1: JavaMap<number, Injector$TargetNode>, arg2: InjectionPoint, arg3: AbstractInsnNode): void;
    // private createCallbackInfo(arg0: (Object | null)[], arg1: boolean): void;
    // private dupReturnValue(arg0: (Object | null)[]): void;
    // private generateBadLVTMessage(arg0: (Object | null)[]): string;
    // private generateErrorMethod(arg0: (Object | null)[], arg1: string, arg2: string): MethodNode;
    // private getIdentifier(arg0: (Object | null)[]): string;
    // private inject(arg0: (Object | null)[]): void;
    inject(arg0: AbstractInsnNode[], arg1: InjectionNodes$InjectionNode[]): void;
    inject(arg0: AbstractInsnNode[], arg1: InjectionNodes$InjectionNode): void;
    injectCancellationCode(arg0: (Object | null)[]): void;
    injectReturnCode(arg0: (Object | null)[]): void;
    instanceCallbackInfo(arg0: (Object | null)[], arg1: string, arg2: string, arg3: boolean): void;
    // private invokeCallback(arg0: (Object | null)[], arg1: MethodNode): void;
    isStatic(): boolean;
    // private loadOrCreateCallbackInfo(arg0: (Object | null)[]): void;
    preInject(arg0: AbstractInsnNode[], arg1: InjectionNodes$InjectionNode[]): void;
    preInject(arg0: AbstractInsnNode[], arg1: InjectionNodes$InjectionNode): void;
    // private printLocals(arg0: (Object | null)[]): void;
    sanityCheck(arg0: AbstractInsnNode[], arg1: InjectionPoint[]): void;
}