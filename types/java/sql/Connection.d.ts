import type { AutoCloseable } from '../../java/lang/AutoCloseable.d.ts'
import type { Class } from '../../java/lang/Class.d.ts'
import type { Array } from '../../java/sql/Array.d.ts'
import type { Blob } from '../../java/sql/Blob.d.ts'
import type { CallableStatement } from '../../java/sql/CallableStatement.d.ts'
import type { Clob } from '../../java/sql/Clob.d.ts'
import type { DatabaseMetaData } from '../../java/sql/DatabaseMetaData.d.ts'
import type { NClob } from '../../java/sql/NClob.d.ts'
import type { PreparedStatement } from '../../java/sql/PreparedStatement.d.ts'
import type { SQLXML } from '../../java/sql/SQLXML.d.ts'
import type { Savepoint } from '../../java/sql/Savepoint.d.ts'
import type { ShardingKey } from '../../java/sql/ShardingKey.d.ts'
import type { Statement } from '../../java/sql/Statement.d.ts'
import type { Struct } from '../../java/sql/Struct.d.ts'
import type { Wrapper } from '../../java/sql/Wrapper.d.ts'
import type { Executor } from '../../java/util/concurrent/Executor.d.ts'
import type { Object } from '../../java/lang/Object.d.ts'
export interface Connection extends AutoCloseable, Wrapper, Object{
    abort(arg0: Executor): void;
    beginRequest(): void;
    clearWarnings(): void;
    close(): void;
    commit(): void;
    createArrayOf(arg0: string, arg1: Object[]): Array;
    createBlob(): Blob;
    createClob(): Clob;
    createNClob(): NClob;
    createSQLXML(): SQLXML;
    createStatement(): Statement;
    createStatement(arg0: number, arg1: number): Statement;
    createStatement(arg0: number, arg1: number, arg2: number): Statement;
    createStruct(arg0: string, arg1: Object[]): Struct;
    endRequest(): void;
    getAutoCommit(): boolean;
    getCatalog(): string;
    getClientInfo(): Properties;
    getClientInfo(arg0: string): string;
    getHoldability(): number;
    getMetaData(): DatabaseMetaData;
    getNetworkTimeout(): number;
    getSchema(): string;
    getTransactionIsolation(): number;
    getTypeMap(): { [key: string]: Class<Object> };
    getWarnings(): (Object | null)[];
    isClosed(): boolean;
    isReadOnly(): boolean;
    isValid(arg0: number): boolean;
    nativeSQL(arg0: string): string;
    prepareCall(arg0: string): CallableStatement;
    prepareCall(arg0: string, arg1: number, arg2: number): CallableStatement;
    prepareCall(arg0: string, arg1: number, arg2: number, arg3: number): CallableStatement;
    prepareStatement(arg0: string): PreparedStatement;
    prepareStatement(arg0: string, arg1: string[]): PreparedStatement;
    prepareStatement(arg0: string, arg1: number): PreparedStatement;
    prepareStatement(arg0: string, arg1: number, arg2: number): PreparedStatement;
    prepareStatement(arg0: string, arg1: number, arg2: number, arg3: number): PreparedStatement;
    prepareStatement(arg0: string, arg1: number[]): PreparedStatement;
    releaseSavepoint(arg0: Savepoint): void;
    rollback(): void;
    rollback(arg0: Savepoint): void;
    setAutoCommit(arg0: boolean): void;
    setCatalog(arg0: string): void;
    setClientInfo(arg0: Properties): void;
    setClientInfo(arg0: string, arg1: string): void;
    setHoldability(arg0: number): void;
    setNetworkTimeout(arg0: Executor, arg1: number): void;
    setReadOnly(arg0: boolean): void;
    setSavepoint(): Savepoint;
    setSavepoint(arg0: string): Savepoint;
    setSchema(arg0: string): void;
    setShardingKey(arg0: ShardingKey): void;
    setShardingKey(arg0: ShardingKey, arg1: ShardingKey): void;
    setShardingKeyIfValid(arg0: ShardingKey, arg1: ShardingKey, arg2: number): boolean;
    setShardingKeyIfValid(arg0: ShardingKey, arg1: number): boolean;
    setTransactionIsolation(arg0: number): void;
    setTypeMap(arg0: { [key: string]: Class<Object> }): void;
}