import type { Object } from '../../../../../java/lang/Object.d.ts'
import type { Processor$Arch } from '../../../../../org/apache/commons/lang3/arch/Processor$Arch.d.ts'
import type { Processor$Type } from '../../../../../org/apache/commons/lang3/arch/Processor$Type.d.ts'
export class Processor extends Object {
    constructor(arg0: Processor$Arch, arg1: Processor$Type)
    readonly arch: Processor$Arch;
    readonly type: Processor$Type;
    getArch(): Processor$Arch;
    getType(): Processor$Type;
    is32Bit(): boolean;
    is64Bit(): boolean;
    isAarch64(): boolean;
    isIA64(): boolean;
    isPPC(): boolean;
    isRISCV(): boolean;
    isX86(): boolean;
    toString(): string;
}