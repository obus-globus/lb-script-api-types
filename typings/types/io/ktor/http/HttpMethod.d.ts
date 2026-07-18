import type { HttpMethod$Companion } from '../../../io/ktor/http/HttpMethod$Companion.d.ts'
import type { Object } from '../../../java/lang/Object.d.ts'
export class HttpMethod extends Object {
    static Companion: HttpMethod$Companion;
    static DefaultMethods: HttpMethod[];
    static Delete: HttpMethod;
    static Get: HttpMethod;
    static Head: HttpMethod;
    static Options: HttpMethod;
    static Patch: HttpMethod;
    static Post: HttpMethod;
    static Put: HttpMethod;
    static Query: HttpMethod;
    static Trace: HttpMethod;
    constructor(value: string)
    readonly value: string;
    component1(): string;
    copy(value: string): HttpMethod;
    equals(other: Object | null): boolean;
    hashCode(): number;
    toString(): string;
}