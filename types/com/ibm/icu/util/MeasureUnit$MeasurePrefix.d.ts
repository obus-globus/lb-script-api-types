import type { Class } from '../../../../java/lang/Class.d.ts'
import type { Object } from '../../../../java/lang/Object.d.ts'
import type { Enum } from '../../../../java/lang/Enum.d.ts'
export class MeasureUnit$MeasurePrefix extends Enum<MeasureUnit$MeasurePrefix> {
    static ATTO: MeasureUnit$MeasurePrefix;
    static CENTI: MeasureUnit$MeasurePrefix;
    static DECI: MeasureUnit$MeasurePrefix;
    static DEKA: MeasureUnit$MeasurePrefix;
    static EXA: MeasureUnit$MeasurePrefix;
    static EXBI: MeasureUnit$MeasurePrefix;
    static FEMTO: MeasureUnit$MeasurePrefix;
    static GIBI: MeasureUnit$MeasurePrefix;
    static GIGA: MeasureUnit$MeasurePrefix;
    static HECTO: MeasureUnit$MeasurePrefix;
    static KIBI: MeasureUnit$MeasurePrefix;
    static KILO: MeasureUnit$MeasurePrefix;
    static MEBI: MeasureUnit$MeasurePrefix;
    static MEGA: MeasureUnit$MeasurePrefix;
    static MICRO: MeasureUnit$MeasurePrefix;
    static MILLI: MeasureUnit$MeasurePrefix;
    static NANO: MeasureUnit$MeasurePrefix;
    static ONE: MeasureUnit$MeasurePrefix;
    static PEBI: MeasureUnit$MeasurePrefix;
    static PETA: MeasureUnit$MeasurePrefix;
    static PICO: MeasureUnit$MeasurePrefix;
    static QUECTO: MeasureUnit$MeasurePrefix;
    static QUETTA: MeasureUnit$MeasurePrefix;
    static RONNA: MeasureUnit$MeasurePrefix;
    static RONTO: MeasureUnit$MeasurePrefix;
    static TEBI: MeasureUnit$MeasurePrefix;
    static TERA: MeasureUnit$MeasurePrefix;
    static YOBI: MeasureUnit$MeasurePrefix;
    static YOCTO: MeasureUnit$MeasurePrefix;
    static YOTTA: MeasureUnit$MeasurePrefix;
    static ZEBI: MeasureUnit$MeasurePrefix;
    static ZEPTO: MeasureUnit$MeasurePrefix;
    static ZETTA: MeasureUnit$MeasurePrefix;
    static valueOf(paramarg0: Class<Object>, paramarg1: string): Object | null;
    static valueOf(paramarg0: string): MeasureUnit$MeasurePrefix;
    static values(): (Object | null)[];
    private constructor(arg2: number, arg3: string, arg4: number)
    readonly base: number;
    readonly identifier: string;
    readonly power: number;
    getBase(): number;
    getIdentifier(): string;
    getPower(): number;
    name(): "QUETTA" | "RONNA" | "YOTTA" | "ZETTA" | "EXA" | "PETA" | "TERA" | "GIGA" | "MEGA" | "KILO" | "HECTO" | "DEKA" | "ONE" | "DECI" | "CENTI" | "MILLI" | "MICRO" | "NANO" | "PICO" | "FEMTO" | "ATTO" | "ZEPTO" | "YOCTO" | "RONTO" | "QUECTO" | "KIBI" | "MEBI" | "GIBI" | "TEBI" | "PEBI" | "EXBI" | "ZEBI" | "YOBI";
}