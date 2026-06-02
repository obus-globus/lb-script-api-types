import type { StringBuilder } from '../../../../../../java/lang/StringBuilder.d.ts'
import type { Object } from '../../../../../../java/lang/Object.d.ts'
export class FormattingInfo extends Object {
    static EMPTY_ARRAY: (Object | null)[];
    static getDefault(): FormattingInfo;
    constructor(leftAlign: boolean, minLength: number, maxLength: number, leftTruncate: boolean)
    constructor(leftAlign: boolean, minLength: number, maxLength: number, leftTruncate: boolean, zeroPad: boolean)
    // private leftAlign: boolean;
    readonly leftTruncate: boolean;
    readonly maxLength: number;
    readonly minLength: number;
    readonly zeroPad: boolean;
    format(fieldStart: number, buffer: StringBuilder): void;
    getMaxLength(): number;
    getMinLength(): number;
    isLeftAligned(): boolean;
    isLeftTruncate(): boolean;
    isZeroPad(): boolean;
    toString(): string;
}