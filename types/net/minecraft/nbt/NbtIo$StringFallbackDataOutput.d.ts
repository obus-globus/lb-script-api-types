import type { DataOutput } from '../../../java/io/DataOutput.d.ts'
import type { DelegateDataOutput } from '../../../net/minecraft/util/DelegateDataOutput.d.ts'
export class NbtIo$StringFallbackDataOutput extends DelegateDataOutput {
    constructor(parent: DataOutput)
    writeUTF(s: string): void;
}