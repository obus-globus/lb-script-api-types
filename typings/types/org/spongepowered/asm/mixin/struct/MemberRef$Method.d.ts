import type { MethodInsnNode } from '../../../../../org/objectweb/asm/tree/MethodInsnNode.d.ts'
import type { MemberRef } from '../../../../../org/spongepowered/asm/mixin/struct/MemberRef.d.ts'
export class MemberRef$Method extends MemberRef {
    constructor(arg0: MethodInsnNode)
    insn: MethodInsnNode;
    getDesc(): string;
    getName(): string;
    getOpcode(): number;
    getOwner(): string;
    isField(): boolean;
    setDesc(arg0: string): void;
    setName(arg0: string): void;
    setOpcode(arg0: number): void;
    setOwner(arg0: string): void;
}