import type { SignatureState } from '../../../../com/mojang/authlib/SignatureState.d.ts'
import type { MinecraftProfileTexture } from '../../../../com/mojang/authlib/minecraft/MinecraftProfileTexture.d.ts'
import type { Record } from '../../../../java/lang/Record.d.ts'
import type { Object } from '../../../../java/lang/Object.d.ts'
export class MinecraftProfileTextures extends Record {
    static EMPTY: MinecraftProfileTextures;
    constructor(skin: MinecraftProfileTexture, cape: MinecraftProfileTexture, elytra: MinecraftProfileTexture, signatureState: SignatureState)
    // private cape: MinecraftProfileTexture;
    // private elytra: MinecraftProfileTexture;
    // private signatureState: SignatureState;
    // private skin: MinecraftProfileTexture;
    cape(): MinecraftProfileTexture;
    elytra(): MinecraftProfileTexture;
    equals(arg0: Object | null): boolean;
    hashCode(): number;
    signatureState(): SignatureState;
    skin(): MinecraftProfileTexture;
    toString(): string;
}