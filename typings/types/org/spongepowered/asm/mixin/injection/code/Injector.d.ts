import type { Object } from '../../../../../../java/lang/Object.d.ts'
import type { Type } from '../../../../../../org/objectweb/asm/Type.d.ts'
import type { AbstractInsnNode } from '../../../../../../org/objectweb/asm/tree/AbstractInsnNode.d.ts'
import type { ClassNode } from '../../../../../../org/objectweb/asm/tree/ClassNode.d.ts'
import type { LabelNode } from '../../../../../../org/objectweb/asm/tree/LabelNode.d.ts'
import type { MethodNode } from '../../../../../../org/objectweb/asm/tree/MethodNode.d.ts'
import type { InjectionPoint } from '../../../../../../org/spongepowered/asm/mixin/injection/InjectionPoint.d.ts'
import type { InjectionPoint$RestrictTargetLevel } from '../../../../../../org/spongepowered/asm/mixin/injection/InjectionPoint$RestrictTargetLevel.d.ts'
import type { Injector$InjectorData } from '../../../../../../org/spongepowered/asm/mixin/injection/code/Injector$InjectorData.d.ts'
import type { Injector$TargetNode } from '../../../../../../org/spongepowered/asm/mixin/injection/code/Injector$TargetNode.d.ts'
import type { InjectorTarget } from '../../../../../../org/spongepowered/asm/mixin/injection/code/InjectorTarget.d.ts'
import type { InjectionInfo } from '../../../../../../org/spongepowered/asm/mixin/injection/struct/InjectionInfo.d.ts'
import type { InjectionNodes$InjectionNode } from '../../../../../../org/spongepowered/asm/mixin/injection/struct/InjectionNodes$InjectionNode.d.ts'
import type { Target$Extension } from '../../../../../../org/spongepowered/asm/mixin/injection/struct/Target$Extension.d.ts'
export abstract class Injector extends Object {
    static canCoerce(paramarg0: string, paramarg1: string): boolean;
    static canCoerce(paramarg0: Type, paramarg1: Type): boolean;
    constructor(arg0: InjectionInfo, arg1: string)
    // private annotationType: string;
    // private classNode: ClassNode;
    // private info: InjectionInfo;
    // private isInterface: boolean;
    // private isStatic: boolean;
    // private methodArgs: Type[];
    // private methodNode: MethodNode;
    // private returnType: Type;
    addTargetNode(arg0: InjectorTarget, arg1: InjectionNodes$InjectionNode[], arg2: AbstractInsnNode, arg3: InjectionPoint[]): void;
    addTargetNode(arg0: InjectorTarget, arg1: { [key: number]: Injector$TargetNode }, arg2: InjectionPoint, arg3: AbstractInsnNode): void;
    checkCoerce(arg0: number, arg1: Type, arg2: string, arg3: boolean): boolean;
    checkTargetForNode(arg0: AbstractInsnNode[], arg1: InjectionNodes$InjectionNode, arg2: InjectionPoint$RestrictTargetLevel): void;
    checkTargetModifiers(arg0: AbstractInsnNode[], arg1: boolean): void;
    find(arg0: InjectorTarget, arg1: InjectionPoint[]): InjectionNodes$InjectionNode[];
    // private findTargetNodes(arg0: InjectorTarget, arg1: InjectionPoint[]): Injector$TargetNode[];
    findTargetNodes(arg0: InjectorTarget, arg1: InjectionPoint, arg2: AbstractInsnNode[]): boolean;
    inject(arg0: AbstractInsnNode[], arg1: InjectionNodes$InjectionNode[]): void;
    inject(arg0: AbstractInsnNode[], arg1: InjectionNodes$InjectionNode): void;
    invokeHandler(arg0: AbstractInsnNode[]): AbstractInsnNode;
    invokeHandler(arg0: AbstractInsnNode[], arg1: MethodNode): AbstractInsnNode;
    invokeHandlerWithArgs(arg0: Type[], arg1: AbstractInsnNode[], arg2: number[]): AbstractInsnNode;
    invokeHandlerWithArgs(arg0: Type[], arg1: AbstractInsnNode[], arg2: number[], arg3: number, arg4: number): AbstractInsnNode;
    postInject(arg0: AbstractInsnNode[], arg1: InjectionNodes$InjectionNode): void;
    preInject(arg0: AbstractInsnNode[], arg1: InjectionNodes$InjectionNode[]): void;
    preInject(arg0: AbstractInsnNode[], arg1: InjectionNodes$InjectionNode): void;
    pushArgs(arg0: Type[], arg1: AbstractInsnNode[], arg2: number[], arg3: number, arg4: number): void;
    pushArgs(arg0: Type[], arg1: AbstractInsnNode[], arg2: number[], arg3: number, arg4: number, arg5: Target$Extension): void;
    sanityCheck(arg0: AbstractInsnNode[], arg1: InjectionPoint[]): void;
    storeArgs(arg0: AbstractInsnNode[], arg1: Type[], arg2: AbstractInsnNode[], arg3: number): number[];
    storeArgs(arg0: AbstractInsnNode[], arg1: Type[], arg2: AbstractInsnNode[], arg3: number, arg4: LabelNode, arg5: LabelNode): number[];
    storeArgs(arg0: AbstractInsnNode[], arg1: Type[], arg2: AbstractInsnNode[], arg3: number[], arg4: number, arg5: number): void;
    storeArgs(arg0: AbstractInsnNode[], arg1: Type[], arg2: AbstractInsnNode[], arg3: number[], arg4: number, arg5: number, arg6: LabelNode, arg7: LabelNode): void;
    throwException(arg0: AbstractInsnNode[], arg1: Target$Extension, arg2: string, arg3: string): void;
    toString(): string;
    validateParams(arg0: Injector$InjectorData, arg1: Type, ...arg2: Type[]): void;
}