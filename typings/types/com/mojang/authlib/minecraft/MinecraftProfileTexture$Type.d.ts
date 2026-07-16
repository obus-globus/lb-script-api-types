import type { Class } from '../../../../java/lang/Class.d.ts'
import type { Enum } from '../../../../java/lang/Enum.d.ts'
export class MinecraftProfileTexture$Type extends Enum<MinecraftProfileTexture$Type> {
    static CAPE: MinecraftProfileTexture$Type;
    static ELYTRA: MinecraftProfileTexture$Type;
    static SKIN: MinecraftProfileTexture$Type;
    static valueOf<T extends Enum<T>>(paramarg0: Class<T>, paramarg1: string): T;
    static valueOf(paramarg0: string): MinecraftProfileTexture$Type;
    static values(): MinecraftProfileTexture$Type[];
    private constructor()
    name(): "SKIN" | "CAPE" | "ELYTRA";
}