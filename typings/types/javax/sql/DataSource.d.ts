import type { PrintWriter } from '../../java/io/PrintWriter.d.ts'
import type { Connection } from '../../java/sql/Connection.d.ts'
import type { ConnectionBuilder } from '../../java/sql/ConnectionBuilder.d.ts'
import type { ShardingKeyBuilder } from '../../java/sql/ShardingKeyBuilder.d.ts'
import type { Wrapper } from '../../java/sql/Wrapper.d.ts'
import type { Logger } from '../../java/util/logging/Logger.d.ts'
import type { CommonDataSource } from '../../javax/sql/CommonDataSource.d.ts'
import type { Object } from '../../java/lang/Object.d.ts'
export interface DataSource extends Wrapper, CommonDataSource, Object{
    createConnectionBuilder(): ConnectionBuilder;
    createShardingKeyBuilder(): ShardingKeyBuilder;
    getConnection(): Connection;
    getConnection(arg0: string, arg1: string): Connection;
    getLogWriter(): PrintWriter;
    getLoginTimeout(): number;
    getParentLogger(): Logger;
    setLogWriter(arg0: PrintWriter): void;
    setLoginTimeout(arg0: number): void;
}