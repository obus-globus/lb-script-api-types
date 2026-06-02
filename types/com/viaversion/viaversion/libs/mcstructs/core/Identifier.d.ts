import type { Object } from '../../../../../../java/lang/Object.d.ts'
export class Identifier extends Object {
    static DEFAULT_NAMESPACE: string;
    static VALID_KEY_CHARS: string;
    static VALID_VALUE_CHARS: string;
    static defaultNamespace(paramarg0: string): Identifier;
    static of(paramarg0: string): Identifier;
    static of(paramarg0: string, paramarg1: string): Identifier;
    static stripDefaultNamespace(paramarg0: Identifier): string;
    static tryOf(paramarg0: string): Identifier;
    private constructor(arg0: string, arg1: string)
    readonly key: string;
    readonly value: string;
    canEqual(arg0: Object): boolean;
    equals(arg0: Object | null): boolean;
    equals(arg0: string, arg1: string): boolean;
    get(): string;
    getKey(): string;
    getValue(): string;
    hashCode(): number;
    toString(): string;
}