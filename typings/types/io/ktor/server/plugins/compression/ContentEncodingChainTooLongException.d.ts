import type { BadRequestException } from '../../../../../io/ktor/server/plugins/BadRequestException.d.ts'
export class ContentEncodingChainTooLongException extends BadRequestException {
    constructor(chainLength: number, limit: number)
    // private chainLength: number;
    // private limit: number;
}