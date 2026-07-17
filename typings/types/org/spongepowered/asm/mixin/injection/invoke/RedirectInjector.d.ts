import type { JavaMap } from '../../../../../../JavaMap.d.ts'
import type { Type } from '../../../../../../org/objectweb/asm/Type.d.ts'
import type { AbstractInsnNode } from '../../../../../../org/objectweb/asm/tree/AbstractInsnNode.d.ts'
import type { TypeInsnNode } from '../../../../../../org/objectweb/asm/tree/TypeInsnNode.d.ts'
import type { InjectionPoint } from '../../../../../../org/spongepowered/asm/mixin/injection/InjectionPoint.d.ts'
import type { Injector$TargetNode } from '../../../../../../org/spongepowered/asm/mixin/injection/code/Injector$TargetNode.d.ts'
import type { InjectorTarget } from '../../../../../../org/spongepowered/asm/mixin/injection/code/InjectorTarget.d.ts'
import type { InvokeInjector } from '../../../../../../org/spongepowered/asm/mixin/injection/invoke/InvokeInjector.d.ts'
import type { RedirectInjector$ConstructorRedirectData } from '../../../../../../org/spongepowered/asm/mixin/injection/invoke/RedirectInjector$ConstructorRedirectData.d.ts'
import type { RedirectInjector$Meta } from '../../../../../../org/spongepowered/asm/mixin/injection/invoke/RedirectInjector$Meta.d.ts'
import type { RedirectInjector$RedirectedFieldData } from '../../../../../../org/spongepowered/asm/mixin/injection/invoke/RedirectInjector$RedirectedFieldData.d.ts'
import type { BeforeNew } from '../../../../../../org/spongepowered/asm/mixin/injection/points/BeforeNew.d.ts'
import type { InjectionInfo } from '../../../../../../org/spongepowered/asm/mixin/injection/struct/InjectionInfo.d.ts'
import type { InjectionNodes$InjectionNode } from '../../../../../../org/spongepowered/asm/mixin/injection/struct/InjectionNodes$InjectionNode.d.ts'
import type { Target$Extension } from '../../../../../../org/spongepowered/asm/mixin/injection/struct/Target$Extension.d.ts'
export class RedirectInjector extends InvokeInjector {
    static canCoerce(paramarg0: string, paramarg1: string): boolean;
    static canCoerce(paramarg0: Type, paramarg1: Type): boolean;
    constructor(arg0: InjectionInfo)
    constructor(arg0: InjectionInfo, arg1: string)
    // private ctorRedirectors: JavaMap<BeforeNew, RedirectInjector$ConstructorRedirectData>;
    // private meta: RedirectInjector$Meta;
    addTargetNode(arg0: InjectorTarget, arg1: InjectionNodes$InjectionNode[], arg2: AbstractInsnNode, arg3: InjectionPoint[]): void;
    addTargetNode(arg0: InjectorTarget, arg1: JavaMap<number, Injector$TargetNode>, arg2: InjectionPoint, arg3: AbstractInsnNode): void;
    // private checkIsAssignableFrom(arg0: AbstractInsnNode[], arg1: Target$Extension): void;
    checkTarget(arg0: AbstractInsnNode[]): void;
    // private doNullCheck(arg0: AbstractInsnNode[], arg1: Target$Extension, arg2: string, arg3: string): void;
    // private getCtorRedirect(arg0: BeforeNew): RedirectInjector$ConstructorRedirectData;
    inject(arg0: AbstractInsnNode[], arg1: InjectionNodes$InjectionNode[]): void;
    inject(arg0: AbstractInsnNode[], arg1: InjectionNodes$InjectionNode): void;
    // private injectArrayRedirect(arg0: RedirectInjector$RedirectedFieldData, arg1: AbstractInsnNode, arg2: string): void;
    // private injectAtArrayField(arg0: RedirectInjector$RedirectedFieldData, arg1: number, arg2: number): void;
    injectAtConstructor(arg0: AbstractInsnNode[], arg1: InjectionNodes$InjectionNode): void;
    // private injectAtFieldAccess(arg0: AbstractInsnNode[], arg1: InjectionNodes$InjectionNode): void;
    // private injectAtGetArray(arg0: RedirectInjector$RedirectedFieldData, arg1: AbstractInsnNode): void;
    // private injectAtGetField(arg0: RedirectInjector$RedirectedFieldData, arg1: AbstractInsnNode[]): AbstractInsnNode;
    injectAtInstanceOf(arg0: AbstractInsnNode[], arg1: TypeInsnNode): void;
    injectAtInstanceOf(arg0: AbstractInsnNode[], arg1: InjectionNodes$InjectionNode): void;
    injectAtInvoke(arg0: AbstractInsnNode[], arg1: InjectionNodes$InjectionNode): void;
    // private injectAtPutField(arg0: RedirectInjector$RedirectedFieldData, arg1: AbstractInsnNode[]): AbstractInsnNode;
    // private injectAtScalarField(arg0: RedirectInjector$RedirectedFieldData): void;
    // private injectAtSetArray(arg0: RedirectInjector$RedirectedFieldData, arg1: AbstractInsnNode): void;
    postInject(arg0: AbstractInsnNode[], arg1: InjectionNodes$InjectionNode): void;
    preInject(arg0: InjectionNodes$InjectionNode): boolean;
    preInject(arg0: AbstractInsnNode[], arg1: InjectionNodes$InjectionNode[]): void;
    preInject(arg0: AbstractInsnNode[], arg1: InjectionNodes$InjectionNode): void;
    // private redirectInstanceOf(arg0: AbstractInsnNode[], arg1: TypeInsnNode, arg2: boolean): void;
}