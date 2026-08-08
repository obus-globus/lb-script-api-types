import type { Record } from '../../../../../java/lang/Record.d.ts'
import type { Object } from '../../../../../java/lang/Object.d.ts'
import type { TextureSetup } from '../../../../../net/minecraft/client/gui/render/TextureSetup.d.ts'
/**
 * Result of one LUT allocation for a single circle draw.
 *
 * @property row Row index in the LUT texture.
 * @property textureSetup Texture binding that should be passed to GUI render state.
 *
 * Source: {@link https://github.com/CCBlueX/LiquidBounce/blob/177e1582d6f271ebe95911c43b6987f81dca51f8/src/main/kotlin/net/ccbluex/liquidbounce/render/gui/GuiCircleLutAtlas.kt#L60 | src/main/kotlin/net/ccbluex/liquidbounce/render/gui/GuiCircleLutAtlas.kt:60}
 */
export class GuiCircleLutAtlas$Allocation extends Record {
    constructor(row: number, textureSetup: TextureSetup)
    // private row: number;
    /*not mapped: */ row(): number;
    // private textureSetup: TextureSetup;
    /*not mapped: */ textureSetup(): TextureSetup;
    component1(): number;
    component2(): TextureSetup;
    copy(row: number, textureSetup: TextureSetup): GuiCircleLutAtlas$Allocation;
    equals(other: Object | null): boolean;
    hashCode(): number;
    toString(): string;
}