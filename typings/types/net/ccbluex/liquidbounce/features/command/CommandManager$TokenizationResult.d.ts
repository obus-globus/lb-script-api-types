import type { Object } from '../../../../../java/lang/Object.d.ts'
export class CommandManager$TokenizationResult extends Object {
    constructor(tokens: string[], tokenStartIndices: (Object | null)[])
    readonly tokenStartIndices: (Object | null)[];
    readonly tokens: string[];
    component1(): string[];
    component2(): (Object | null)[];
    copy(tokens: string[], tokenStartIndices: (Object | null)[]): CommandManager$TokenizationResult;
    equals(other: Object | null): boolean;
    hashCode(): number;
    toString(): string;
}