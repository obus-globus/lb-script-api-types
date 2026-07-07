import type { Color } from '../../../../../../java/awt/Color.d.ts'
import type { Record } from '../../../../../../java/lang/Record.d.ts'
import type { ToIntFunction } from '../../../../../../java/util/function/ToIntFunction.d.ts'
import type { Object } from '../../../../../../java/lang/Object.d.ts'
import type { HexFormat } from '../../../../../../kotlin/text/HexFormat.d.ts'
import type { Color4b$Companion } from '../../../../../../net/ccbluex/liquidbounce/render/engine/type/Color4b$Companion.d.ts'
import type { TextColor } from '../../../../../../net/minecraft/network/chat/TextColor.d.ts'
import type { DyeColor } from '../../../../../../net/minecraft/world/item/DyeColor.d.ts'
import type { Vector3f } from '../../../../../../org/joml/Vector3f.d.ts'
import type { Vector4f } from '../../../../../../org/joml/Vector4f.d.ts'
export class Color4b extends Record {
    static BLACK: Color4b;
    static BLUE: Color4b;
    static CYAN: Color4b;
    static Companion: Color4b$Companion;
    static DARK_GRAY: Color4b;
    static DEFAULT_BG_COLOR: Color4b;
    static GRAY: Color4b;
    static GREEN: Color4b;
    static LIGHT_GRAY: Color4b;
    static LIQUID_BOUNCE: Color4b;
    static MAGENTA: Color4b;
    static ORANGE: Color4b;
    static PINK: Color4b;
    static PURPLE: Color4b;
    static RED: Color4b;
    static TRANSPARENT: Color4b;
    static WHITE: Color4b;
    static YELLOW: Color4b;
    /**
     * Create a color from a hex string.
     *
     * @param hex The hex string. Can be in the format of "#RRGGBB" or "#AARRGGBB". (Prefix '#' is optional)
     * @returns @throws IllegalArgumentException If the hex string is invalid.
     *
     * Source: {@link https://github.com/CCBlueX/LiquidBounce/blob/fc8688f1fc8b0c8dfed8d3dc547a47ad55374af5/src/main/kotlin/net/ccbluex/liquidbounce/render/engine/type/Color4b.kt#L98 | src/main/kotlin/net/ccbluex/liquidbounce/render/engine/type/Color4b.kt:98}
     */
    static fromHex(hex: string): Color4b;
    /**
     * Creates a color with full alpha (255).
     *
     * Source: {@link https://github.com/CCBlueX/LiquidBounce/blob/fc8688f1fc8b0c8dfed8d3dc547a47ad55374af5/src/main/kotlin/net/ccbluex/liquidbounce/render/engine/type/Color4b.kt#L144 | src/main/kotlin/net/ccbluex/liquidbounce/render/engine/type/Color4b.kt:144}
     */
    static fullAlpha(rgb: number): Color4b;
    /**
     * Create a color from HSB values.
     *
     * @param hue The hue value (0.0 to 1.0)
     * @param saturation The saturation value (0.0 to 1.0)
     * @param brightness The brightness value (0.0 to 1.0)
     * @param alpha The alpha value (0.0 to 1.0)
     * @returns The color
     *
     * Source: {@link https://github.com/CCBlueX/LiquidBounce/blob/fc8688f1fc8b0c8dfed8d3dc547a47ad55374af5/src/main/kotlin/net/ccbluex/liquidbounce/render/engine/type/Color4b.kt#L124 | src/main/kotlin/net/ccbluex/liquidbounce/render/engine/type/Color4b.kt:124}
     */
    static ofHSB(paramarg0: number, paramarg1: number, paramarg2: number): Color4b;
    static ofHSB(hue: number, saturation: number, brightness: number, alpha: number): Color4b;
    constructor(color: Color)
    constructor(argb: number)
    constructor(r: number, g: number, b: number, a: number)
    /*not mapped: */ a(): number;
    // private argb: number;
    /*not mapped: */ argb(): number;
    /*not mapped: */ b(): number;
    /*not mapped: */ g(): number;
    /*not mapped: */ isTransparent(): boolean;
    /*not mapped: */ r(): number;
    alpha(alpha: number): Color4b;
    component1(): number;
    copy(argb: number): Color4b;
    darker(): Color4b;
    // private darkerChannel(value: number): number;
    equals(other: Object | null): boolean;
    fade(fade: number): Color4b;
    hashCode(): number;
    /**
     * Interpolates this color with another color using the given percentage.
     *
     * @param other The color to interpolate to
     * @param percentage The percentage of interpolation (0.0 to 1.0)
     * @returns The interpolated color
     *
     * Source: {@link https://github.com/CCBlueX/LiquidBounce/blob/fc8688f1fc8b0c8dfed8d3dc547a47ad55374af5/src/main/kotlin/net/ccbluex/liquidbounce/render/engine/type/Color4b.kt#L189 | src/main/kotlin/net/ccbluex/liquidbounce/render/engine/type/Color4b.kt:189}
     */
    interpolateTo(other: Color4b, percentage: number): Color4b;
    interpolateTo(other: Color4b, tR: number, tG: number, tB: number, tA: number): Color4b;
    /**
     * @deprecated Replaced with Color4b.argb Use `this.argb`.
     */
    toARGB(): number;
    /**
     * Converts this {@link Color4b} to a Java AWT Color
     *
     * @returns The Color object representation
     *
     * Source: {@link https://github.com/CCBlueX/LiquidBounce/blob/fc8688f1fc8b0c8dfed8d3dc547a47ad55374af5/src/main/kotlin/net/ccbluex/liquidbounce/render/engine/type/Color4b.kt#L220 | src/main/kotlin/net/ccbluex/liquidbounce/render/engine/type/Color4b.kt:220}
     */
    toAwtColor(): Color;
    /**
     * Get closest {@link DyeColor} entry with RGB 3D distance (ignoring alpha)
     *
     * Source: {@link https://github.com/CCBlueX/LiquidBounce/blob/fc8688f1fc8b0c8dfed8d3dc547a47ad55374af5/src/main/kotlin/net/ccbluex/liquidbounce/render/engine/type/Color4b.kt#L234 | src/main/kotlin/net/ccbluex/liquidbounce/render/engine/type/Color4b.kt:234}
     */
    toClosestDyeColor(toRgb: (param0: DyeColor) => number): DyeColor;
    /**
     * @returns the ARGB value in hex string with {@link format}.
     *
     * Source: {@link https://github.com/CCBlueX/LiquidBounce/blob/fc8688f1fc8b0c8dfed8d3dc547a47ad55374af5/src/main/kotlin/net/ccbluex/liquidbounce/render/engine/type/Color4b.kt#L227 | src/main/kotlin/net/ccbluex/liquidbounce/render/engine/type/Color4b.kt:227}
     */
    toHexString(format: HexFormat): string;
    toRgbVector3f(dest: Vector3f): Vector3f;
    toString(): string;
    toTextColor(): TextColor;
    toVector4f(dest: Vector4f): Vector4f;
    with(r: number, g: number, b: number, a: number): Color4b;
}