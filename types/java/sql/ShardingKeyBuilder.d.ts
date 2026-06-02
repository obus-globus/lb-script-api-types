import type { SQLType } from '../../java/sql/SQLType.d.ts'
import type { ShardingKey } from '../../java/sql/ShardingKey.d.ts'
import type { Object } from '../../java/lang/Object.d.ts'
export interface ShardingKeyBuilder extends Object{
    build(): ShardingKey;
    subkey(arg0: Object, arg1: SQLType): ShardingKeyBuilder;
}