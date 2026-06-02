import type { Object } from '../../java/lang/Object.d.ts'
export class Application extends Object {
    static UNDEFINED: Application;
    static of(paramarg0: string): Application;
    constructor(arg0: string)
    readonly path: string;
    equals(arg0: Object | null): boolean;
    getPath(): string;
    hashCode(): number;
    matches(arg0: Application): boolean;
    toString(): string;
}