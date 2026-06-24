import type { Pair } from '../../../../com/mojang/datafixers/util/Pair.d.ts'
import type { Unit } from '../../../../com/mojang/datafixers/util/Unit.d.ts'
import type { DataResult } from '../../../../com/mojang/serialization/DataResult.d.ts'
import type { DynamicOps } from '../../../../com/mojang/serialization/DynamicOps.d.ts'
import type { ListCodec } from '../../../../com/mojang/serialization/codecs/ListCodec.d.ts'
import type { Stream$Builder } from '../../../../java/util/stream/Stream$Builder.d.ts'
import type { Object } from '../../../../java/lang/Object.d.ts'
export class ListCodec$DecoderState<T extends unknown> extends Object {
    private constructor(null_: ListCodec<E>, arg1: DynamicOps<T>)
    // private elements: E[];
    // private failed: Stream$Builder<T>;
    // private ops: DynamicOps<T>;
    // private result: DataResult<Unit>;
    // private totalCount: number;
    accept(arg0: T): void;
    build<E extends unknown>(): DataResult<Pair<E[], T>>;
}