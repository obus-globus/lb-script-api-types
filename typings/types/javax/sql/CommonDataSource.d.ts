import type { PrintWriter } from '../../java/io/PrintWriter.d.ts'
import type { ShardingKeyBuilder } from '../../java/sql/ShardingKeyBuilder.d.ts'
import type { Logger } from '../../java/util/logging/Logger.d.ts'
import type { Object } from '../../java/lang/Object.d.ts'
export interface CommonDataSource extends Object{
    createShardingKeyBuilder(): ShardingKeyBuilder;
    getLogWriter(): PrintWriter;
    getLoginTimeout(): number;
    getParentLogger(): Logger;
    setLogWriter(arg0: PrintWriter): void;
    setLoginTimeout(arg0: number): void;
}