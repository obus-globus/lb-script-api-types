import type { Object } from '../../../java/lang/Object.d.ts'
import type { Region } from '../../../sun/java2d/pipe/Region.d.ts'
export class RegionIterator extends Object {
    constructor(arg0: Region)
    // private curIndex: number;
    // private numXbands: number;
    // private region: Region;
    copyStateFrom(arg0: RegionIterator): void;
    createCopy(): RegionIterator;
    nextXBand(arg0: number[]): boolean;
    nextYRange(arg0: number[]): boolean;
}