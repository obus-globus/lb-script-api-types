import type { Object } from '../../../../java/lang/Object.d.ts'
export class MachineMetadata$Endian extends Object {
    static BIG: MachineMetadata$Endian;
    static LITTLE: MachineMetadata$Endian;
    private constructor(arg0: string, arg1: boolean)
    // private msb: boolean;
    readonly name: string;
    getMSB(): string;
    getName(): string;
    isMSB(): boolean;
}