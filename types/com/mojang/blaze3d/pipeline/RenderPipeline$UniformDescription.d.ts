import type { UniformType } from '../../../../com/mojang/blaze3d/shaders/UniformType.d.ts'
import type { TextureFormat } from '../../../../com/mojang/blaze3d/textures/TextureFormat.d.ts'
import type { Record } from '../../../../java/lang/Record.d.ts'
import type { Object } from '../../../../java/lang/Object.d.ts'
export class RenderPipeline$UniformDescription extends Record {
    constructor(name: string, type: UniformType)
    constructor(name: string, type: UniformType, textureFormat: TextureFormat)
    constructor(name: string, textureFormat: TextureFormat)
    // private name: string;
    // private textureFormat: TextureFormat;
    // private type: UniformType;
    equals(o: Object | null): boolean;
    hashCode(): number;
    name(): string;
    textureFormat(): TextureFormat;
    toString(): string;
    type(): UniformType;
}