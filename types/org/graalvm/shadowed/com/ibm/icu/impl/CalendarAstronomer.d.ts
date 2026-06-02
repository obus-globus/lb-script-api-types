import type { Date } from '../../../../../../../java/util/Date.d.ts'
import type { Object } from '../../../../../../../java/lang/Object.d.ts'
import type { CalendarAstronomer$AngleFunc } from '../../../../../../../org/graalvm/shadowed/com/ibm/icu/impl/CalendarAstronomer$AngleFunc.d.ts'
import type { CalendarAstronomer$Equatorial } from '../../../../../../../org/graalvm/shadowed/com/ibm/icu/impl/CalendarAstronomer$Equatorial.d.ts'
import type { CalendarAstronomer$MoonAge } from '../../../../../../../org/graalvm/shadowed/com/ibm/icu/impl/CalendarAstronomer$MoonAge.d.ts'
import type { CalendarAstronomer$SolarLongitude } from '../../../../../../../org/graalvm/shadowed/com/ibm/icu/impl/CalendarAstronomer$SolarLongitude.d.ts'
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
    constructor(aTime: number)
    readonly julianDay: number;
    // private meanAnomalySun: number;
    // private moonEclipLong: number;
    readonly moonPosition: CalendarAstronomer$Equatorial;
    readonly sunLongitude: number;
    readonly time: number;
    // private clearCache(): void;
    // private eclipticObliquity(): number;
    eclipticToEquatorial(eclipLong: number, eclipLat: number): CalendarAstronomer$Equatorial;
    getDate(): Date;
    getJulianDay(): number;
    getMoonAge(): number;
    getMoonPosition(): CalendarAstronomer$Equatorial;
    getMoonTime(desired: number, next: boolean): number;
    getMoonTime(desired: CalendarAstronomer$MoonAge, next: boolean): number;
    getSunLongitude(): number;
    getSunLongitude(julian: number): number[];
    getSunTime(desired: number, next: boolean): number;
    getSunTime(desired: CalendarAstronomer$SolarLongitude, next: boolean): number;
    getTime(): number;
    setJulianDay(jdn: number): void;
    setTime(aTime: number): void;
    // private timeOfAngle(func: CalendarAstronomer$AngleFunc, desired: number, periodDays: number, epsilon: number, next: boolean): number;
    // private trueAnomaly(meanAnomaly: number, eccentricity: number): number;
}