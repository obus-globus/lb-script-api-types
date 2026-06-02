import type { Object } from '../../../../../java/lang/Object.d.ts'
import type { Map$Entry } from '../../../../../java/util/Map$Entry.d.ts'
import type { GsonElement } from '../../../../../net/lenni0451/commons/gson/elements/GsonElement.d.ts'
import type { Expirable } from '../../../../../net/raphimc/minecraftauth/util/Expirable.d.ts'
export class Jwt extends Object implements Expirable {
    static parse(paramarg0: string): Jwt;
    constructor(arg0: Map$Entry<string, GsonElement>[], arg1: Map$Entry<string, GsonElement>[], arg2: number[])
    readonly header: Map$Entry<string, GsonElement>[];
    readonly payload: Map$Entry<string, GsonElement>[];
    readonly signature: number[];
    equals(arg0: Object | null): boolean;
    getExpireTimeMs(): number;
    getHeader(): Map$Entry<string, GsonElement>[];
    getPayload(): Map$Entry<string, GsonElement>[];
    getSignature(): number[];
    hashCode(): number;
    isExpired(): boolean;
    toString(): string;
}