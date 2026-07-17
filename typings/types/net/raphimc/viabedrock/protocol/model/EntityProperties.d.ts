import type { JavaMap } from '../../../../../JavaMap.d.ts'
import type { Record } from '../../../../../java/lang/Record.d.ts'
import type { Object } from '../../../../../java/lang/Object.d.ts'
export class EntityProperties extends Record {
    constructor(intProperties: JavaMap<any, any>, floatProperties: JavaMap<any, any>)
    // private floatProperties: JavaMap<any, any>;
    // private intProperties: JavaMap<any, any>;
    equals(arg0: Object | null): boolean;
    floatProperties(): JavaMap<any, any>;
    hashCode(): number;
    intProperties(): JavaMap<any, any>;
    toString(): string;
}