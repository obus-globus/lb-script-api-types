import type { Font } from '../../java/awt/Font.d.ts'
import type { Paint } from '../../java/awt/Paint.d.ts'
import type { GraphicAttribute } from '../../java/awt/font/GraphicAttribute.d.ts'
import type { NumericShaper } from '../../java/awt/font/NumericShaper.d.ts'
import type { TextAttribute } from '../../java/awt/font/TextAttribute.d.ts'
import type { TransformAttribute } from '../../java/awt/font/TransformAttribute.d.ts'
import type { AffineTransform } from '../../java/awt/geom/AffineTransform.d.ts'
import type { InputMethodHighlight } from '../../java/awt/im/InputMethodHighlight.d.ts'
import type { Annotation } from '../../java/text/Annotation.d.ts'
import type { AttributedCharacterIterator$Attribute } from '../../java/text/AttributedCharacterIterator$Attribute.d.ts'
import type { Object } from '../../java/lang/Object.d.ts'
import type { Cloneable } from '../../java/lang/Cloneable.d.ts'
import type { EAttribute } from '../../sun/font/EAttribute.d.ts'
export class AttributeValues extends Object implements Cloneable {
    static MASK_ALL: number;
    static extractXRotation(paramarg0: AffineTransform, paramarg1: boolean): AffineTransform;
    static extractYRotation(paramarg0: AffineTransform, paramarg1: boolean): AffineTransform;
    static fromMap(paramarg0: Map<AttributedCharacterIterator$Attribute, Object>): AttributeValues;
    static fromMap(paramarg0: Map<AttributedCharacterIterator$Attribute, Object>, paramarg1: number): AttributeValues;
    static fromSerializableHashtable(paramarg0: Map<Object, Object>): AttributeValues;
    static getBaselineTransform(paramarg0: Map<Object, Object>): AffineTransform;
    static getCharTransform(paramarg0: Map<Object, Object>): AffineTransform;
    static getJustification(paramarg0: Map<Object, Object>): number;
    static getMask(paramarg0: EAttribute): number;
    static getMask(paramarg0: (Object | null)[]): number;
    static getNumericShaping(paramarg0: Map<Object, Object>): NumericShaper;
    static getTracking(paramarg0: Map<Object, Object>): number;
    static is16Hashtable(paramarg0: Map<Object, Object>): boolean;
    constructor()
    readonly background: Paint;
    readonly baselineTransform: AffineTransform;
    readonly bidiEmbedding: number;
    readonly charReplacement: GraphicAttribute;
    readonly charTransform: AffineTransform;
    // private defined: number;
    readonly family: string;
    readonly font: Font;
    readonly foreground: Paint;
    // private imHighlight: Object;
    // private imUnderline: number;
    readonly justification: number;
    readonly kerning: number;
    readonly ligatures: number;
    // private nondefault: number;
    readonly numericShaping: NumericShaper;
    readonly posture: number;
    readonly runDirection: number;
    readonly size: number;
    readonly strikethrough: boolean;
    readonly superscript: number;
    readonly swapColors: boolean;
    readonly tracking: number;
    readonly transform: AffineTransform;
    readonly underline: number;
    readonly weight: number;
    readonly width: number;
    allDefined(arg0: number): boolean;
    anyDefined(arg0: number): boolean;
    anyNonDefault(arg0: number): boolean;
    applyIMHighlight(): AttributeValues;
    protected clone(): Object;
    clone(): AttributeValues;
    defineAll(arg0: number): void;
    equals(arg0: Object | null): boolean;
    equals(arg0: AttributeValues): boolean;
    get(arg0: EAttribute): Object;
    getBackground(): Paint;
    getBaselineTransform(): AffineTransform;
    getBidiEmbedding(): number;
    getCharReplacement(): GraphicAttribute;
    getCharTransform(): AffineTransform;
    getFamily(): string;
    getFont(): Font;
    getForeground(): Paint;
    getInputMethodHighlight(): Object;
    getInputMethodUnderline(): number;
    getJustification(): number;
    getKerning(): number;
    getLigatures(): number;
    getNumericShaping(): NumericShaper;
    getPosture(): number;
    getRunDirection(): number;
    getSize(): number;
    getStrikethrough(): boolean;
    getSuperscript(): number;
    getSwapColors(): boolean;
    getTracking(): number;
    getTransform(): AffineTransform;
    getUnderline(): number;
    getWeight(): number;
    getWidth(): number;
    hashCode(): number;
    // private i_equals(arg0: EAttribute, arg1: AttributeValues): boolean;
    // private i_get(arg0: EAttribute): Object;
    // private i_set(arg0: EAttribute, arg1: Object): void;
    // private i_set(arg0: EAttribute, arg1: AttributeValues): void;
    // private i_validate(arg0: EAttribute): boolean;
    isDefined(arg0: EAttribute): boolean;
    isNonDefault(arg0: EAttribute): boolean;
    merge(arg0: Map<AttributedCharacterIterator$Attribute, Object | null>): AttributeValues;
    merge(arg0: Map<AttributedCharacterIterator$Attribute, Object | null>, arg1: number): AttributeValues;
    merge(arg0: AttributeValues): AttributeValues;
    merge(arg0: AttributeValues, arg1: number): AttributeValues;
    set(arg0: EAttribute, arg1: Object): void;
    set(arg0: EAttribute, arg1: AttributeValues): void;
    setBackground(arg0: Paint): void;
    setBidiEmbedding(arg0: number): void;
    setCharReplacement(arg0: GraphicAttribute): void;
    setDefault(arg0: EAttribute): void;
    setFamily(arg0: string): void;
    setFont(arg0: Font): void;
    setForeground(arg0: Paint): void;
    setInputMethodHighlight(arg0: InputMethodHighlight): void;
    setInputMethodHighlight(arg0: Annotation): void;
    setInputMethodUnderline(arg0: number): void;
    setJustification(arg0: number): void;
    setKerning(arg0: number): void;
    setLigatures(arg0: number): void;
    setNumericShaping(arg0: NumericShaper): void;
    setPosture(arg0: number): void;
    setRunDirection(arg0: number): void;
    setSize(arg0: number): void;
    setStrikethrough(arg0: boolean): void;
    setSuperscript(arg0: number): void;
    setSwapColors(arg0: boolean): void;
    setTracking(arg0: number): void;
    setTransform(arg0: TransformAttribute): void;
    setTransform(arg0: AffineTransform): void;
    setUnderline(arg0: number): void;
    setWeight(arg0: number): void;
    setWidth(arg0: number): void;
    toMap(arg0: Map<TextAttribute, Object>): Map<TextAttribute, Object>;
    toSerializableHashtable(): Map<Object, Object>;
    toString(): string;
    unset(arg0: EAttribute): void;
    unsetDefault(): void;
    // private update(arg0: EAttribute): void;
    updateDerivedTransforms(): void;
}