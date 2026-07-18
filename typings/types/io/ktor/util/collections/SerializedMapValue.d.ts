import type { Object } from '../../../../java/lang/Object.d.ts'
export class SerializedMapValue<T extends unknown> extends Object {
    constructor(key: string, serialize: (param0: T) => string | null, deserialize: (param0: string) => T)
    // private deserialize: (param0: string) => T;
    /*not mapped: */ getDeserialize$ktor_utils(): (param0: string) => T;
    // private key: string;
    /*not mapped: */ getKey$ktor_utils(): string;
    // private serialize: (param0: T) => string | null;
    /*not mapped: */ getSerialize$ktor_utils(): (param0: T) => string | null;
}