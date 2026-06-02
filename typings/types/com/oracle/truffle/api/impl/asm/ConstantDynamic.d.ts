import type { Handle } from '../../../../../../com/oracle/truffle/api/impl/asm/Handle.d.ts'
import type { Object } from '../../../../../../java/lang/Object.d.ts'
export class ConstantDynamic extends Object {
    constructor(name: string, descriptor: string, bootstrapMethod: Handle, bootstrapMethodArguments: Object[])
    readonly bootstrapMethod: Handle;
    // private bootstrapMethodArguments: Object[];
    readonly descriptor: string;
    readonly name: string;
    equals(object: Object | null): boolean;
    getBootstrapMethod(): Handle;
    getBootstrapMethodArgument(index: number): Object;
    getBootstrapMethodArgumentCount(): number;
    getBootstrapMethodArgumentsUnsafe(): Object[];
    getDescriptor(): string;
    getName(): string;
    getSize(): number;
    hashCode(): number;
    toString(): string;
}