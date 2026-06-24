import type { Record } from '../../../../../java/lang/Record.d.ts'
import type { Object } from '../../../../../java/lang/Object.d.ts'
export class BuiltShaderStorageInfo extends Record {
    constructor(size: number, relative: boolean, scaleX: number, scaleY: number, content: number[])
    // private content: number[];
    // private relative: boolean;
    // private scaleX: number;
    // private scaleY: number;
    // private size: number;
    content(): number[];
    equals(arg0: Object | null): boolean;
    hashCode(): number;
    relative(): boolean;
    scaleX(): number;
    scaleY(): number;
    size(): number;
    toString(): string;
}