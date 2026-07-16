import type { DataRecord$ScopeData } from '../../../../../../com/ibm/icu/impl/duration/impl/DataRecord$ScopeData.d.ts'
import type { RecordReader } from '../../../../../../com/ibm/icu/impl/duration/impl/RecordReader.d.ts'
import type { RecordWriter } from '../../../../../../com/ibm/icu/impl/duration/impl/RecordWriter.d.ts'
import type { Object } from '../../../../../../java/lang/Object.d.ts'
export class DataRecord extends Object {
    static read(paramarg0: string, paramarg1: RecordReader): DataRecord;
    constructor()
    // private allowZero: boolean;
    // private countSep: string;
    // private decimalHandling: number;
    // private decimalSep: string;
    // private digitPrefix: string;
    // private fifteenMinutes: string;
    // private fiveMinutes: string;
    // private fractionHandling: number;
    // private genders: number[];
    // private halfNames: string[];
    // private halfPlacements: number[];
    // private halfSupport: number[];
    // private halves: string[];
    // private measures: string[];
    // private mediumNames: string[];
    // private numberNames: string[];
    // private numberSystem: number;
    // private omitDualCount: boolean;
    // private omitSingularCount: boolean;
    // private optSuffixes: string[];
    // private pl: number;
    // private pluralNames: string[][];
    // private requiresDigitSeparator: boolean;
    // private requiresSkipMarker: boolean[];
    // private rqdSuffixes: string[];
    // private scopeData: DataRecord$ScopeData[];
    // private shortNames: string[];
    // private shortUnitSep: string;
    // private singularNames: string[];
    // private skippedUnitMarker: string;
    // private unitSep: string[];
    // private unitSepRequiresDP: boolean[];
    // private useMilliseconds: number;
    // private weeksAloneOnly: boolean;
    // private zero: string;
    // private zeroHandling: number;
    write(arg0: RecordWriter): void;
}