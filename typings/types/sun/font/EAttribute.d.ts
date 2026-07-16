import type { TextAttribute } from '../../java/awt/font/TextAttribute.d.ts'
import type { Class } from '../../java/lang/Class.d.ts'
import type { AttributedCharacterIterator$Attribute } from '../../java/text/AttributedCharacterIterator$Attribute.d.ts'
import type { Enum } from '../../java/lang/Enum.d.ts'
export class EAttribute extends Enum<EAttribute> {
    static EBACKGROUND: EAttribute;
    static EBASELINE_TRANSFORM: EAttribute;
    static EBIDI_EMBEDDING: EAttribute;
    static ECHAR_REPLACEMENT: EAttribute;
    static EFAMILY: EAttribute;
    static EFONT: EAttribute;
    static EFOREGROUND: EAttribute;
    static EINPUT_METHOD_HIGHLIGHT: EAttribute;
    static EINPUT_METHOD_UNDERLINE: EAttribute;
    static EJUSTIFICATION: EAttribute;
    static EKERNING: EAttribute;
    static ELIGATURES: EAttribute;
    static ENUMERIC_SHAPING: EAttribute;
    static EPOSTURE: EAttribute;
    static ERUN_DIRECTION: EAttribute;
    static ESIZE: EAttribute;
    static ESTRIKETHROUGH: EAttribute;
    static ESUPERSCRIPT: EAttribute;
    static ESWAP_COLORS: EAttribute;
    static ETRACKING: EAttribute;
    static ETRANSFORM: EAttribute;
    static EUNDERLINE: EAttribute;
    static EWEIGHT: EAttribute;
    static EWIDTH: EAttribute;
    static forAttribute(paramarg0: AttributedCharacterIterator$Attribute): EAttribute;
    static valueOf<T extends Enum<T>>(paramarg0: Class<T>, paramarg1: string): T;
    static valueOf(paramarg0: string): EAttribute;
    static values(): EAttribute[];
    private constructor(arg2: TextAttribute)
    // private att: TextAttribute;
    // private mask: number;
    toString(): string;
    name(): "EFAMILY" | "EWEIGHT" | "EWIDTH" | "EPOSTURE" | "ESIZE" | "ETRANSFORM" | "ESUPERSCRIPT" | "EFONT" | "ECHAR_REPLACEMENT" | "EFOREGROUND" | "EBACKGROUND" | "EUNDERLINE" | "ESTRIKETHROUGH" | "ERUN_DIRECTION" | "EBIDI_EMBEDDING" | "EJUSTIFICATION" | "EINPUT_METHOD_HIGHLIGHT" | "EINPUT_METHOD_UNDERLINE" | "ESWAP_COLORS" | "ENUMERIC_SHAPING" | "EKERNING" | "ELIGATURES" | "ETRACKING" | "EBASELINE_TRANSFORM";
}