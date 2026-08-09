import type { Record } from '../../../../../java/lang/Record.d.ts'
import type { Object } from '../../../../../java/lang/Object.d.ts'
import type { TextureSetup } from '../../../../../net/minecraft/client/gui/render/TextureSetup.d.ts'
/**
 * Represents a texture used by the browser.
 *
 * @param textureSetup The texture setup object.
 * @param width The width of the texture.
 * @param height The height of the texture.
 * @param bgra Whether the texture is in BGRA format (true) or RGBA format (false).
 *
 * Source: {@link https://github.com/CCBlueX/LiquidBounce/blob/8fc1f12b34c50f483c3b3446c45e8bc1de58e20c/src/main/kotlin/net/ccbluex/liquidbounce/integration/backend/BrowserTexture.kt#L31 | src/main/kotlin/net/ccbluex/liquidbounce/integration/backend/BrowserTexture.kt:31}
 */
export class BrowserTexture extends Record {
    constructor(textureSetup: TextureSetup, width: number, height: number, bgra: boolean)
    // private bgra: boolean;
    /*not mapped: */ bgra(): boolean;
    // private height: number;
    /*not mapped: */ height(): number;
    // private textureSetup: TextureSetup;
    /*not mapped: */ textureSetup(): TextureSetup;
    // private width: number;
    /*not mapped: */ width(): number;
    component1(): TextureSetup;
    component2(): number;
    component3(): number;
    component4(): boolean;
    copy(textureSetup: TextureSetup, width: number, height: number, bgra: boolean): BrowserTexture;
    equals(other: Object | null): boolean;
    hashCode(): number;
    toString(): string;
}