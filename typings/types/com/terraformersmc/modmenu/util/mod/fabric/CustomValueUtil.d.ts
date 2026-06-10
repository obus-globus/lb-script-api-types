import type { Optional } from '../../../../../../java/util/Optional.d.ts'
import type { Object } from '../../../../../../java/lang/Object.d.ts'
import type { Map$Entry } from '../../../../../../java/util/Map$Entry.d.ts'
import type { CustomValue } from '../../../../../../net/fabricmc/loader/api/metadata/CustomValue.d.ts'
import type { ModMetadata } from '../../../../../../net/fabricmc/loader/api/metadata/ModMetadata.d.ts'
export class CustomValueUtil extends Object {
    static getBoolean(paramarg0: string, paramarg1: Map$Entry<string, CustomValue>[]): Optional<boolean>;
    static getBoolean(paramarg0: string, paramarg1: ModMetadata): Optional<boolean>;
    static getString(paramarg0: string, paramarg1: Map$Entry<string, CustomValue>[]): Optional<string>;
    static getString(paramarg0: string, paramarg1: ModMetadata): Optional<string>;
    static getStringArray(paramarg0: string, paramarg1: Map$Entry<string, CustomValue>[]): Optional<(Object | null)[]>;
    static getStringMap(paramarg0: string, paramarg1: Map$Entry<string, CustomValue>[]): Optional<{ [key: string]: string }>;
    static getStringSet(paramarg0: string, paramarg1: Map$Entry<string, CustomValue>[]): Optional<string[]>;
    static getStringSet(paramarg0: string, paramarg1: ModMetadata): Optional<string[]>;
    constructor()
}