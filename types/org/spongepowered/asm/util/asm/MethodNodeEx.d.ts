import type { MethodNode } from '../../../../../org/objectweb/asm/tree/MethodNode.d.ts'
import type { IMixinInfo } from '../../../../../org/spongepowered/asm/mixin/extensibility/IMixinInfo.d.ts'
export class MethodNodeEx extends MethodNode {
    static getName(paramarg0: MethodNode): string;
    constructor(arg0: number, arg1: string, arg2: string, arg3: string, arg4: string[], arg5: IMixinInfo)
    readonly originalName: string;
    readonly owner: IMixinInfo;
    getOriginalName(): string;
    getOwner(): IMixinInfo;
    getQualifiedName(): string;
    toString(): string;
}