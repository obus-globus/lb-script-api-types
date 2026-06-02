import type { Object } from '../../../../../java/lang/Object.d.ts'
export class GameProfileRepository$ApiProfileResponse extends Object {
    constructor(id: string, name: string)
    readonly id: string;
    readonly name: string;
    component1(): string;
    component2(): string;
    copy(id: string, name: string): GameProfileRepository$ApiProfileResponse;
    equals(other: Object | null): boolean;
    hashCode(): number;
    toString(): string;
}