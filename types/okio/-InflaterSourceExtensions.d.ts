import type { Inflater } from '../java/util/zip/Inflater.d.ts'
import type { Object } from '../java/lang/Object.d.ts'
import type { InflaterSource } from '../okio/InflaterSource.d.ts'
import type { Source } from '../okio/Source.d.ts'
export class -InflaterSourceExtensions extends Object {
    static inflate(paramarg0: Source, paramarg1: Inflater): InflaterSource;
}