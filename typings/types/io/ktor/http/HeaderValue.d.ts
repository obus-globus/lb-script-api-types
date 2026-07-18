import type { HeaderValueParam } from '../../../io/ktor/http/HeaderValueParam.d.ts'
import type { Object } from '../../../java/lang/Object.d.ts'
export class HeaderValue extends Object {
    constructor(value: string, params: HeaderValueParam[])
    readonly params: HeaderValueParam[];
    readonly quality: number;
    readonly value: string;
    component1(): string;
    component2(): HeaderValueParam[];
    copy(value: string, params: HeaderValueParam[]): HeaderValue;
    equals(other: Object | null): boolean;
    hashCode(): number;
    toString(): string;
}