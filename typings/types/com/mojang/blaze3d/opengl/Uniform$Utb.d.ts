import type { Uniform } from '../../../../com/mojang/blaze3d/opengl/Uniform.d.ts'
import type { TextureFormat } from '../../../../com/mojang/blaze3d/textures/TextureFormat.d.ts'
import type { Record } from '../../../../java/lang/Record.d.ts'
import type { Object } from '../../../../java/lang/Object.d.ts'
export class Uniform$Utb extends Record implements Uniform {
    // private format: TextureFormat;
    // private location: number;
    // private samplerIndex: number;
    // private texture: number;
    close(): void;
    equals(o: Object | null): boolean;
    format(): TextureFormat;
    hashCode(): number;
    location(): number;
    samplerIndex(): number;
    texture(): number;
    toString(): string;
}