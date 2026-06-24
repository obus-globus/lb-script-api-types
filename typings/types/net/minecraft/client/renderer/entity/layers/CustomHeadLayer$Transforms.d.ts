import type { Record } from '../../../../../../java/lang/Record.d.ts'
import type { Object } from '../../../../../../java/lang/Object.d.ts'
export class CustomHeadLayer$Transforms extends Record {
    static DEFAULT: CustomHeadLayer$Transforms;
    constructor(yOffset: number, skullYOffset: number, horizontalScale: number)
    // private horizontalScale: number;
    // private skullYOffset: number;
    // private yOffset: number;
    equals(o: Object | null): boolean;
    hashCode(): number;
    horizontalScale(): number;
    skullYOffset(): number;
    toString(): string;
    yOffset(): number;
}