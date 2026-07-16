import type { Class } from '../../../java/lang/Class.d.ts'
import type { Enum } from '../../../java/lang/Enum.d.ts'
export class DefaultChannelPipeline$AddStrategy extends Enum<DefaultChannelPipeline$AddStrategy> {
    static ADD_AFTER: DefaultChannelPipeline$AddStrategy;
    static ADD_BEFORE: DefaultChannelPipeline$AddStrategy;
    static ADD_FIRST: DefaultChannelPipeline$AddStrategy;
    static ADD_LAST: DefaultChannelPipeline$AddStrategy;
    static valueOf<T extends Enum<T>>(paramarg0: Class<T>, paramarg1: string): T;
    static valueOf(paramarg0: string): DefaultChannelPipeline$AddStrategy;
    static values(): DefaultChannelPipeline$AddStrategy[];
    private constructor()
    name(): "ADD_FIRST" | "ADD_LAST" | "ADD_BEFORE" | "ADD_AFTER";
}