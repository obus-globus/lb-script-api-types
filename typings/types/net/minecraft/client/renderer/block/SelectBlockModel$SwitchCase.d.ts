import type { Record } from '../../../../../java/lang/Record.d.ts'
import type { Object } from '../../../../../java/lang/Object.d.ts'
import type { BlockModel$Unbaked } from '../../../../../net/minecraft/client/renderer/block/model/BlockModel$Unbaked.d.ts'
export class SelectBlockModel$SwitchCase<T extends unknown> extends Record {
    constructor(values: T[], model: BlockModel$Unbaked)
    // private model: BlockModel$Unbaked;
    // private values: T[];
    equals(o: Object | null): boolean;
    hashCode(): number;
    model(): BlockModel$Unbaked;
    toString(): string;
    values(): T[];
}