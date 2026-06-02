import type { Object } from '../../../java/lang/Object.d.ts'
export class TextHitInfo extends Object {
    static afterOffset(paramarg0: number): TextHitInfo;
    static beforeOffset(paramarg0: number): TextHitInfo;
    static leading(paramarg0: number): TextHitInfo;
    static trailing(paramarg0: number): TextHitInfo;
    private constructor(arg0: number, arg1: boolean)
    readonly charIndex: number;
    // private isLeadingEdge: boolean;
    equals(arg0: TextHitInfo): boolean;
    equals(arg0: Object | null): boolean;
    getCharIndex(): number;
    getInsertionIndex(): number;
    getOffsetHit(arg0: number): TextHitInfo;
    getOtherHit(): TextHitInfo;
    hashCode(): number;
    isLeadingEdge(): boolean;
    toString(): string;
}