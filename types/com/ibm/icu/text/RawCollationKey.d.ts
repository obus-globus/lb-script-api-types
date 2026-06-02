import type { ByteArrayWrapper } from '../../../../com/ibm/icu/util/ByteArrayWrapper.d.ts'
export class RawCollationKey extends ByteArrayWrapper {
    constructor()
    constructor(arg0: number[])
    constructor(arg0: number[], arg1: number)
    constructor(arg0: number)
    compareTo(arg0: RawCollationKey): number;
}