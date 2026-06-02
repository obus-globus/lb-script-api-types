import type { StackExtension } from '../../../../../com/llamalad7/mixinextras/injector/StackExtension.d.ts'
import type { ShareType } from '../../../../../com/llamalad7/mixinextras/sugar/impl/ShareType.d.ts'
import type { Object } from '../../../../../java/lang/Object.d.ts'
import type { Type } from '../../../../../org/objectweb/asm/Type.d.ts'
import type { AbstractInsnNode } from '../../../../../org/objectweb/asm/tree/AbstractInsnNode.d.ts'
import type { AnnotationNode } from '../../../../../org/objectweb/asm/tree/AnnotationNode.d.ts'
import type { MethodNode } from '../../../../../org/objectweb/asm/tree/MethodNode.d.ts'
import type { IMixinInfo } from '../../../../../org/spongepowered/asm/mixin/extensibility/IMixinInfo.d.ts'
export class ShareInfo extends Object {
    static getOrCreate(paramarg0: AbstractInsnNode[], paramarg1: AnnotationNode, paramarg2: Type, paramarg3: IMixinInfo, paramarg4: StackExtension): ShareInfo;
    private constructor(arg0: number, arg1: Type)
    // private initialization: E[];
    readonly lvtIndex: number;
    readonly shareType: ShareType;
    addToLvt(arg0: AbstractInsnNode[]): void;
    getLvtIndex(): number;
    getShareType(): ShareType;
    initialize(): AbstractInsnNode[];
    load(): AbstractInsnNode;
    setLvtIndex(arg0: number): void;
    stripInitializerFrom(arg0: MethodNode): void;
}