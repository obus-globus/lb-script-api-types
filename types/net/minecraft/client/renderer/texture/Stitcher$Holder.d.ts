import type { Record } from '../../../../../java/lang/Record.d.ts'
import type { Object } from '../../../../../java/lang/Object.d.ts'
import type { Stitcher$Entry } from '../../../../../net/minecraft/client/renderer/texture/Stitcher$Entry.d.ts'
export class Stitcher$Holder<T extends Stitcher$Entry> extends Record {
    // private entry: T;
    // private height: number;
    // private width: number;
    entry(): T;
    equals(o: Object | null): boolean;
    hashCode(): number;
    height(): number;
    toString(): string;
    width(): number;
}