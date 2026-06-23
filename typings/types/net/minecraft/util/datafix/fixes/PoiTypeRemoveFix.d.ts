import type { RewriteResult } from '../../../../../com/mojang/datafixers/RewriteResult.d.ts'
import type { Typed } from '../../../../../com/mojang/datafixers/Typed.d.ts'
import type { Schema } from '../../../../../com/mojang/datafixers/schemas/Schema.d.ts'
import type { Type } from '../../../../../com/mojang/datafixers/types/Type.d.ts'
import type { Dynamic } from '../../../../../com/mojang/serialization/Dynamic.d.ts'
import type { BitSet } from '../../../../../java/util/BitSet.d.ts'
import type { Function } from '../../../../../java/util/function/Function.d.ts'
import type { Predicate } from '../../../../../java/util/function/Predicate.d.ts'
import type { Stream } from '../../../../../java/util/stream/Stream.d.ts'
import type { Object } from '../../../../../java/lang/Object.d.ts'
import type { AbstractPoiSectionFix } from '../../../../../net/minecraft/util/datafix/fixes/AbstractPoiSectionFix.d.ts'
export class PoiTypeRemoveFix extends AbstractPoiSectionFix {
    static checked(paramarg0: string, paramarg1: Type<Object>, paramarg2: Type<Object>, paramarg3: (param0: Typed<Object>) => Typed<Object>, paramarg4: BitSet): RewriteResult<Object, Object>;
    constructor(outputSchema: Schema, name: string, typesToRemove: (param0: string) => boolean)
    // private typesToKeep: (param0: string) => boolean;
    processRecords<T extends unknown>(records: Stream<Dynamic<T>>): Stream<Dynamic<T>>;
    // private shouldKeepRecord<T extends unknown>(record: Dynamic<T>): boolean;
}