import type { DataResult } from '../../../com/mojang/serialization/DataResult.d.ts'
import type { DynamicOps } from '../../../com/mojang/serialization/DynamicOps.d.ts'
import type { AbstractListBuilder } from '../../../net/minecraft/util/AbstractListBuilder.d.ts'
import type { Unit } from '../../../net/minecraft/util/Unit.d.ts'
export class NullOps$NullListBuilder extends AbstractListBuilder<Unit, Unit> {
    constructor(ops: DynamicOps<Unit>)
    append(builder: Unit, value: Unit): Unit;
    build(arg0: DataResult<Unit>): DataResult<Unit>;
    build(prefix: Unit): DataResult<Unit>;
    build(builder: Unit, prefix: Unit): DataResult<Unit>;
    initBuilder(): Unit;
}