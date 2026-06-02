import type { Display } from '../../../../oshi/hardware/Display.d.ts'
import type { AbstractDisplay } from '../../../../oshi/hardware/common/AbstractDisplay.d.ts'
export class MacDisplay extends AbstractDisplay {
    static getDisplays(): Display[];
    constructor(arg0: number[])
}