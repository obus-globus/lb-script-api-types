import type { Handle } from '../../../../../org/objectweb/asm/Handle.d.ts'
import type { MemberRef } from '../../../../../org/spongepowered/asm/mixin/struct/MemberRef.d.ts'
export class MemberRef$Handle extends MemberRef {
    constructor(arg0: Handle)
    // private handle: Handle;
    getDesc(): string;
    getMethodHandle(): Handle;
    getName(): string;
    getOpcode(): number;
    getOwner(): string;
    isField(): boolean;
    setDesc(arg0: string): void;
    setHandle(arg0: number, arg1: string, arg2: string, arg3: string, arg4: boolean): void;
    setName(arg0: string): void;
    setOpcode(arg0: number): void;
    setOwner(arg0: string): void;
}