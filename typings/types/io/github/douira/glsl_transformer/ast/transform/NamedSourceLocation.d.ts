import type { PresentSourceLocation } from '../../../../../../io/github/douira/glsl_transformer/ast/transform/PresentSourceLocation.d.ts'
import type { SourceLocation } from '../../../../../../io/github/douira/glsl_transformer/ast/transform/SourceLocation.d.ts'
export class NamedSourceLocation extends PresentSourceLocation {
    constructor(arg0: number, arg1: number, arg2: string)
    sourceName: string;
    createFromPrevious(arg0: number): SourceLocation;
    createFromPrevious(arg0: number, arg1: number): SourceLocation;
    needsPrint(arg0: number, arg1: PresentSourceLocation, arg2: number): boolean;
}