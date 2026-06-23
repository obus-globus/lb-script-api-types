import type { InputStream } from '../../java/io/InputStream.d.ts'
import type { Reader } from '../../java/io/Reader.d.ts'
import type { Class } from '../../java/lang/Class.d.ts'
import type { BigDecimal } from '../../java/math/BigDecimal.d.ts'
import type { URL } from '../../java/net/URL.d.ts'
import type { Array } from '../../java/sql/Array.d.ts'
import type { Blob } from '../../java/sql/Blob.d.ts'
import type { Clob } from '../../java/sql/Clob.d.ts'
import type { Connection } from '../../java/sql/Connection.d.ts'
import type { Date } from '../../java/sql/Date.d.ts'
import type { NClob } from '../../java/sql/NClob.d.ts'
import type { ParameterMetaData } from '../../java/sql/ParameterMetaData.d.ts'
import type { PreparedStatement } from '../../java/sql/PreparedStatement.d.ts'
import type { Ref } from '../../java/sql/Ref.d.ts'
import type { ResultSet } from '../../java/sql/ResultSet.d.ts'
import type { ResultSetMetaData } from '../../java/sql/ResultSetMetaData.d.ts'
import type { RowId } from '../../java/sql/RowId.d.ts'
import type { SQLType } from '../../java/sql/SQLType.d.ts'
import type { SQLXML } from '../../java/sql/SQLXML.d.ts'
import type { Time } from '../../java/sql/Time.d.ts'
import type { Timestamp } from '../../java/sql/Timestamp.d.ts'
import type { Calendar } from '../../java/util/Calendar.d.ts'
import type { Object } from '../../java/lang/Object.d.ts'
export interface CallableStatement extends PreparedStatement, Object{
    addBatch(): void;
    addBatch(arg0: string): void;
    cancel(): void;
    clearBatch(): void;
    clearParameters(): void;
    clearWarnings(): void;
    close(): void;
    closeOnCompletion(): void;
    execute(): boolean;
    execute(arg0: string): boolean;
    execute(arg0: string, arg1: number): boolean;
    executeLargeUpdate(): number;
    executeQuery(): ResultSet;
    executeQuery(arg0: string): ResultSet;
    executeUpdate(): number;
    executeUpdate(arg0: string): number;
    executeUpdate(arg0: string, arg1: number): number;
    getArray(arg0: number): Array;
    getArray(arg0: string): Array;
    getBigDecimal(arg0: number): BigDecimal;
    getBigDecimal(arg0: number, arg1: number): BigDecimal;
    getBigDecimal(arg0: string): BigDecimal;
    getBlob(arg0: number): Blob;
    getBlob(arg0: string): Blob;
    getBoolean(arg0: number): boolean;
    getBoolean(arg0: string): boolean;
    getByte(arg0: number): number;
    getByte(arg0: string): number;
    getBytes(arg0: number): number[];
    getBytes(arg0: string): number[];
    getCharacterStream(arg0: number): Reader;
    getCharacterStream(arg0: string): Reader;
    getClob(arg0: number): Clob;
    getClob(arg0: string): Clob;
    getConnection(): Connection;
    getDate(arg0: number): Date;
    getDate(arg0: number, arg1: Calendar): Date;
    getDate(arg0: string): Date;
    getDate(arg0: string, arg1: Calendar): Date;
    getDouble(arg0: number): number;
    getDouble(arg0: string): number;
    getFetchDirection(): number;
    getFetchSize(): number;
    getFloat(arg0: number): number;
    getFloat(arg0: string): number;
    getGeneratedKeys(): ResultSet;
    getInt(arg0: number): number;
    getInt(arg0: string): number;
    getLong(arg0: number): number;
    getLong(arg0: string): number;
    getMaxFieldSize(): number;
    getMaxRows(): number;
    getMetaData(): ResultSetMetaData;
    getMoreResults(): boolean;
    getMoreResults(arg0: number): boolean;
    getNCharacterStream(arg0: number): Reader;
    getNCharacterStream(arg0: string): Reader;
    getNClob(arg0: number): NClob;
    getNClob(arg0: string): NClob;
    getNString(arg0: number): string;
    getNString(arg0: string): string;
    getObject(arg0: number): Object;
    getObject<T extends unknown>(arg0: number, arg1: Class<T>): T;
    getObject(arg0: number, arg1: { [key: string]: Class<Object> }): Object;
    getObject(arg0: string): Object;
    getObject<T extends unknown>(arg0: string, arg1: Class<T>): T;
    getObject(arg0: string, arg1: { [key: string]: Class<Object> }): Object;
    getParameterMetaData(): ParameterMetaData;
    getQueryTimeout(): number;
    getRef(arg0: number): Ref;
    getRef(arg0: string): Ref;
    getResultSet(): ResultSet;
    getResultSetConcurrency(): number;
    getResultSetHoldability(): number;
    getResultSetType(): number;
    getRowId(arg0: number): RowId;
    getRowId(arg0: string): RowId;
    getSQLXML(arg0: number): SQLXML;
    getSQLXML(arg0: string): SQLXML;
    getShort(arg0: number): number;
    getShort(arg0: string): number;
    getString(arg0: number): string;
    getString(arg0: string): string;
    getTime(arg0: number): Time;
    getTime(arg0: number, arg1: Calendar): Time;
    getTime(arg0: string): Time;
    getTime(arg0: string, arg1: Calendar): Time;
    getTimestamp(arg0: number): Timestamp;
    getTimestamp(arg0: number, arg1: Calendar): Timestamp;
    getTimestamp(arg0: string): Timestamp;
    getTimestamp(arg0: string, arg1: Calendar): Timestamp;
    getURL(arg0: number): URL;
    getURL(arg0: string): URL;
    getUpdateCount(): number;
    isCloseOnCompletion(): boolean;
    isClosed(): boolean;
    isPoolable(): boolean;
    registerOutParameter(arg0: number, arg1: SQLType): void;
    registerOutParameter(arg0: number, arg1: SQLType, arg2: number): void;
    registerOutParameter(arg0: number, arg1: SQLType, arg2: string): void;
    registerOutParameter(arg0: number, arg1: number): void;
    registerOutParameter(arg0: number, arg1: number, arg2: number): void;
    registerOutParameter(arg0: number, arg1: number, arg2: string): void;
    registerOutParameter(arg0: string, arg1: SQLType): void;
    registerOutParameter(arg0: string, arg1: SQLType, arg2: number): void;
    registerOutParameter(arg0: string, arg1: SQLType, arg2: string): void;
    registerOutParameter(arg0: string, arg1: number): void;
    registerOutParameter(arg0: string, arg1: number, arg2: number): void;
    registerOutParameter(arg0: string, arg1: number, arg2: string): void;
    setArray(arg0: number, arg1: Array): void;
    setAsciiStream(arg0: string, arg1: InputStream): void;
    setAsciiStream(arg0: string, arg1: InputStream, arg2: number): void;
    setBigDecimal(arg0: string, arg1: BigDecimal): void;
    setBinaryStream(arg0: string, arg1: InputStream): void;
    setBinaryStream(arg0: string, arg1: InputStream, arg2: number): void;
    setBlob(arg0: string, arg1: InputStream): void;
    setBlob(arg0: string, arg1: InputStream, arg2: number): void;
    setBlob(arg0: string, arg1: Blob): void;
    setBoolean(arg0: string, arg1: boolean): void;
    setByte(arg0: string, arg1: number): void;
    setBytes(arg0: string, arg1: number[]): void;
    setCharacterStream(arg0: string, arg1: Reader): void;
    setCharacterStream(arg0: string, arg1: Reader, arg2: number): void;
    setClob(arg0: string, arg1: Reader): void;
    setClob(arg0: string, arg1: Reader, arg2: number): void;
    setClob(arg0: string, arg1: Clob): void;
    setCursorName(arg0: string): void;
    setDate(arg0: string, arg1: Date): void;
    setDate(arg0: string, arg1: Date, arg2: Calendar): void;
    setDouble(arg0: string, arg1: number): void;
    setEscapeProcessing(arg0: boolean): void;
    setFetchDirection(arg0: number): void;
    setFetchSize(arg0: number): void;
    setFloat(arg0: string, arg1: number): void;
    setInt(arg0: string, arg1: number): void;
    setLong(arg0: string, arg1: number): void;
    setMaxFieldSize(arg0: number): void;
    setMaxRows(arg0: number): void;
    setNCharacterStream(arg0: string, arg1: Reader): void;
    setNCharacterStream(arg0: string, arg1: Reader, arg2: number): void;
    setNClob(arg0: string, arg1: Reader): void;
    setNClob(arg0: string, arg1: Reader, arg2: number): void;
    setNClob(arg0: string, arg1: NClob): void;
    setNString(arg0: string, arg1: string): void;
    setNull(arg0: string, arg1: number): void;
    setNull(arg0: string, arg1: number, arg2: string): void;
    setObject(arg0: number, arg1: Object, arg2: SQLType): void;
    setObject(arg0: number, arg1: Object, arg2: SQLType, arg3: number): void;
    setObject(arg0: string, arg1: Object): void;
    setObject(arg0: string, arg1: Object, arg2: SQLType): void;
    setObject(arg0: string, arg1: Object, arg2: SQLType, arg3: number): void;
    setObject(arg0: string, arg1: Object, arg2: number): void;
    setObject(arg0: string, arg1: Object, arg2: number, arg3: number): void;
    setPoolable(arg0: boolean): void;
    setQueryTimeout(arg0: number): void;
    setRef(arg0: number, arg1: Ref): void;
    setRowId(arg0: string, arg1: RowId): void;
    setSQLXML(arg0: string, arg1: SQLXML): void;
    setShort(arg0: string, arg1: number): void;
    setString(arg0: string, arg1: string): void;
    setTime(arg0: string, arg1: Time): void;
    setTime(arg0: string, arg1: Time, arg2: Calendar): void;
    setTimestamp(arg0: string, arg1: Timestamp): void;
    setTimestamp(arg0: string, arg1: Timestamp, arg2: Calendar): void;
    setURL(arg0: string, arg1: URL): void;
    setUnicodeStream(arg0: number, arg1: InputStream, arg2: number): void;
    wasNull(): boolean;
}