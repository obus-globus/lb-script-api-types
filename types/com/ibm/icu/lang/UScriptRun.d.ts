import type { UScriptRun$ParenStackEntry } from '../../../../com/ibm/icu/lang/UScriptRun$ParenStackEntry.d.ts'
import type { Object } from '../../../../java/lang/Object.d.ts'
export class UScriptRun extends Object {
    constructor()
    constructor(arg0: string[])
    constructor(arg0: string[], arg1: number, arg2: number)
    constructor(arg0: string)
    constructor(arg0: string, arg1: number, arg2: number)
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
    // private fixup(arg0: number): void;
    getScriptCode(): number;
    getScriptLimit(): number;
    getScriptStart(): number;
    next(): boolean;
    // private pop(): void;
    // private push(arg0: number, arg1: number): void;
    reset(): void;
    reset(arg0: string[]): void;
    reset(arg0: string[], arg1: number, arg2: number): void;
    reset(arg0: number, arg1: number): void;
    reset(arg0: string): void;
    reset(arg0: string, arg1: number, arg2: number): void;
    // private stackIsEmpty(): boolean;
    // private stackIsNotEmpty(): boolean;
    // private syncFixup(): void;
    // private top(): UScriptRun$ParenStackEntry;
}