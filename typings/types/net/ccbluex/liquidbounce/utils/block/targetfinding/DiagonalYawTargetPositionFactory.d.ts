import type { BaseYawTargetPositionFactory } from '../../../../../../net/ccbluex/liquidbounce/utils/block/targetfinding/BaseYawTargetPositionFactory.d.ts'
import type { PositionFactoryConfiguration } from '../../../../../../net/ccbluex/liquidbounce/utils/block/targetfinding/PositionFactoryConfiguration.d.ts'
export class DiagonalYawTargetPositionFactory extends BaseYawTargetPositionFactory {
    constructor(config: PositionFactoryConfiguration)
    protected getAngle(): number;
}