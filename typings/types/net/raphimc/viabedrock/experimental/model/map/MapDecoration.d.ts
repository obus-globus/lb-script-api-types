import type { Record } from '../../../../../../java/lang/Record.d.ts'
import type { Object } from '../../../../../../java/lang/Object.d.ts'
export class MapDecoration extends Record {
    constructor(image: number, rotation: number, xOffset: number, yOffset: number, label: string, color: number)
    // private color: number;
    // private image: number;
    // private label: string;
    // private rotation: number;
    // private xOffset: number;
    // private yOffset: number;
    color(): number;
    equals(arg0: Object | null): boolean;
    hashCode(): number;
    image(): number;
    label(): string;
    rotation(): number;
    toString(): string;
    xOffset(): number;
    yOffset(): number;
}