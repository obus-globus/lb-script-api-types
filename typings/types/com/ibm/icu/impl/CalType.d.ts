import type { Class } from '../../../../java/lang/Class.d.ts'
import type { Enum } from '../../../../java/lang/Enum.d.ts'
export class CalType extends Enum<CalType> {
    static BUDDHIST: CalType;
    static CHINESE: CalType;
    static COPTIC: CalType;
    static DANGI: CalType;
    static ETHIOPIC: CalType;
    static ETHIOPIC_AMETE_ALEM: CalType;
    static GREGORIAN: CalType;
    static HEBREW: CalType;
    static INDIAN: CalType;
    static ISLAMIC: CalType;
    static ISLAMIC_CIVIL: CalType;
    static ISLAMIC_RGSA: CalType;
    static ISLAMIC_TBLA: CalType;
    static ISLAMIC_UMALQURA: CalType;
    static ISO8601: CalType;
    static JAPANESE: CalType;
    static PERSIAN: CalType;
    static ROC: CalType;
    static valueOf<T extends Enum<T>>(paramarg0: Class<T>, paramarg1: string): T;
    static valueOf(paramarg0: string): CalType;
    static values(): CalType[];
    private constructor(arg2: string)
    id: string;
    getId(): string;
    name(): "GREGORIAN" | "ISO8601" | "BUDDHIST" | "CHINESE" | "COPTIC" | "DANGI" | "ETHIOPIC" | "ETHIOPIC_AMETE_ALEM" | "HEBREW" | "INDIAN" | "ISLAMIC" | "ISLAMIC_CIVIL" | "ISLAMIC_RGSA" | "ISLAMIC_TBLA" | "ISLAMIC_UMALQURA" | "JAPANESE" | "PERSIAN" | "ROC";
}