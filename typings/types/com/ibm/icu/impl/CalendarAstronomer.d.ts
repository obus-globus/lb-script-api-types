import type { CalendarAstronomer$AngleFunc } from '../../../../com/ibm/icu/impl/CalendarAstronomer$AngleFunc.d.ts'
import type { CalendarAstronomer$Equatorial } from '../../../../com/ibm/icu/impl/CalendarAstronomer$Equatorial.d.ts'
import type { CalendarAstronomer$MoonAge } from '../../../../com/ibm/icu/impl/CalendarAstronomer$MoonAge.d.ts'
import type { CalendarAstronomer$SolarLongitude } from '../../../../com/ibm/icu/impl/CalendarAstronomer$SolarLongitude.d.ts'
import type { Date } from '../../../../java/util/Date.d.ts'
import type { Object } from '../../../../java/lang/Object.d.ts'
export class CalendarAstronomer extends Object {
    static DAY_MS: number;
    static HOUR_MS: number;
    static JULIAN_EPOCH_MS: number;
    static MINUTE_MS: number;
    static NEW_MOON: CalendarAstronomer$MoonAge;
    static SECOND_MS: number;
    static SIDEREAL_DAY: number;
    static SIDEREAL_MONTH: number;
    static SIDEREAL_YEAR: number;
    static SOLAR_DAY: number;
    static SYNODIC_MONTH: number;
    static TROPICAL_YEAR: number;
    static WINTER_SOLSTICE: CalendarAstronomer$SolarLongitude;
    constructor()
    constructor(arg0: number)
    readonly julianDay: number;
    // private meanAnomalySun: number;
    // private moonEclipLong: number;
    readonly moonPosition: CalendarAstronomer$Equatorial;
    readonly sunLongitude: number;
    readonly time: number;
    // private clearCache(): void;
    // private eclipticObliquity(): number;
    eclipticToEquatorial(arg0: number, arg1: number): CalendarAstronomer$Equatorial;
    getDate(): Date;
    getJulianDay(): number;
    getMoonAge(): number;
    getMoonPosition(): CalendarAstronomer$Equatorial;
    getMoonTime(arg0: CalendarAstronomer$MoonAge, arg1: boolean): number;
    getMoonTime(arg0: number, arg1: boolean): number;
    getSunLongitude(): number;
    getSunLongitude(arg0: number): number[];
    getSunTime(arg0: CalendarAstronomer$SolarLongitude, arg1: boolean): number;
    getSunTime(arg0: number, arg1: boolean): number;
    getTime(): number;
    setJulianDay(arg0: number): void;
    setTime(arg0: number): void;
    // private timeOfAngle(arg0: CalendarAstronomer$AngleFunc, arg1: number, arg2: number, arg3: number, arg4: boolean): number;
    // private trueAnomaly(arg0: number, arg1: number): number;
}