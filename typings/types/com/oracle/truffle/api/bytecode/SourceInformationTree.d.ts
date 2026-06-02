import type { SourceInformation } from '../../../../../com/oracle/truffle/api/bytecode/SourceInformation.d.ts'
import type { Object } from '../../../../../java/lang/Object.d.ts'
export abstract class SourceInformationTree extends SourceInformation {
    constructor(token: Object)
    getChildren(): SourceInformationTree[];
    toString(): string;
    // private toString(depth: number): string;
}