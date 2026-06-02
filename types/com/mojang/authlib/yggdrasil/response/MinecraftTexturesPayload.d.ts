import type { MinecraftProfileTexture } from '../../../../../com/mojang/authlib/minecraft/MinecraftProfileTexture.d.ts'
import type { MinecraftProfileTexture$Type } from '../../../../../com/mojang/authlib/minecraft/MinecraftProfileTexture$Type.d.ts'
import type { Record } from '../../../../../java/lang/Record.d.ts'
import type { UUID } from '../../../../../java/util/UUID.d.ts'
import type { Object } from '../../../../../java/lang/Object.d.ts'
export class MinecraftTexturesPayload extends Record {
    // private isPublic: boolean;
    // private profileId: UUID;
    // private profileName: string;
    // private textures: { [key in MinecraftProfileTexture$Type]: MinecraftProfileTexture };
    // private timestamp: number;
    equals(arg0: Object | null): boolean;
    hashCode(): number;
    isPublic(): boolean;
    profileId(): UUID;
    profileName(): string;
    textures(): { [key in MinecraftProfileTexture$Type]: MinecraftProfileTexture };
    timestamp(): number;
    toString(): string;
}