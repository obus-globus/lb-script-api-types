import type { Object } from '../../../../../java/lang/Object.d.ts'
import type { Number } from '../../../../../java/lang/Number.d.ts'
import type { Map$Entry } from '../../../../../java/util/Map$Entry.d.ts'
import type { CustomValue$CvType } from '../../../../../net/fabricmc/loader/api/metadata/CustomValue$CvType.d.ts'
export interface CustomValue extends Object{
    getAsArray(): CustomValue[];
    getAsBoolean(): boolean;
    getAsNumber(): Number;
    getAsObject(): Map$Entry<string, CustomValue>[];
    getAsString(): string;
    getType(): CustomValue$CvType;
}