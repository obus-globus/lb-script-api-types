import type { Object } from '../../../../../../java/lang/Object.d.ts'
export class SourceLocation extends Object {
    constructor(arg0: number)
    parsedLine: number;
    canPrint(): boolean;
    createFromPrevious(arg0: number): SourceLocation;
    createFromPrevious(arg0: number, arg1: number): SourceLocation;
    createFromPrevious(arg0: number, arg1: number, arg2: number): SourceLocation;
    createFromPrevious(arg0: number, arg1: number, arg2: string): SourceLocation;
}