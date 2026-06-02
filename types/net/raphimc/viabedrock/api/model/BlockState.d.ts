import type { Object } from '../../../../../java/lang/Object.d.ts'
export class BlockState extends Object {
    static fromString(paramarg0: string): BlockState;
    constructor(arg0: string, arg1: string, arg2: { [key: string]: string })
    constructor(arg0: string, arg1: { [key: string]: string })
    // private identifier: string;
    // private namespace: string;
    // private properties: { [key: string]: string };
    equals(arg0: Object | null): boolean;
    hasProperty(arg0: string, arg1: string): boolean;
    hashCode(): number;
    identifier(): string;
    namespace(): string;
    namespacedIdentifier(): string;
    properties(): { [key: string]: string };
    replaceProperties(arg0: { [key: string]: string }): BlockState;
    replaceProperty(arg0: string, arg1: string): BlockState;
    toBlockStateString(): string;
    toBlockStateString(arg0: boolean): string;
    toString(): string;
    withIdentifier(arg0: string): BlockState;
    withNamespace(arg0: string): BlockState;
    withNamespacedIdentifier(arg0: string): BlockState;
    withProperties(arg0: { [key: string]: string }): BlockState;
    withProperty(arg0: string, arg1: string): BlockState;
    withoutProperties(arg0: string[]): BlockState;
}