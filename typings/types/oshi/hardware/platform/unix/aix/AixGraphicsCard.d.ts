import type { Supplier } from '../../../../../java/util/function/Supplier.d.ts'
import type { GraphicsCard } from '../../../../../oshi/hardware/GraphicsCard.d.ts'
import type { AbstractGraphicsCard } from '../../../../../oshi/hardware/common/AbstractGraphicsCard.d.ts'
export class AixGraphicsCard extends AbstractGraphicsCard {
    static getGraphicsCards(paramarg0: () => string[]): GraphicsCard[];
    constructor(arg0: string, arg1: string, arg2: string, arg3: string, arg4: number)
}