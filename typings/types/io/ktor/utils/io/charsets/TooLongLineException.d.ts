import type { MalformedInputException } from '../../../../../io/ktor/utils/io/charsets/MalformedInputException.d.ts'
export class TooLongLineException extends MalformedInputException {
    constructor(message: string)
}