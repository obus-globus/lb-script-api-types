import type { IllegalArgumentException } from '../../../java/lang/IllegalArgumentException.d.ts'
export class IllegalHeaderValueException extends IllegalArgumentException {
    constructor(headerValue: string, position: number)
    readonly headerValue: string;
    readonly position: number;
}