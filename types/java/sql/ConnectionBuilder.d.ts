import type { Connection } from '../../java/sql/Connection.d.ts'
import type { ShardingKey } from '../../java/sql/ShardingKey.d.ts'
import type { Object } from '../../java/lang/Object.d.ts'
export interface ConnectionBuilder extends Object{
    build(): Connection;
    password(arg0: string): ConnectionBuilder;
    shardingKey(arg0: ShardingKey): ConnectionBuilder;
    superShardingKey(arg0: ShardingKey): ConnectionBuilder;
    user(arg0: string): ConnectionBuilder;
}