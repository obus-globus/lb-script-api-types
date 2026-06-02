import type { Object } from '../../../java/lang/Object.d.ts'
import type { Handle } from '../../../org/objectweb/asm/Handle.d.ts'
export class ConstantDynamic extends Object {
    constructor(arg0: string, arg1: string, arg2: Handle, arg3: Object[])
    readonly bootstrapMethod: Handle;
    // private bootstrapMethodArguments: Object[];
    readonly descriptor: string;
    readonly name: string;
    equals(arg0: Object | null): boolean;
    getBootstrapMethod(): Handle;
    getBootstrapMethodArgument(arg0: number): Object;
    getBootstrapMethodArgumentCount(): number;
    getBootstrapMethodArgumentsUnsafe(): Object[];
    getDescriptor(): string;
    getName(): string;
    getSize(): number;
    hashCode(): number;
    toString(): string;
}