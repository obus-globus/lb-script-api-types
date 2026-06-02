import type { InputStream } from '../../java/io/InputStream.d.ts'
import type { Reader } from '../../java/io/Reader.d.ts'
import type { AutoCloseable } from '../../java/lang/AutoCloseable.d.ts'
import type { Class } from '../../java/lang/Class.d.ts'
import type { BigDecimal } from '../../java/math/BigDecimal.d.ts'
import type { URL } from '../../java/net/URL.d.ts'
import type { Array } from '../../java/sql/Array.d.ts'
import type { Blob } from '../../java/sql/Blob.d.ts'
import type { Clob } from '../../java/sql/Clob.d.ts'
import type { Date } from '../../java/sql/Date.d.ts'
import type { NClob } from '../../java/sql/NClob.d.ts'
import type { Ref } from '../../java/sql/Ref.d.ts'
import type { ResultSetMetaData } from '../../java/sql/ResultSetMetaData.d.ts'
import type { RowId } from '../../java/sql/RowId.d.ts'
import type { SQLType } from '../../java/sql/SQLType.d.ts'
import type { SQLXML } from '../../java/sql/SQLXML.d.ts'
import type { Statement } from '../../java/sql/Statement.d.ts'
import type { Time } from '../../java/sql/Time.d.ts'
import type { Timestamp } from '../../java/sql/Timestamp.d.ts'
import type { Wrapper } from '../../java/sql/Wrapper.d.ts'
import type { Calendar } from '../../java/util/Calendar.d.ts'
import type { Object } from '../../java/lang/Object.d.ts'
export interface ResultSet extends AutoCloseable, Wrapper, Object{
    absolute(arg0: number): boolean;
    afterLast(): void;
    beforeFirst(): void;
    cancelRowUpdates(): void;
    clearWarnings(): void;
    close(): void;
    deleteRow(): void;
    findColumn(arg0: string): number;
    first(): boolean;
    getArray(arg0: number): Array;
    getArray(arg0: string): Array;
    getAsciiStream(arg0: number): InputStream;
    getAsciiStream(arg0: string): InputStream;
    getBigDecimal(arg0: number): BigDecimal;
    getBigDecimal(arg0: number, arg1: number): BigDecimal;
    getBigDecimal(arg0: string): BigDecimal;
    getBigDecimal(arg0: string, arg1: number): BigDecimal;
    getBinaryStream(arg0: number): InputStream;
    getBinaryStream(arg0: string): InputStream;
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
    getConcurrency(): number;
    getCursorName(): string;
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
    getHoldability(): number;
    getInt(arg0: number): number;
    getInt(arg0: string): number;
    getLong(arg0: number): number;
    getLong(arg0: string): number;
    getMetaData(): ResultSetMetaData;
    getNCharacterStream(arg0: number): Reader;
    getNCharacterStream(arg0: string): Reader;
    getNClob(arg0: number): NClob;
    getNClob(arg0: string): NClob;
    getNString(arg0: number): string;
    getNString(arg0: string): string;
    getObject(arg0: number): Object;
    getObject<T extends Object | number | string | boolean>(arg0: number, arg1: Class<T>): T;
    getObject(arg0: number, arg1: { [key: string]: Class<Object> }): Object;
    getObject(arg0: string): Object;
    getObject<T extends Object | number | string | boolean>(arg0: string, arg1: Class<T>): T;
    getObject(arg0: string, arg1: { [key: string]: Class<Object> }): Object;
    getRef(arg0: number): Ref;
    getRef(arg0: string): Ref;
    getRow(): number;
    getRowId(arg0: number): RowId;
    getRowId(arg0: string): RowId;
    getSQLXML(arg0: number): SQLXML;
    getSQLXML(arg0: string): SQLXML;
    getShort(arg0: number): number;
    getShort(arg0: string): number;
    getStatement(): Statement;
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
    getType(): number;
    getURL(arg0: number): URL;
    getURL(arg0: string): URL;
    getUnicodeStream(arg0: number): InputStream;
    getUnicodeStream(arg0: string): InputStream;
    getWarnings(): (Object | null)[];
    insertRow(): void;
    isAfterLast(): boolean;
    isBeforeFirst(): boolean;
    isClosed(): boolean;
    isFirst(): boolean;
    isLast(): boolean;
    last(): boolean;
    moveToCurrentRow(): void;
    moveToInsertRow(): void;
    next(): boolean;
    previous(): boolean;
    refreshRow(): void;
    relative(arg0: number): boolean;
    rowDeleted(): boolean;
    rowInserted(): boolean;
    rowUpdated(): boolean;
    setFetchDirection(arg0: number): void;
    setFetchSize(arg0: number): void;
    updateArray(arg0: number, arg1: Array): void;
    updateArray(arg0: string, arg1: Array): void;
    updateAsciiStream(arg0: number, arg1: InputStream): void;
    updateAsciiStream(arg0: number, arg1: InputStream, arg2: number): void;
    updateAsciiStream(arg0: number, arg1: InputStream, arg2: number): void;
    updateAsciiStream(arg0: string, arg1: InputStream): void;
    updateAsciiStream(arg0: string, arg1: InputStream, arg2: number): void;
    updateAsciiStream(arg0: string, arg1: InputStream, arg2: number): void;
    updateBigDecimal(arg0: number, arg1: BigDecimal): void;
    updateBigDecimal(arg0: string, arg1: BigDecimal): void;
    updateBinaryStream(arg0: number, arg1: InputStream): void;
    updateBinaryStream(arg0: number, arg1: InputStream, arg2: number): void;
    updateBinaryStream(arg0: number, arg1: InputStream, arg2: number): void;
    updateBinaryStream(arg0: string, arg1: InputStream): void;
    updateBinaryStream(arg0: string, arg1: InputStream, arg2: number): void;
    updateBinaryStream(arg0: string, arg1: InputStream, arg2: number): void;
    updateBlob(arg0: number, arg1: InputStream): void;
    updateBlob(arg0: number, arg1: InputStream, arg2: number): void;
    updateBlob(arg0: number, arg1: Blob): void;
    updateBlob(arg0: string, arg1: InputStream): void;
    updateBlob(arg0: string, arg1: InputStream, arg2: number): void;
    updateBlob(arg0: string, arg1: Blob): void;
    updateBoolean(arg0: number, arg1: boolean): void;
    updateBoolean(arg0: string, arg1: boolean): void;
    updateByte(arg0: number, arg1: number): void;
    updateByte(arg0: string, arg1: number): void;
    updateBytes(arg0: number, arg1: number[]): void;
    updateBytes(arg0: string, arg1: number[]): void;
    updateCharacterStream(arg0: number, arg1: Reader): void;
    updateCharacterStream(arg0: number, arg1: Reader, arg2: number): void;
    updateCharacterStream(arg0: number, arg1: Reader, arg2: number): void;
    updateCharacterStream(arg0: string, arg1: Reader): void;
    updateCharacterStream(arg0: string, arg1: Reader, arg2: number): void;
    updateCharacterStream(arg0: string, arg1: Reader, arg2: number): void;
    updateClob(arg0: number, arg1: Reader): void;
    updateClob(arg0: number, arg1: Reader, arg2: number): void;
    updateClob(arg0: number, arg1: Clob): void;
    updateClob(arg0: string, arg1: Reader): void;
    updateClob(arg0: string, arg1: Reader, arg2: number): void;
    updateClob(arg0: string, arg1: Clob): void;
    updateDate(arg0: number, arg1: Date): void;
    updateDate(arg0: string, arg1: Date): void;
    updateDouble(arg0: number, arg1: number): void;
    updateDouble(arg0: string, arg1: number): void;
    updateFloat(arg0: number, arg1: number): void;
    updateFloat(arg0: string, arg1: number): void;
    updateInt(arg0: number, arg1: number): void;
    updateInt(arg0: string, arg1: number): void;
    updateLong(arg0: number, arg1: number): void;
    updateLong(arg0: string, arg1: number): void;
    updateNCharacterStream(arg0: number, arg1: Reader): void;
    updateNCharacterStream(arg0: number, arg1: Reader, arg2: number): void;
    updateNCharacterStream(arg0: string, arg1: Reader): void;
    updateNCharacterStream(arg0: string, arg1: Reader, arg2: number): void;
    updateNClob(arg0: number, arg1: Reader): void;
    updateNClob(arg0: number, arg1: Reader, arg2: number): void;
    updateNClob(arg0: number, arg1: NClob): void;
    updateNClob(arg0: string, arg1: Reader): void;
    updateNClob(arg0: string, arg1: Reader, arg2: number): void;
    updateNClob(arg0: string, arg1: NClob): void;
    updateNString(arg0: number, arg1: string): void;
    updateNString(arg0: string, arg1: string): void;
    updateNull(arg0: number): void;
    updateNull(arg0: string): void;
    updateObject(arg0: number, arg1: Object): void;
    updateObject(arg0: number, arg1: Object, arg2: SQLType): void;
    updateObject(arg0: number, arg1: Object, arg2: SQLType, arg3: number): void;
    updateObject(arg0: number, arg1: Object, arg2: number): void;
    updateObject(arg0: string, arg1: Object): void;
    updateObject(arg0: string, arg1: Object, arg2: SQLType): void;
    updateObject(arg0: string, arg1: Object, arg2: SQLType, arg3: number): void;
    updateObject(arg0: string, arg1: Object, arg2: number): void;
    updateRef(arg0: number, arg1: Ref): void;
    updateRef(arg0: string, arg1: Ref): void;
    updateRow(): void;
    updateRowId(arg0: number, arg1: RowId): void;
    updateRowId(arg0: string, arg1: RowId): void;
    updateSQLXML(arg0: number, arg1: SQLXML): void;
    updateSQLXML(arg0: string, arg1: SQLXML): void;
    updateShort(arg0: number, arg1: number): void;
    updateShort(arg0: string, arg1: number): void;
    updateString(arg0: number, arg1: string): void;
    updateString(arg0: string, arg1: string): void;
    updateTime(arg0: number, arg1: Time): void;
    updateTime(arg0: string, arg1: Time): void;
    updateTimestamp(arg0: number, arg1: Timestamp): void;
    updateTimestamp(arg0: string, arg1: Timestamp): void;
    wasNull(): boolean;
}