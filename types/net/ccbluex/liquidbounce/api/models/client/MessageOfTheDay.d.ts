import type { Object } from '../../../../../../java/lang/Object.d.ts'
export class MessageOfTheDay extends Object {
    constructor(message: string)
    readonly message: string;
    component1(): string;
    copy(message: string): MessageOfTheDay;
    equals(other: Object | null): boolean;
    hashCode(): number;
    toString(): string;
}