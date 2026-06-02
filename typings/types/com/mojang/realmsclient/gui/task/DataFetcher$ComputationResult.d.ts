import type { Either } from '../../../../../com/mojang/datafixers/util/Either.d.ts'
import type { Exception } from '../../../../../java/lang/Exception.d.ts'
import type { Record } from '../../../../../java/lang/Record.d.ts'
import type { Object } from '../../../../../java/lang/Object.d.ts'
export class DataFetcher$ComputationResult<T extends Object | number | string | boolean> extends Record {
    // private time: number;
    // private value: Either<T, Exception>;
    equals(o: Object | null): boolean;
    hashCode(): number;
    time(): number;
    toString(): string;
    value(): Either<T, Exception>;
}