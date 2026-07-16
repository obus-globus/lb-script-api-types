import type { Object } from '../../../../../../java/lang/Object.d.ts'
import type { CustomLevelConfig } from '../../../../../../org/apache/logging/log4j/core/config/CustomLevelConfig.d.ts'
export class CustomLevels extends Object {
    static createCustomLevels(paramcustomLevels: CustomLevelConfig[]): CustomLevels;
    private constructor(customLevels: CustomLevelConfig[])
    readonly customLevels: CustomLevelConfig[];
    getCustomLevels(): CustomLevelConfig[];
}