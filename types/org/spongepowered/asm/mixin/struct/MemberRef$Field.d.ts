import type { FieldInsnNode } from '../../../../../org/objectweb/asm/tree/FieldInsnNode.d.ts'
import type { MemberRef } from '../../../../../org/spongepowered/asm/mixin/struct/MemberRef.d.ts'
export class MemberRef$Field extends MemberRef {
    constructor(arg0: FieldInsnNode)
    insn: FieldInsnNode;
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