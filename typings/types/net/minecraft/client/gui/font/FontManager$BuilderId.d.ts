import type { Record } from '../../../../../java/lang/Record.d.ts'
import type { Object } from '../../../../../java/lang/Object.d.ts'
import type { Identifier } from '../../../../../net/minecraft/resources/Identifier.d.ts'
export class FontManager$BuilderId extends Record {
    private constructor(fontId: Identifier, pack: string, index: number)
    // private fontId: Identifier;
    // private index: number;
    // private pack: string;
    equals(o: Object | null): boolean;
    fontId(): Identifier;
    hashCode(): number;
    index(): number;
    pack(): string;
    toString(): string;
}