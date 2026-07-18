import type { TypeInfo } from '../../../io/ktor/util/reflect/TypeInfo.d.ts'
import type { Object } from '../../../java/lang/Object.d.ts'
export class AttributeKey<T extends unknown> extends Object {
    constructor(name: string, type?: TypeInfo)
    readonly name: string;
    // private type: TypeInfo;
    component1(): string;
    // private component2(): TypeInfo;
    copy(name: string, type: TypeInfo): AttributeKey<T>;
    equals(other: Object | null): boolean;
    hashCode(): number;
    toString(): string;
}