import type { InputStream } from '../../java/io/InputStream.d.ts'
import type { Reader } from '../../java/io/Reader.d.ts'
import type { BigDecimal } from '../../java/math/BigDecimal.d.ts'
import type { URL } from '../../java/net/URL.d.ts'
import type { Array } from '../../java/sql/Array.d.ts'
import type { Blob } from '../../java/sql/Blob.d.ts'
import type { Clob } from '../../java/sql/Clob.d.ts'
import type { Date } from '../../java/sql/Date.d.ts'
import type { NClob } from '../../java/sql/NClob.d.ts'
import type { ParameterMetaData } from '../../java/sql/ParameterMetaData.d.ts'
import type { Ref } from '../../java/sql/Ref.d.ts'
import type { ResultSet } from '../../java/sql/ResultSet.d.ts'
import type { ResultSetMetaData } from '../../java/sql/ResultSetMetaData.d.ts'
import type { RowId } from '../../java/sql/RowId.d.ts'
import type { SQLType } from '../../java/sql/SQLType.d.ts'
import type { SQLXML } from '../../java/sql/SQLXML.d.ts'
import type { Statement } from '../../java/sql/Statement.d.ts'
import type { Time } from '../../java/sql/Time.d.ts'
import type { Timestamp } from '../../java/sql/Timestamp.d.ts'
import type { Calendar } from '../../java/util/Calendar.d.ts'
import type { Object } from '../../java/lang/Object.d.ts'
export interface PreparedStatement extends Statement, Object{
    addBatch(): void;
    clearParameters(): void;
    enquoteIdentifier(arg0: string, arg1: boolean): string;
    enquoteLiteral(arg0: string): string;
    enquoteNCharLiteral(arg0: string): string;
    execute(): boolean;
    executeLargeBatch(): number[];
    executeLargeUpdate(): number;
    executeLargeUpdate(arg0: string): number;
    executeLargeUpdate(arg0: string, arg1: string[]): number;
    executeLargeUpdate(arg0: string, arg1: number): number;
    executeLargeUpdate(arg0: string, arg1: number[]): number;
    executeLargeUpdate(arg0: string): number;
    executeLargeUpdate(arg0: string, arg1: string[]): number;
    executeLargeUpdate(arg0: string, arg1: number): number;
    executeLargeUpdate(arg0: string, arg1: number[]): number;
    executeQuery(): ResultSet;
    executeUpdate(): number;
    getLargeMaxRows(): number;
    getLargeUpdateCount(): number;
    getMetaData(): ResultSetMetaData;
    getParameterMetaData(): ParameterMetaData;
    isSimpleIdentifier(arg0: string): boolean;
    setArray(arg0: number, arg1: Array): void;
    setAsciiStream(arg0: number, arg1: InputStream): void;
    setAsciiStream(arg0: number, arg1: InputStream, arg2: number): void;
    setAsciiStream(arg0: number, arg1: InputStream, arg2: number): void;
    setBigDecimal(arg0: number, arg1: BigDecimal): void;
    setBinaryStream(arg0: number, arg1: InputStream): void;
    setBinaryStream(arg0: number, arg1: InputStream, arg2: number): void;
    setBinaryStream(arg0: number, arg1: InputStream, arg2: number): void;
    setBlob(arg0: number, arg1: InputStream): void;
    setBlob(arg0: number, arg1: InputStream, arg2: number): void;
    setBlob(arg0: number, arg1: Blob): void;
    setBoolean(arg0: number, arg1: boolean): void;
    setByte(arg0: number, arg1: number): void;
    setBytes(arg0: number, arg1: number[]): void;
    setCharacterStream(arg0: number, arg1: Reader): void;
    setCharacterStream(arg0: number, arg1: Reader, arg2: number): void;
    setCharacterStream(arg0: number, arg1: Reader, arg2: number): void;
    setClob(arg0: number, arg1: Reader): void;
    setClob(arg0: number, arg1: Reader, arg2: number): void;
    setClob(arg0: number, arg1: Clob): void;
    setDate(arg0: number, arg1: Date): void;
    setDate(arg0: number, arg1: Date, arg2: Calendar): void;
    setDouble(arg0: number, arg1: number): void;
    setFloat(arg0: number, arg1: number): void;
    setInt(arg0: number, arg1: number): void;
    setLargeMaxRows(arg0: number): void;
    setLong(arg0: number, arg1: number): void;
    setNCharacterStream(arg0: number, arg1: Reader): void;
    setNCharacterStream(arg0: number, arg1: Reader, arg2: number): void;
    setNClob(arg0: number, arg1: Reader): void;
    setNClob(arg0: number, arg1: Reader, arg2: number): void;
    setNClob(arg0: number, arg1: NClob): void;
    setNString(arg0: number, arg1: string): void;
    setNull(arg0: number, arg1: number): void;
    setNull(arg0: number, arg1: number, arg2: string): void;
    setObject(arg0: number, arg1: Object): void;
    setObject(arg0: number, arg1: Object, arg2: SQLType): void;
    setObject(arg0: number, arg1: Object, arg2: SQLType, arg3: number): void;
    setObject(arg0: number, arg1: Object, arg2: number): void;
    setObject(arg0: number, arg1: Object, arg2: number, arg3: number): void;
    setRef(arg0: number, arg1: Ref): void;
    setRowId(arg0: number, arg1: RowId): void;
    setSQLXML(arg0: number, arg1: SQLXML): void;
    setShort(arg0: number, arg1: number): void;
    setString(arg0: number, arg1: string): void;
    setTime(arg0: number, arg1: Time): void;
    setTime(arg0: number, arg1: Time, arg2: Calendar): void;
    setTimestamp(arg0: number, arg1: Timestamp): void;
    setTimestamp(arg0: number, arg1: Timestamp, arg2: Calendar): void;
    setURL(arg0: number, arg1: URL): void;
    setUnicodeStream(arg0: number, arg1: InputStream, arg2: number): void;
}