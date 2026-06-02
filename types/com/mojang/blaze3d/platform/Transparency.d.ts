import type { Record } from '../../../../java/lang/Record.d.ts'
import type { Object } from '../../../../java/lang/Object.d.ts'
export class Transparency extends Record {
    static NONE: Transparency;
    static TRANSLUCENT: Transparency;
    static TRANSPARENT: Transparency;
    static TRANSPARENT_AND_TRANSLUCENT: Transparency;
    static of(paramhasTransparent: boolean, paramhasTranslucent: boolean): Transparency;
    // private hasTranslucent: boolean;
    // private hasTransparent: boolean;
    equals(o: Object | null): boolean;
    hasTranslucent(): boolean;
    hasTransparent(): boolean;
    hashCode(): number;
    isOpaque(): boolean;
    or(other: Transparency): Transparency;
    toString(): string;
}