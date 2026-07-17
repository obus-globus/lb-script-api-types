import type { JavaMap } from '../../../../../JavaMap.d.ts'
import type { Object } from '../../../../../java/lang/Object.d.ts'
export class BlockState extends Object {
    static fromString(paramarg0: string): BlockState;
    constructor(arg0: string, arg1: string, arg2: JavaMap<string, string>)
    constructor(arg0: string, arg1: JavaMap<string, string>)
    // private identifier: string;
    // private namespace: string;
    // private properties: JavaMap<string, string>;
    equals(arg0: Object | null): boolean;
    hasProperty(arg0: string, arg1: string): boolean;
    hashCode(): number;
    identifier(): string;
    namespace(): string;
    namespacedIdentifier(): string;
    properties(): JavaMap<string, string>;
    replaceProperties(arg0: JavaMap<string, string>): BlockState;
    replaceProperty(arg0: string, arg1: string): BlockState;
    toBlockStateString(): string;
    toBlockStateString(arg0: boolean): string;
    toString(): string;
    withIdentifier(arg0: string): BlockState;
    withNamespace(arg0: string): BlockState;
    withNamespacedIdentifier(arg0: string): BlockState;
    withProperties(arg0: JavaMap<string, string>): BlockState;
    withProperty(arg0: string, arg1: string): BlockState;
    withoutProperties(...arg0: string[]): BlockState;
}