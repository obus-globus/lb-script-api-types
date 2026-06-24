import type { Record } from '../../../../java/lang/Record.d.ts'
import type { OptionalInt } from '../../../../java/util/OptionalInt.d.ts'
import type { Object } from '../../../../java/lang/Object.d.ts'
export class DisplayData extends Record {
    constructor(width: number, height: number, fullscreenWidth: OptionalInt, fullscreenHeight: OptionalInt, isFullscreen: boolean)
    // private fullscreenHeight: OptionalInt;
    // private fullscreenWidth: OptionalInt;
    // private height: number;
    // private isFullscreen: boolean;
    // private width: number;
    equals(o: Object | null): boolean;
    fullscreenHeight(): OptionalInt;
    fullscreenWidth(): OptionalInt;
    hashCode(): number;
    height(): number;
    isFullscreen(): boolean;
    toString(): string;
    width(): number;
    withFullscreen(isFullscreen: boolean): DisplayData;
    withSize(width: number, height: number): DisplayData;
}