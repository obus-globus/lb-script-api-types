import type { Record } from '../../../../java/lang/Record.d.ts'
import type { Object } from '../../../../java/lang/Object.d.ts'
export class RealmsNews extends Record {
    static parse(paramjson: string): RealmsNews;
    constructor(newsLink: string)
    // private newsLink: string;
    equals(o: Object | null): boolean;
    hashCode(): number;
    newsLink(): string;
    toString(): string;
}