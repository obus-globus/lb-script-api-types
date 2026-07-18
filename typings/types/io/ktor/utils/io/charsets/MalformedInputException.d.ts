import type { MalformedInputException as MalformedInputException_2 } from '../../../../../java/nio/charset/MalformedInputException.d.ts'
export class MalformedInputException extends MalformedInputException_2 {
    constructor(message: string)
    // private _message: string;
    readonly message: string | null;
}