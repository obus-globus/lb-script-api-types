import type { Class } from '../../../../java/lang/Class.d.ts'
import type { Object } from '../../../../java/lang/Object.d.ts'
import type { Enum } from '../../../../java/lang/Enum.d.ts'
export class DisplayOptions$NounClass extends Enum<DisplayOptions$NounClass> {
    static ANIMATE: DisplayOptions$NounClass;
    static COMMON: DisplayOptions$NounClass;
    static FEMININE: DisplayOptions$NounClass;
    static INANIMATE: DisplayOptions$NounClass;
    static MASCULINE: DisplayOptions$NounClass;
    static NEUTER: DisplayOptions$NounClass;
    static OTHER: DisplayOptions$NounClass;
    static PERSONAL: DisplayOptions$NounClass;
    static UNDEFINED: DisplayOptions$NounClass;
    static VALUES: DisplayOptions$NounClass[];
    static fromIdentifier(paramarg0: string): DisplayOptions$NounClass;
    static valueOf(paramarg0: Class<Object>, paramarg1: string): Object | null;
    static valueOf(paramarg0: string): DisplayOptions$NounClass;
    static values(): DisplayOptions$NounClass[];
    private constructor(arg2: string)
    readonly identifier: string;
    getIdentifier(): string;
    name(): "UNDEFINED" | "OTHER" | "NEUTER" | "FEMININE" | "MASCULINE" | "ANIMATE" | "INANIMATE" | "PERSONAL" | "COMMON";
}