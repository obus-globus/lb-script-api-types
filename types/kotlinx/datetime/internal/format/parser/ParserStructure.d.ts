import type { Object } from '../../../../../java/lang/Object.d.ts'
import type { ParserOperation } from '../../../../../kotlinx/datetime/internal/format/parser/ParserOperation.d.ts'
export class ParserStructure<Output extends Object | number | string | boolean> extends Object {
    constructor(operations: ParserOperation<Output>[], followedBy: ParserStructure<Output>[])
    readonly followedBy: ParserStructure<Output>[];
    readonly operations: ParserOperation<Output>[];
    toString(): string;
}