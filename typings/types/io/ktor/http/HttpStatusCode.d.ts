import type { HttpStatusCode$Companion } from '../../../io/ktor/http/HttpStatusCode$Companion.d.ts'
import type { Object } from '../../../java/lang/Object.d.ts'
import type { Comparable } from '../../../java/lang/Comparable.d.ts'
export class HttpStatusCode extends Object implements Comparable<HttpStatusCode> {
    static Companion: HttpStatusCode$Companion;
    constructor(value: number, description: string)
    getDescription(): string;
    readonly value: number;
    compareTo(other: HttpStatusCode): number;
    component1(): number;
    component2(): string;
    copy(value: number, description: string): HttpStatusCode;
    description(value: string): HttpStatusCode;
    equals(other: Object | null): boolean;
    hashCode(): number;
    toString(): string;
}