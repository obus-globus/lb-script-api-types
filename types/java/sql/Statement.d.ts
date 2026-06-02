import type { AutoCloseable } from '../../java/lang/AutoCloseable.d.ts'
import type { Connection } from '../../java/sql/Connection.d.ts'
import type { ResultSet } from '../../java/sql/ResultSet.d.ts'
import type { Wrapper } from '../../java/sql/Wrapper.d.ts'
import type { Object } from '../../java/lang/Object.d.ts'
export interface Statement extends AutoCloseable, Wrapper, Object{
    addBatch(arg0: string): void;
    cancel(): void;
    clearBatch(): void;
    clearWarnings(): void;
    close(): void;
    closeOnCompletion(): void;
    enquoteIdentifier(arg0: string, arg1: boolean): string;
    enquoteLiteral(arg0: string): string;
    enquoteNCharLiteral(arg0: string): string;
    execute(arg0: string): boolean;
    execute(arg0: string, arg1: string[]): boolean;
    execute(arg0: string, arg1: number): boolean;
    execute(arg0: string, arg1: number[]): boolean;
    executeBatch(): number[];
    executeLargeBatch(): number[];
    executeLargeUpdate(arg0: string): number;
    executeLargeUpdate(arg0: string, arg1: string[]): number;
    executeLargeUpdate(arg0: string, arg1: number): number;
    executeLargeUpdate(arg0: string, arg1: number[]): number;
    executeQuery(arg0: string): ResultSet;
    executeUpdate(arg0: string): number;
    executeUpdate(arg0: string, arg1: string[]): number;
    executeUpdate(arg0: string, arg1: number): number;
    executeUpdate(arg0: string, arg1: number[]): number;
    getConnection(): Connection;
    getFetchDirection(): number;
    getFetchSize(): number;
    getGeneratedKeys(): ResultSet;
    getLargeMaxRows(): number;
    getLargeUpdateCount(): number;
    getMaxFieldSize(): number;
    getMaxRows(): number;
    getMoreResults(): boolean;
    getMoreResults(arg0: number): boolean;
    getQueryTimeout(): number;
    getResultSet(): ResultSet;
    getResultSetConcurrency(): number;
    getResultSetHoldability(): number;
    getResultSetType(): number;
    getUpdateCount(): number;
    getWarnings(): (Object | null)[];
    isCloseOnCompletion(): boolean;
    isClosed(): boolean;
    isPoolable(): boolean;
    isSimpleIdentifier(arg0: string): boolean;
    setCursorName(arg0: string): void;
    setEscapeProcessing(arg0: boolean): void;
    setFetchDirection(arg0: number): void;
    setFetchSize(arg0: number): void;
    setLargeMaxRows(arg0: number): void;
    setMaxFieldSize(arg0: number): void;
    setMaxRows(arg0: number): void;
    setPoolable(arg0: boolean): void;
    setQueryTimeout(arg0: number): void;
}