import type { Object } from '../../../java/lang/Object.d.ts'
export class StringReader extends Object {
    constructor(arg0: string)
    // private lastIndex: number;
    // private mark: number;
    // private nextIndex: number;
    // private string: string;
    // private advanceOneCharacter(): void;
    canRead(): boolean;
    getCurrentIndex(): number;
    mark(): void;
    peek(): string;
    read(): string;
    read(arg0: string): void;
    skipOneCharacter(): void;
    skipWhitespace(): void;
    substring(): string;
    tryRead(arg0: string): boolean;
}