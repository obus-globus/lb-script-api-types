import type { FrameDescriptor } from '../../../../../../com/oracle/truffle/api/frame/FrameDescriptor.d.ts'
import type { TruffleString } from '../../../../../../com/oracle/truffle/api/strings/TruffleString.d.ts'
import type { Record } from '../../../../../../java/lang/Record.d.ts'
import type { Object } from '../../../../../../java/lang/Object.d.ts'
export class SyntheticModuleRecord$SharedData extends Record {
    static fromExportNames(paramexportNames: TruffleString[]): SyntheticModuleRecord$SharedData;
    constructor(exportNames: TruffleString[], frameDescriptor: FrameDescriptor)
    // private exportNames: TruffleString[];
    // private frameDescriptor: FrameDescriptor;
    equals(o: Object | null): boolean;
    exportNames(): TruffleString[];
    frameDescriptor(): FrameDescriptor;
    hashCode(): number;
    toString(): string;
}