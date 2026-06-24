import type { Object } from '../../../../../../java/lang/Object.d.ts'
import type { AbstractInsnNode } from '../../../../../../org/objectweb/asm/tree/AbstractInsnNode.d.ts'
import type { VarInsnNode } from '../../../../../../org/objectweb/asm/tree/VarInsnNode.d.ts'
import type { BeforeLoadLocal } from '../../../../../../org/spongepowered/asm/mixin/injection/modify/BeforeLoadLocal.d.ts'
import type { InjectionInfo } from '../../../../../../org/spongepowered/asm/mixin/injection/struct/InjectionInfo.d.ts'
export class BeforeLoadLocal$SearchState extends Object {
    constructor(null_: BeforeLoadLocal)
    // private currentOrdinal: number;
    // private found: boolean;
    // private pendingCheck: boolean;
    // private print: boolean;
    // private varNode: VarInsnNode;
    check(arg0: InjectionInfo, arg1: AbstractInsnNode[], arg2: AbstractInsnNode[], arg3: AbstractInsnNode): void;
    isPendingCheck(): boolean;
    register(arg0: VarInsnNode): void;
    setPendingCheck(): void;
    success(): boolean;
}