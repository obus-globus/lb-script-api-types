import type { Record } from '../../../java/lang/Record.d.ts'
import type { Object } from '../../../java/lang/Object.d.ts'
import type { ClientAsset$Texture } from '../../../net/minecraft/core/ClientAsset$Texture.d.ts'
import type { Identifier } from '../../../net/minecraft/resources/Identifier.d.ts'
export class ClientAsset$DownloadedTexture extends Record implements ClientAsset$Texture {
    constructor(texturePath: Identifier, url: string)
    // private texturePath: Identifier;
    // private url: string;
    equals(o: Object | null): boolean;
    hashCode(): number;
    id(): Identifier;
    texturePath(): Identifier;
    toString(): string;
    url(): string;
}