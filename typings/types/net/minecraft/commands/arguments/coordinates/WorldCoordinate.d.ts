import type { StringReader } from '../../../../../com/mojang/brigadier/StringReader.d.ts'
import type { SimpleCommandExceptionType } from '../../../../../com/mojang/brigadier/exceptions/SimpleCommandExceptionType.d.ts'
import type { Record } from '../../../../../java/lang/Record.d.ts'
import type { Object } from '../../../../../java/lang/Object.d.ts'
export class WorldCoordinate extends Record {
    static ERROR_EXPECTED_DOUBLE: SimpleCommandExceptionType;
    static ERROR_EXPECTED_INT: SimpleCommandExceptionType;
    static isRelative(paramreader: StringReader): boolean;
    static parseDouble(paramreader: StringReader, paramcenter: boolean): WorldCoordinate;
    static parseInt(paramreader: StringReader): WorldCoordinate;
    constructor(relative: boolean, value: number)
    // private value: number;
    equals(o: Object | null): boolean;
    get(original: number): number;
    hashCode(): number;
    isRelative(): boolean;
    relative(): boolean;
    toString(): string;
    value(): number;
}