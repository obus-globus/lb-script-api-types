import type { TruffleCompilerOptionDescriptor$Type } from '../../../../com/oracle/truffle/compiler/TruffleCompilerOptionDescriptor$Type.d.ts'
import type { Record } from '../../../../java/lang/Record.d.ts'
import type { Object } from '../../../../java/lang/Object.d.ts'
export class TruffleCompilerOptionDescriptor extends Record {
    constructor(name: string, type: TruffleCompilerOptionDescriptor$Type, deprecated: boolean, help: string, deprecationMessage: string)
    // private deprecated: boolean;
    // private deprecationMessage: string;
    // private help: string;
    // private name: string;
    // private type: TruffleCompilerOptionDescriptor$Type;
    deprecated(): boolean;
    deprecationMessage(): string;
    equals(o: Object | null): boolean;
    hashCode(): number;
    help(): string;
    name(): string;
    toString(): string;
    type(): TruffleCompilerOptionDescriptor$Type;
}