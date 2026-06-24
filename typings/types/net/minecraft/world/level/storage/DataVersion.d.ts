import type { Record } from '../../../../../java/lang/Record.d.ts'
import type { Object } from '../../../../../java/lang/Object.d.ts'
export class DataVersion extends Record {
    static MAIN_SERIES: string;
    constructor(version: number, series: string)
    // private series: string;
    // private version: number;
    equals(o: Object | null): boolean;
    hashCode(): number;
    isCompatible(other: DataVersion): boolean;
    isSideSeries(): boolean;
    series(): string;
    toString(): string;
    version(): number;
}