import type { Uniform } from '../../../../com/mojang/blaze3d/opengl/Uniform.d.ts'
import type { Record } from '../../../../java/lang/Record.d.ts'
import type { Object } from '../../../../java/lang/Object.d.ts'
export class Uniform$Ubo extends Record implements Uniform {
    constructor(blockBinding: number)
    // private blockBinding: number;
    blockBinding(): number;
    close(): void;
    equals(o: Object | null): boolean;
    hashCode(): number;
    toString(): string;
}