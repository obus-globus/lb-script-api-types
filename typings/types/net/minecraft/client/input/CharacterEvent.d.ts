import type { Record } from '../../../../java/lang/Record.d.ts'
import type { Object } from '../../../../java/lang/Object.d.ts'
export class CharacterEvent extends Record {
    constructor(codepoint: number)
    // private codepoint: number;
    codepoint(): number;
    codepointAsString(): string;
    equals(o: Object | null): boolean;
    hashCode(): number;
    isAllowedChatCharacter(): boolean;
    toString(): string;
}