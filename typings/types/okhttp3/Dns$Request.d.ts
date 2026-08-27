import type { Object } from '../java/lang/Object.d.ts'
export class Dns$Request extends Object {
    constructor(hostname: string, port?: number)
    // private hostname: string;
    /*not mapped: */ hostname(): string;
    // private port: number;
    /*not mapped: */ port(): number;
    equals(other: Object | null): boolean;
    hashCode(): number;
    toString(): string;
}