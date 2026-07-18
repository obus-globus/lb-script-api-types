import type { HashFunction } from '../../../io/ktor/util/HashFunction.d.ts'
import type { Object } from '../../../java/lang/Object.d.ts'
export class HashFunctionKt extends Object {
    static digest(self: HashFunction, input: number[], offset: number, length: number): number[];
}