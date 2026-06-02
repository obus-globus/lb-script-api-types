import type { Object } from '../../../../../../java/lang/Object.d.ts'
export class Token extends Object {
    static createHashedTokenFromString(paramsecret: string): Token;
    private constructor(token: number[])
    // private token: number[];
    equals(o: Object | null): boolean;
    hashCode(): number;
    toString(): string;
}