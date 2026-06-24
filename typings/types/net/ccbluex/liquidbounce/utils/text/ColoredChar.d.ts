import type { Record } from '../../../../../java/lang/Record.d.ts'
import type { Object } from '../../../../../java/lang/Object.d.ts'
import type { TextColor } from '../../../../../net/minecraft/network/chat/TextColor.d.ts'
export class ColoredChar extends Record {
    constructor(char: string, color: TextColor)
    // private char: string;
    /*not mapped: */ char(): string;
    // private color: TextColor;
    /*not mapped: */ color(): TextColor;
    component1(): string;
    component2(): TextColor;
    copy(char: string, color: TextColor): ColoredChar;
    equals(other: Object | null): boolean;
    hashCode(): number;
    toString(): string;
}