import type { StringBuffer } from '../../../../../../../../java/lang/StringBuffer.d.ts'
import type { Object } from '../../../../../../../../java/lang/Object.d.ts'
import type { ResourceReader } from '../../../../../../../../org/graalvm/shadowed/com/ibm/icu/impl/data/ResourceReader.d.ts'
export class TokenIterator extends Object {
    constructor(r: ResourceReader)
    // private buf: StringBuffer;
    // private done: boolean;
    // private lastpos: number;
    // private line: string;
    // private pos: number;
    // private reader: ResourceReader;
    describePosition(): string;
    getLineNumber(): number;
    next(): string;
    // private nextToken(position: number): number;
}