import type { Object } from '../../../../../../java/lang/Object.d.ts'
import type { Type } from '../../../../../../org/objectweb/asm/Type.d.ts'
import type { IChainedDecoration } from '../../../../../../org/spongepowered/asm/mixin/injection/struct/IChainedDecoration.d.ts'
export class ArgOffsets extends Object implements IChainedDecoration<ArgOffsets> {
    static DEFAULT: ArgOffsets;
    static KEY: string;
    constructor(arg0: number, arg1: number)
    readonly length: number;
    // private next: ArgOffsets;
    // private offset: number;
    apply(arg0: Type[]): Type[];
    getArgIndex(arg0: number): number;
    getArgIndex(arg0: number, arg1: boolean): number;
    getEndIndex(): number;
    getLength(): number;
    getStartIndex(): number;
    isEmpty(): boolean;
    replace(arg0: ArgOffsets): void;
    toString(): string;
}