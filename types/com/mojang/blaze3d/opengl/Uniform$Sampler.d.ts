import type { Uniform } from '../../../../com/mojang/blaze3d/opengl/Uniform.d.ts'
import type { Record } from '../../../../java/lang/Record.d.ts'
import type { Object } from '../../../../java/lang/Object.d.ts'
export class Uniform$Sampler extends Record implements Uniform {
    // private location: number;
    // private samplerIndex: number;
    close(): void;
    equals(o: Object | null): boolean;
    hashCode(): number;
    location(): number;
    samplerIndex(): number;
    toString(): string;
}