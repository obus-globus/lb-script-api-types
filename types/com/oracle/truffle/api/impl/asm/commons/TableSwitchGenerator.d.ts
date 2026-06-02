import type { Label } from '../../../../../../../com/oracle/truffle/api/impl/asm/Label.d.ts'
import type { Object } from '../../../../../../../java/lang/Object.d.ts'
export interface TableSwitchGenerator extends Object{
    generateCase(key: number, end: Label): void;
    generateDefault(): void;
}