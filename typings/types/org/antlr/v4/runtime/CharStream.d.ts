import type { Object } from '../../../../java/lang/Object.d.ts'
import type { IntStream } from '../../../../org/antlr/v4/runtime/IntStream.d.ts'
import type { Interval } from '../../../../org/antlr/v4/runtime/misc/Interval.d.ts'
export interface CharStream extends Object, IntStream{
    LA(arg0: number): number;
    consume(): void;
    getSourceName(): string;
    getText(arg0: Interval): string;
    index(): number;
    mark(): number;
    release(arg0: number): void;
    seek(arg0: number): void;
    size(): number;
}