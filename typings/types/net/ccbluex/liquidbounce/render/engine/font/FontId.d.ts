import type { Font } from '../../../../../../java/awt/Font.d.ts'
import type { Record } from '../../../../../../java/lang/Record.d.ts'
import type { Object } from '../../../../../../java/lang/Object.d.ts'
export class FontId extends Record {
    constructor(style: number, awtFont: Font, height: number, ascent: number, underlineOffset: number, underlineThickness: number, strikethroughOffset: number, strikethroughThickness: number)
    // private ascent: number;
    /*not mapped: */ ascent(): number;
    // private awtFont: Font;
    /*not mapped: */ awtFont(): Font;
    // private height: number;
    /*not mapped: */ height(): number;
    // private strikethroughOffset: number;
    /*not mapped: */ strikethroughOffset(): number;
    // private strikethroughThickness: number;
    /*not mapped: */ strikethroughThickness(): number;
    // private style: number;
    /*not mapped: */ style(): number;
    // private underlineOffset: number;
    /*not mapped: */ underlineOffset(): number;
    // private underlineThickness: number;
    /*not mapped: */ underlineThickness(): number;
    component1(): number;
    component2(): Font;
    component3(): number;
    component4(): number;
    component5(): number;
    component6(): number;
    component7(): number;
    component8(): number;
    copy(style: number, awtFont: Font, height: number, ascent: number, underlineOffset: number, underlineThickness: number, strikethroughOffset: number, strikethroughThickness: number): FontId;
    equals(other: Object | null): boolean;
    hashCode(): number;
    toString(): string;
}