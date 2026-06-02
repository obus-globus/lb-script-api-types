import type { Object } from '../../../../../../../java/lang/Object.d.ts'
import type { Comparable } from '../../../../../../../java/lang/Comparable.d.ts'
import type { Region$RegionType } from '../../../../../../../org/graalvm/shadowed/com/ibm/icu/util/Region$RegionType.d.ts'
export class Region extends Object implements Comparable<Region> {
    static getAvailable(paramtype: Region$RegionType): Region[];
    static getInstance(paramcode: number): Region;
    static getInstance(paramid: string): Region;
    private constructor()
    // private code: number;
    readonly containedRegions: Region[];
    readonly containingRegion: Region;
    // private id: string;
    readonly preferredValues: Region[];
    readonly type: Region$RegionType;
    compareTo(other: Region): number;
    contains(other: Region): boolean;
    getContainedRegions(): Region[];
    getContainedRegions(type: Region$RegionType): Region[];
    getContainingRegion(): Region;
    getContainingRegion(type: Region$RegionType): Region;
    getNumericCode(): number;
    getPreferredValues(): Region[];
    getType(): Region$RegionType;
    toString(): string;
}