import type { Region$RegionType } from '../../../../com/ibm/icu/util/Region$RegionType.d.ts'
import type { Object } from '../../../../java/lang/Object.d.ts'
import type { Comparable } from '../../../../java/lang/Comparable.d.ts'
export class Region extends Object implements Comparable<Region> {
    static getAvailable(paramarg0: Region$RegionType): Region[];
    static getInstance(paramarg0: number): Region;
    static getInstance(paramarg0: string): Region;
    private constructor()
    // private code: number;
    readonly containedRegions: Region[];
    readonly containingRegion: Region;
    // private id: string;
    readonly preferredValues: Region[];
    readonly type: Region$RegionType;
    compareTo(arg0: Region): number;
    contains(arg0: Region): boolean;
    getContainedRegions(): Region[];
    getContainedRegions(arg0: Region$RegionType): Region[];
    getContainingRegion(): Region;
    getContainingRegion(arg0: Region$RegionType): Region;
    getNumericCode(): number;
    getPreferredValues(): Region[];
    getType(): Region$RegionType;
    toString(): string;
}