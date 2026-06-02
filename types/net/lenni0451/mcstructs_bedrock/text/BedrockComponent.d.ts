import type { Object } from '../../../../java/lang/Object.d.ts'
export abstract class BedrockComponent extends Object {
    constructor()
    asString(): string;
    copy(): BedrockComponent;
    equals(arg0: Object | null): boolean;
    hashCode(): number;
    toString(): string;
}