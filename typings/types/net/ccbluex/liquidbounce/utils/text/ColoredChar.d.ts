import type { Record } from '../../../../../java/lang/Record.d.ts'
import type { Object } from '../../../../../java/lang/Object.d.ts'
import type { ChatFormatting } from '../../../../../net/minecraft/ChatFormatting.d.ts'
export class ColoredChar extends Record {
    constructor(char: string, color: ChatFormatting)
    // private char: string;
    /*not mapped: */ char(): string;
    // private color: ChatFormatting;
    /*not mapped: */ color(): ChatFormatting;
    component1(): string;
    component2(): ChatFormatting;
    copy(char: string, color: ChatFormatting): ColoredChar;
    equals(other: Object | null): boolean;
    hashCode(): number;
    toString(): string;
}