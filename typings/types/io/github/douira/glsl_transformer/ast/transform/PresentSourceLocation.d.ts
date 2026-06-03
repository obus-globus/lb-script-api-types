import type { SourceLocation } from '../../../../../../io/github/douira/glsl_transformer/ast/transform/SourceLocation.d.ts'
export class PresentSourceLocation extends SourceLocation {
    constructor(arg0: number, arg1: number)
    line: number;
    canPrint(): boolean;
    createFromPrevious(arg0: number): SourceLocation;
    createFromPrevious(arg0: number, arg1: number): SourceLocation;
    createFromPrevious(arg0: number, arg1: number, arg2: number): SourceLocation;
    createFromPrevious(arg0: number, arg1: number, arg2: string): SourceLocation;
    needsPrint(arg0: number, arg1: PresentSourceLocation, arg2: number): boolean;
}