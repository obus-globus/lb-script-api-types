import type { Font } from '../../../../../../java/awt/Font.d.ts'
import type { Record } from '../../../../../../java/lang/Record.d.ts'
import type { Object } from '../../../../../../java/lang/Object.d.ts'
export class FontId extends Record {
    constructor(style: number, awtFont: Font, height: number, ascent: number)
    // private ascent: number;
    /*not mapped: */ ascent(): number;
    // private awtFont: Font;
    /*not mapped: */ awtFont(): Font;
    // private height: number;
    /*not mapped: */ height(): number;
    // private style: number;
    /*not mapped: */ style(): number;
    component1(): number;
    component2(): Font;
    component3(): number;
    component4(): number;
    copy(style: number, awtFont: Font, height: number, ascent: number): FontId;
    equals(other: Object | null): boolean;
    hashCode(): number;
    toString(): string;
}