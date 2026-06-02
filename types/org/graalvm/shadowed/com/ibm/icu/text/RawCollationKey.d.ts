import type { ByteArrayWrapper } from '../../../../../../../org/graalvm/shadowed/com/ibm/icu/util/ByteArrayWrapper.d.ts'
export class RawCollationKey extends ByteArrayWrapper {
    constructor()
    constructor(bytes: number[])
    constructor(bytesToAdopt: number[], size: number)
    constructor(capacity: number)
    compareTo(rhs: RawCollationKey): number;
}