import type { Record } from '../../../java/lang/Record.d.ts'
import type { Object } from '../../../java/lang/Object.d.ts'
import type { FriendlyByteBuf } from '../../../net/minecraft/network/FriendlyByteBuf.d.ts'
export class Crypt$SaltSignaturePair extends Record {
    static EMPTY: Crypt$SaltSignaturePair;
    static write(paramoutput: FriendlyByteBuf, paramsaltSignaturePair: Crypt$SaltSignaturePair): void;
    constructor(salt: number, signature: number[])
    constructor(input: FriendlyByteBuf)
    // private salt: number;
    // private signature: number[];
    equals(o: Object | null): boolean;
    hashCode(): number;
    isValid(): boolean;
    salt(): number;
    saltAsBytes(): number[];
    signature(): number[];
    toString(): string;
}