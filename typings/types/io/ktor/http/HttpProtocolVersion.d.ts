import type { HttpProtocolVersion$Companion } from '../../../io/ktor/http/HttpProtocolVersion$Companion.d.ts'
import type { Object } from '../../../java/lang/Object.d.ts'
export class HttpProtocolVersion extends Object {
    static Companion: HttpProtocolVersion$Companion;
    constructor(name: string, major: number, minor: number)
    readonly major: number;
    readonly minor: number;
    readonly name: string;
    component1(): string;
    component2(): number;
    component3(): number;
    copy(name: string, major: number, minor: number): HttpProtocolVersion;
    equals(other: Object | null): boolean;
    hashCode(): number;
    toString(): string;
}