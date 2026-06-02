import type { GraphicsCard } from '../../../../../oshi/hardware/GraphicsCard.d.ts'
import type { AbstractGraphicsCard } from '../../../../../oshi/hardware/common/AbstractGraphicsCard.d.ts'
export class SolarisGraphicsCard extends AbstractGraphicsCard {
    static getGraphicsCards(): GraphicsCard[];
    constructor(arg0: string, arg1: string, arg2: string, arg3: string, arg4: number)
}