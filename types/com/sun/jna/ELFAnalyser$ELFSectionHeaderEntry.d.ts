import type { ByteBuffer } from '../../../java/nio/ByteBuffer.d.ts'
import type { Object } from '../../../java/lang/Object.d.ts'
export class ELFAnalyser$ELFSectionHeaderEntry extends Object {
    constructor(arg0: boolean, arg1: ByteBuffer)
    readonly addr: number;
    readonly flags: number;
    readonly link: number;
    readonly name: string;
    readonly nameOffset: number;
    readonly offset: number;
    readonly size: number;
    readonly type: number;
    getAddr(): number;
    getFlags(): number;
    getLink(): number;
    getName(): string;
    getNameOffset(): number;
    getOffset(): number;
    getSize(): number;
    getType(): number;
    setName(arg0: string): void;
    toString(): string;
}