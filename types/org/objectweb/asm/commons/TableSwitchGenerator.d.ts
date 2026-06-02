import type { Object } from '../../../../java/lang/Object.d.ts'
import type { Label } from '../../../../org/objectweb/asm/Label.d.ts'
export interface TableSwitchGenerator extends Object{
    generateCase(arg0: number, arg1: Label): void;
    generateDefault(): void;
}