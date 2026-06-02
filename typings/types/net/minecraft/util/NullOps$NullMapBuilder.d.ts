import type { DataResult } from '../../../com/mojang/serialization/DataResult.d.ts'
import type { DynamicOps } from '../../../com/mojang/serialization/DynamicOps.d.ts'
import type { RecordBuilder$AbstractUniversalBuilder } from '../../../com/mojang/serialization/RecordBuilder$AbstractUniversalBuilder.d.ts'
import type { Unit } from '../../../net/minecraft/util/Unit.d.ts'
export class NullOps$NullMapBuilder extends RecordBuilder$AbstractUniversalBuilder<Unit, Unit> {
    constructor(ops: DynamicOps<Unit>)
    append(key: Unit, value: Unit, builder: Unit): Unit;
    build(builder: Unit, prefix: Unit): DataResult<Unit>;
    initBuilder(): Unit;
}