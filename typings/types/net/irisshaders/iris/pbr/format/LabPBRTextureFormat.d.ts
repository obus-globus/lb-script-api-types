import type { Record } from '../../../../../java/lang/Record.d.ts'
import type { Object } from '../../../../../java/lang/Object.d.ts'
import type { TextureFormat } from '../../../../../net/irisshaders/iris/pbr/format/TextureFormat.d.ts'
import type { ChannelMipmapGenerator } from '../../../../../net/irisshaders/iris/pbr/mipmap/ChannelMipmapGenerator.d.ts'
import type { CustomMipmapGenerator } from '../../../../../net/irisshaders/iris/pbr/mipmap/CustomMipmapGenerator.d.ts'
import type { PBRType } from '../../../../../net/irisshaders/iris/pbr/texture/PBRType.d.ts'
import type { AbstractTexture } from '../../../../../net/minecraft/client/renderer/texture/AbstractTexture.d.ts'
export class LabPBRTextureFormat extends Record implements TextureFormat {
    static SPECULAR_MIPMAP_GENERATOR: ChannelMipmapGenerator;
    constructor(name: string, version: string)
    // private name: string;
    // private version: string;
    canInterpolateValues(arg0: PBRType): boolean;
    equals(arg0: Object | null): boolean;
    getDefines(): string[];
    getMipmapGenerator(arg0: PBRType): CustomMipmapGenerator;
    hashCode(): number;
    name(): string;
    setupTextureParameters(arg0: PBRType, arg1: AbstractTexture): void;
    toString(): string;
    version(): string;
}