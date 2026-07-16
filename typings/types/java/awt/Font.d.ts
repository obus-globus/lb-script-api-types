import type { FontRenderContext } from '../../java/awt/font/FontRenderContext.d.ts'
import type { GlyphVector } from '../../java/awt/font/GlyphVector.d.ts'
import type { LineMetrics } from '../../java/awt/font/LineMetrics.d.ts'
import type { TextAttribute } from '../../java/awt/font/TextAttribute.d.ts'
import type { AffineTransform } from '../../java/awt/geom/AffineTransform.d.ts'
import type { Rectangle2D } from '../../java/awt/geom/Rectangle2D.d.ts'
import type { FontPeer } from '../../java/awt/peer/FontPeer.d.ts'
import type { File } from '../../java/io/File.d.ts'
import type { InputStream } from '../../java/io/InputStream.d.ts'
import type { ObjectInputStream } from '../../java/io/ObjectInputStream.d.ts'
import type { ObjectOutputStream } from '../../java/io/ObjectOutputStream.d.ts'
import type { Serializable } from '../../java/io/Serializable.d.ts'
import type { SoftReference } from '../../java/lang/ref/SoftReference.d.ts'
import type { AttributedCharacterIterator$Attribute } from '../../java/text/AttributedCharacterIterator$Attribute.d.ts'
import type { CharacterIterator } from '../../java/text/CharacterIterator.d.ts'
import type { Locale } from '../../java/util/Locale.d.ts'
import type { Object } from '../../java/lang/Object.d.ts'
import type { AttributeValues } from '../../sun/font/AttributeValues.d.ts'
import type { Font2D } from '../../sun/font/Font2D.d.ts'
import type { Font2DHandle } from '../../sun/font/Font2DHandle.d.ts'
import type { FontLineMetrics } from '../../sun/font/FontLineMetrics.d.ts'
export class Font extends Object implements Serializable {
    static BOLD: number;
    static CENTER_BASELINE: number;
    static DIALOG: string;
    static DIALOG_INPUT: string;
    static HANGING_BASELINE: number;
    static ITALIC: number;
    static LAYOUT_LEFT_TO_RIGHT: number;
    static LAYOUT_NO_LIMIT_CONTEXT: number;
    static LAYOUT_NO_START_CONTEXT: number;
    static LAYOUT_RIGHT_TO_LEFT: number;
    static MONOSPACED: string;
    static PLAIN: number;
    static ROMAN_BASELINE: number;
    static SANS_SERIF: string;
    static SERIF: string;
    static TRUETYPE_FONT: number;
    static TYPE1_FONT: number;
    static createFont(paramarg0: number, paramarg1: File): Font;
    static createFont(paramarg0: number, paramarg1: InputStream): Font;
    static createFonts(paramarg0: File): Font[];
    static createFonts(paramarg0: InputStream): Font[];
    static decode(paramarg0: string): Font;
    static getFont(paramarg0: string): Font;
    static getFont(paramarg0: string, paramarg1: Font): Font;
    static getFont(paramarg0: Map<AttributedCharacterIterator$Attribute, Object>): Font;
    static textRequiresLayout(paramarg0: string[], paramarg1: number, paramarg2: number): boolean;
    constructor(arg0: Font)
    constructor(arg0: string, arg1: number, arg2: number)
    constructor(arg0: Map<AttributedCharacterIterator$Attribute, Object | null>)
    // private createdFont: boolean;
    // private fRequestedAttributes: Map<Object, Object>;
    // private flmref: SoftReference<FontLineMetrics>;
    // private font2DHandle: Font2DHandle;
    // private fontSerializedDataVersion: number;
    // private hasLayoutAttributes: boolean;
    // private hash: number;
    name: string;
    // private nonIdentityTx: boolean;
    // private pData: number;
    // private peer: FontPeer;
    // private pointSize: number;
    size: number;
    style: number;
    // private values: AttributeValues;
    canDisplay(arg0: string): boolean;
    canDisplay(arg0: number): boolean;
    canDisplayUpTo(arg0: CharacterIterator, arg1: number, arg2: number): number;
    canDisplayUpTo(arg0: string[], arg1: number, arg2: number): number;
    canDisplayUpTo(arg0: string): number;
    createGlyphVector(arg0: FontRenderContext, arg1: CharacterIterator): GlyphVector;
    createGlyphVector(arg0: FontRenderContext, arg1: string[]): GlyphVector;
    createGlyphVector(arg0: FontRenderContext, arg1: number[]): GlyphVector;
    createGlyphVector(arg0: FontRenderContext, arg1: string): GlyphVector;
    // private defaultLineMetrics(arg0: FontRenderContext): FontLineMetrics;
    deriveFont(arg0: AffineTransform): Font;
    deriveFont(arg0: number): Font;
    deriveFont(arg0: number, arg1: AffineTransform): Font;
    deriveFont(arg0: number, arg1: number): Font;
    deriveFont(arg0: Map<AttributedCharacterIterator$Attribute, Object | null>): Font;
    equals(arg0: Object | null): boolean;
    // private getAttributeValues(): AttributeValues;
    getAttributes(): Map<TextAttribute, Object | null>;
    getAvailableAttributes(): AttributedCharacterIterator$Attribute[];
    getBaselineFor(arg0: string): number;
    getFamily(): string;
    getFamily(arg0: Locale): string;
    getFamily_NoClientCode(): string;
    // private getFont2D(): Font2D;
    getFontName(): string;
    getFontName(arg0: Locale): string;
    // private getFontPeer(): FontPeer;
    getItalicAngle(): number;
    // private getItalicAngle(arg0: FontRenderContext): number;
    getLineMetrics(arg0: CharacterIterator, arg1: number, arg2: number, arg3: FontRenderContext): LineMetrics;
    getLineMetrics(arg0: string[], arg1: number, arg2: number, arg3: FontRenderContext): LineMetrics;
    getLineMetrics(arg0: string, arg1: FontRenderContext): LineMetrics;
    getLineMetrics(arg0: string, arg1: number, arg2: number, arg3: FontRenderContext): LineMetrics;
    getMaxCharBounds(arg0: FontRenderContext): Rectangle2D;
    getMissingGlyphCode(): number;
    getName(): string;
    getNumGlyphs(): number;
    getPSName(): string;
    getSize(): number;
    getSize2D(): number;
    getStringBounds(arg0: CharacterIterator, arg1: number, arg2: number, arg3: FontRenderContext): Rectangle2D;
    getStringBounds(arg0: string[], arg1: number, arg2: number, arg3: FontRenderContext): Rectangle2D;
    getStringBounds(arg0: string, arg1: FontRenderContext): Rectangle2D;
    getStringBounds(arg0: string, arg1: number, arg2: number, arg3: FontRenderContext): Rectangle2D;
    getStyle(): number;
    getTransform(): AffineTransform;
    hasLayoutAttributes(): boolean;
    hasUniformLineMetrics(): boolean;
    hashCode(): number;
    // private initFromValues(arg0: AttributeValues): void;
    isBold(): boolean;
    isItalic(): boolean;
    isPlain(): boolean;
    isTransformed(): boolean;
    layoutGlyphVector(arg0: FontRenderContext, arg1: string[], arg2: number, arg3: number, arg4: number): GlyphVector;
    // private readObject(arg0: ObjectInputStream): void;
    toString(): string;
    // private writeObject(arg0: ObjectOutputStream): void;
}