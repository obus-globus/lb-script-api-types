import type { Class } from '../../../../../java/lang/Class.d.ts'
import type { Enum } from '../../../../../java/lang/Enum.d.ts'
export class LayerLightSectionStorage$SectionType extends Enum<LayerLightSectionStorage$SectionType> {
    static EMPTY: LayerLightSectionStorage$SectionType;
    static LIGHT_AND_DATA: LayerLightSectionStorage$SectionType;
    static LIGHT_ONLY: LayerLightSectionStorage$SectionType;
    static valueOf<T extends Enum<T>>(paramarg0: Class<T>, paramarg1: string): T;
    static valueOf(paramname: string): LayerLightSectionStorage$SectionType;
    static values(): LayerLightSectionStorage$SectionType[];
    private constructor(display: string)
    // private display: string;
    display(): string;
    name(): "EMPTY" | "LIGHT_ONLY" | "LIGHT_AND_DATA";
}