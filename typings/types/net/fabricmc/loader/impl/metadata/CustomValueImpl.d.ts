import type { Object } from '../../../../../java/lang/Object.d.ts'
import type { Number } from '../../../../../java/lang/Number.d.ts'
import type { Map$Entry } from '../../../../../java/util/Map$Entry.d.ts'
import type { CustomValue } from '../../../../../net/fabricmc/loader/api/metadata/CustomValue.d.ts'
import type { JsonReader } from '../../../../../net/fabricmc/loader/impl/lib/gson/JsonReader.d.ts'
export abstract class CustomValueImpl extends Object implements CustomValue {
    static readCustomValue(paramarg0: JsonReader): CustomValue;
    constructor()
    getAsArray(): CustomValue[];
    getAsBoolean(): boolean;
    getAsNumber(): Number;
    getAsObject(): Map$Entry<string, CustomValue>[];
    getAsString(): string;
}