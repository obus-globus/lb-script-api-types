import type { Object } from '../../../../../../../java/lang/Object.d.ts'
import type { UScriptRun$ParenStackEntry } from '../../../../../../../org/graalvm/shadowed/com/ibm/icu/lang/UScriptRun$ParenStackEntry.d.ts'
export class UScriptRun extends Object {
    constructor()
    constructor(chars: string[])
    constructor(chars: string[], start: number, count: number)
    constructor(text: string)
    constructor(text: string, start: number, count: number)
    // private emptyCharArray: string[];
    // private fixupCount: number;
    // private parenSP: number;
    // private pushCount: number;
    readonly scriptCode: number;
    readonly scriptLimit: number;
    readonly scriptStart: number;
    // private text: string[];
    // private textIndex: number;
    // private textLimit: number;
    // private textStart: number;
    // private fixup(scrptCode: number): void;
    getScriptCode(): number;
    getScriptLimit(): number;
    getScriptStart(): number;
    next(): boolean;
    // private pop(): void;
    // private push(pairIndex: number, scrptCode: number): void;
    reset(): void;
    reset(chars: string[]): void;
    reset(chars: string[], start: number, count: number): void;
    reset(start: number, count: number): void;
    reset(str: string): void;
    reset(str: string, start: number, count: number): void;
    // private stackIsEmpty(): boolean;
    // private stackIsNotEmpty(): boolean;
    // private syncFixup(): void;
    // private top(): UScriptRun$ParenStackEntry;
}