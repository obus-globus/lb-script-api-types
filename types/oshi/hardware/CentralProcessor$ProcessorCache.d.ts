import type { Object } from '../../java/lang/Object.d.ts'
import type { CentralProcessor$ProcessorCache$Type } from '../../oshi/hardware/CentralProcessor$ProcessorCache$Type.d.ts'
export class CentralProcessor$ProcessorCache extends Object {
    constructor(arg0: number, arg1: number, arg2: number, arg3: number, arg4: CentralProcessor$ProcessorCache$Type)
    constructor(arg0: number, arg1: number, arg2: number, arg3: number, arg4: CentralProcessor$ProcessorCache$Type)
    readonly associativity: number;
    readonly cacheSize: number;
    readonly level: number;
    readonly lineSize: number;
    readonly type: CentralProcessor$ProcessorCache$Type;
    equals(arg0: Object | null): boolean;
    getAssociativity(): number;
    getCacheSize(): number;
    getLevel(): number;
    getLineSize(): number;
    getType(): CentralProcessor$ProcessorCache$Type;
    hashCode(): number;
    toString(): string;
}