import type { JavaMap } from '../../../JavaMap.d.ts'
import type { Object } from '../../../java/lang/Object.d.ts'
import type { Map$Entry } from '../../../java/util/Map$Entry.d.ts'
export class CaseInsensitiveMap$MapEntry extends Object implements Map$Entry<string, Value> {
    constructor(null_: JavaMap<any, any>, key: string, _value: Object)
    // private _value: Value;
    readonly key: string;
    readonly value: Value;
    equals(other: Object | null): boolean;
    hashCode(): number;
    setValue<Value extends unknown>(newValue: Value): Value;
    toString(): string;
}