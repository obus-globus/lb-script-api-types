import type { Record } from '../../../../../../java/lang/Record.d.ts'
import type { Object } from '../../../../../../java/lang/Object.d.ts'
import type { UnihexProvider$LineData } from '../../../../../../net/minecraft/client/gui/font/providers/UnihexProvider$LineData.d.ts'
export class UnihexProvider$ByteContents extends Record implements UnihexProvider$LineData {
    private constructor(contents: number[])
    // private contents: number[];
    bitWidth(): number;
    calculateWidth(): number;
    contents(): number[];
    equals(o: Object | null): boolean;
    hashCode(): number;
    line(index: number): number;
    mask(): number;
    toString(): string;
}