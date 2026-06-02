import type { ANTLRInputStream } from '../../../../org/antlr/v4/runtime/ANTLRInputStream.d.ts'
export class ANTLRFileStream extends ANTLRInputStream {
    static EOF: number;
    static INITIAL_BUFFER_SIZE: number;
    static READ_BUFFER_SIZE: number;
    static UNKNOWN_SOURCE_NAME: string;
    constructor(arg0: string)
    constructor(arg0: string, arg1: string)
    // private fileName: string;
    getSourceName(): string;
    load(arg0: string, arg1: string): void;
}