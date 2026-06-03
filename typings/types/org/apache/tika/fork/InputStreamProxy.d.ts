import type { DataInputStream } from '../../../../java/io/DataInputStream.d.ts'
import type { DataOutputStream } from '../../../../java/io/DataOutputStream.d.ts'
import type { InputStream } from '../../../../java/io/InputStream.d.ts'
import type { ForkProxy } from '../../../../org/apache/tika/fork/ForkProxy.d.ts'
export class InputStreamProxy extends InputStream implements ForkProxy {
    static nullInputStream(): InputStream;
    constructor(arg0: number)
    // private input: DataInputStream;
    // private output: DataOutputStream;
    // private resource: number;
    init(arg0: DataInputStream, arg1: DataOutputStream): void;
    read(): number;
    read(arg0: number[]): number;
    read(arg0: number[], arg1: number, arg2: number): number;
}