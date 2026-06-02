import type { Object } from '../../../../java/lang/Object.d.ts'
export interface IntStream extends Object{
    LA(arg0: number): number;
    consume(): void;
    getSourceName(): string;
    index(): number;
    mark(): number;
    release(arg0: number): void;
    seek(arg0: number): void;
    size(): number;
}